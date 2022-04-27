import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { isAuthorized } from "../tokenFunctions";

export async function updatePro (req: any, res: any) {
    if (!req.headers.cookie) {
        res.status(401).send(
            { data: null, message: 'no cookies' }
        )
    }
    if (!isAuthorized(req)) {
        res.status(401).send(
            { data: null, message: 'invaild user' }
        )
    }

    const accsessTokenData: any = isAuthorized(req)
    const userInfo = Object.assign({}, req.body)
    await prisma.users.update({
        where: {id: accsessTokenData.id},
        data: userInfo
    })
    res.status(200).send(`${userInfo} change ok`)
}