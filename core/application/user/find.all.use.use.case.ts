import User from "@/core/domain/user.entity";
import UserRepositoryInterface from "@/core/domain/user.repository.interface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";
interface FindAllUserOutputDto {
    users: User[];
}

export default class FindAllUserUseCase implements SharedUseCaseInterface {
    private _userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository;
    }

    async execute(): Promise<FindAllUserOutputDto> {
        try {
            const usersFound = await this._userRepository.findAll();

            console.log(usersFound);

            const output: FindAllUserOutputDto = {
                users: usersFound,
            };

            return output;

        } catch (error) {
            throw new Error("Could not find users");
        }
    }
}