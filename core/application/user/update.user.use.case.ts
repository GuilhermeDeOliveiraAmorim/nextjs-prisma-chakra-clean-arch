import User from "@/core/domain/user.entity";
import UserRepositoryInterface from "@/core/domain/user.repository.interface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

interface UpdateUserInputDto {
    userId: string;
    name: string;
    email: string;
}

interface UpdateUserOutputDto {
    user: User;
}

export default class UpdateUserUseCase implements SharedUseCaseInterface {
    private _userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository;
    }

    async execute(input: UpdateUserInputDto): Promise<UpdateUserOutputDto> {
        try {
            const userFound = await this._userRepository.find(input.userId);

            if (userFound === null) {
                throw new Error("Could not find user");
            }

            const userUpdated = new User({
                id: input.userId,
                name: input.name,
                email: input.email,
            });

            await this._userRepository.update(userFound);

            const output: UpdateUserOutputDto = {
                user: userUpdated,
            };

            return output;

        } catch (error) {
            throw new Error("Could not find user");
        }
    }
}