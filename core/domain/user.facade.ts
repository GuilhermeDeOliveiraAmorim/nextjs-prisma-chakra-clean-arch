import { SharedUseCaseInterface } from "../shared/shared.use.case.interface";
import User from "./user.entity";

export interface CreateUserFacadeInputDto {
    name: string;
    email: string;
}

export interface CreateUserFacadeOutputDto {
    user: User;
}

export interface FindAllUserFacadeInputDto {

}

export interface FindAllUsersFacadeOutputDto {
    users: User[];
}

export interface FindUserFacadeInputDto {
    userId: string;
}

export interface FindUserFacadeOutputDto {
    user: User;
}

export interface UpdateUserFacadeInputDto {
    userId: string;
    name: string;
    email: string;
}

export interface UpdateUserFacadeOutputDto {
    user: User;
}

export interface UserFacadeInterface {
    createUser(
        input: CreateUserFacadeInputDto
    ): Promise<CreateUserFacadeOutputDto>;

    findAllUser(
        input: FindAllUserFacadeInputDto
    ): Promise<FindAllUsersFacadeOutputDto>;

    findUser(
        input: FindUserFacadeInputDto
    ): Promise<FindUserFacadeOutputDto>;

    updateUser(
        input: UpdateUserFacadeInputDto
    ): Promise<UpdateUserFacadeOutputDto>;
}

export interface UseCaseProps {
    addUseCase: SharedUseCaseInterface;
    findUseCase: SharedUseCaseInterface;
    findAllUseCase: SharedUseCaseInterface;
    updateUseCase: SharedUseCaseInterface;
}

export default class UserFacade implements UserFacadeInterface {
    private _addUseCase: SharedUseCaseInterface;
    private _findUseCase: SharedUseCaseInterface;
    private _findAllUseCase: SharedUseCaseInterface;
    private _updateUseCase: SharedUseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._addUseCase = useCaseProps.addUseCase;
        this._findUseCase = useCaseProps.findUseCase;
        this._findAllUseCase = useCaseProps.findAllUseCase;
        this._updateUseCase = useCaseProps.updateUseCase;
    }

    createUser(
        input: CreateUserFacadeInputDto
    ): Promise<CreateUserFacadeOutputDto> {
        return this._addUseCase.execute(input);
    }

    findAllUser(
        input: FindAllUserFacadeInputDto
    ): Promise<FindAllUsersFacadeOutputDto> {
        return this._findAllUseCase.execute(input);
    }

    findUser(
        input: FindUserFacadeInputDto
    ): Promise<FindUserFacadeOutputDto> {
        return this._findUseCase.execute(input);
    }

    updateUser(
        input: UpdateUserFacadeInputDto
    ): Promise<UpdateUserFacadeOutputDto> {
        return this._updateUseCase.execute(input);
    }
}