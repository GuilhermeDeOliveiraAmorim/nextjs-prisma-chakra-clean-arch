import User from "@/core/domain/user.entity";
import UserRepositoryInterface from "@/core/domain/user.repository.interface";
import { SharedUseCaseInterface } from "../../shared/shared.use.case.interface";

export interface FindUserInputDto {
    userId: string;
}

export interface FindUserOutputDto {
    user: User;
}

export default class FindUserUseCase implements SharedUseCaseInterface {
    private _userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this._userRepository = userRepository;
    }

    async execute(input: FindUserInputDto): Promise<FindUserOutputDto> {
        try {
            const userFound = await this._userRepository.find(input.userId);

            const output: FindUserOutputDto = {
                user: userFound,
            };

            return output;

        } catch (error) {
            throw new Error("Could not find user");
        }
    }
}