import User from '@/core/domain/user.entity';
import { CreateUserFacadeInputDto } from '@/core/domain/user.facade';
import UserFactory from '@/core/domain/user.factory';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    try {
        if (req.method === 'POST') {
            const input: CreateUserFacadeInputDto = req.body;

            const userFactory = UserFactory.create();

            const newUser = await userFactory.createUser(input);

            const output = new User({
                email: newUser.user.email,
                name: newUser.user.name,
                id: newUser.user.id
            });

            res.status(200).send(output);
        }
    } catch (error) {
        throw new Error("Error creating user");
    }
}
