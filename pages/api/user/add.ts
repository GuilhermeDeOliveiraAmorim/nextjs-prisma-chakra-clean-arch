import { UserProps } from '@/core/domain/user.entity';
import UserFactory from '@/core/domain/user.factory';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    routeName: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'POST') {
            const input: UserProps = req.body;

            const userFactory = UserFactory.create();

            userFactory.createUser(input);

            res.status(200).json({ routeName: 'Add User' });
        }
    } catch (error) {

    }
}
