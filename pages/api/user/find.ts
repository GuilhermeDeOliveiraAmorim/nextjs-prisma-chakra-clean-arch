import { FindUserFacadeInputDto } from '@/core/domain/user.facade';
import UserFactory from '@/core/domain/user.factory';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            const input: FindUserFacadeInputDto = req.body;

            console.log(input);

            const userFactory = UserFactory.create();

            const userFound = await userFactory.findUser(input);

            res.status(200).json({ user: userFound });
        }
    } catch (error) {

    }
}
