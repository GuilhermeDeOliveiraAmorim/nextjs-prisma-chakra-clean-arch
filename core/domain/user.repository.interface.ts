import User from "./user.entity";

export default interface UserRepositoryInterface {
    add(user: User): Promise<void>;
    find(userId: string): Promise<User>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<void>;
}