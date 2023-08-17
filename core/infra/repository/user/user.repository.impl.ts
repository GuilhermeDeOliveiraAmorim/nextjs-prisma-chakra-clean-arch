import User from "@/core/domain/user.entity";
import UserRepositoryInterface from "@/core/domain/user.repository.interface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default class UserRepositoryImpl implements UserRepositoryInterface {
    async add(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        });
    }

    async find(userId: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            }
        });

        if (user === null) {
            throw new Error("Not found");
        }

        const output = new User({
            id: user.id,
            email: user.email,
            name: user.name,
        });

        return output;
    }

    async findAll(): Promise<User[]> {
        const users = await prisma.user.findMany();

        if (users.length === 0) {
            throw new Error("Not found");
        }

        const output: User[] = [];

        users.forEach(user => {
            output.push(new User(user))
        });

        return output;
    }

    async update(user: User): Promise<void> {
        await prisma.user.update({
            data: {
                name: user.name,
                email: user.email,
            },
            where: {
                id: user.id,
            }
        });
    }
}