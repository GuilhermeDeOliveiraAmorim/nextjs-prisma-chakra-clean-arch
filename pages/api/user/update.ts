import User from '@/core/domain/user.entity';
import { UpdateUserFacadeInputDto } from '@/core/domain/user.facade';
import UserFactory from '@/core/domain/user.factory';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    try {
        if (req.method === 'PATCH') {
            const input: UpdateUserFacadeInputDto = req.body;

            const userFactory = UserFactory.create();

            const newUser = await userFactory.updateUser(input);

            const output = new User({
                email: newUser.user.email,
                name: newUser.user.name,
                id: newUser.user.id
            });

            res.status(200).send(output);
        }
    } catch (error) {
        throw new Error("Error updating user");
    }
}