import User from "@/core/domain/user.entity";
import UserRepositoryInterface from "@/core/domain/user.repository.interface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

interface AddUserInputDto {
    name: string;
    email: string;
}

interface AddUserOutputDto {
    user: User;
}

export default class AddUserUseCase implements SharedUseCaseInterface {
    private _userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository;
    }

    async execute(input: AddUserInputDto): Promise<AddUserOutputDto> {
        try {
            const newUser = new User({
                name: input.name,
                email: input.email
            });

            await this._userRepository.add(newUser);

            const output: AddUserOutputDto = {
                user: newUser,
            };

            return output;

        } catch (error) {
            throw new Error("Error creating");
        }
    }
}