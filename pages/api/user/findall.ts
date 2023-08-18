import User from '@/core/domain/user.entity';
import UserFactory from '@/core/domain/user.factory';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {
    try {
        if (req.method === 'GET') {
            const userFactory = UserFactory.create();

            const users = await userFactory.findAllUser({});

            res.status(200).json(users.users);
        }
    } catch (error) {
        throw new Error("Not Found");
    }
}
