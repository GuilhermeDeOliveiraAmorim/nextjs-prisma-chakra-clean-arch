import AddUserUseCase from "../application/user/add.user.use.case";
import FindAllUserUseCase from "../application/user/find.all.use.use.case";
import FindUserUseCase from "../application/user/find.user.use.case";
import UpdateUserUseCase from "../application/user/update.user.use.case";
import UserRepositoryImpl from "../infra/repository/user/user.repository.impl";
import UserFacade from "./user.facade";

export default class UserFactory {
    static create() {
        const userRepository = new UserRepositoryImpl();

        const addUserUseCase = new AddUserUseCase(userRepository);
        const findUserUseCase = new FindUserUseCase(userRepository);
        const findAllUserUseCase = new FindAllUserUseCase(userRepository);
        const updateUserUseCase = new UpdateUserUseCase(userRepository);

        const userFacade = new UserFacade({
            addUseCase: addUserUseCase,
            findUseCase: findUserUseCase,
            findAllUseCase: findAllUserUseCase,
            updateUseCase: updateUserUseCase,
        });

        return userFacade;
    }
}