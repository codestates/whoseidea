import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { isAuthorized } from "../tokenFunctions";

export async function messanger (req :any, res: any) {
    if (!isAuthorized(req)) {
        return res.status(422).send('invaild')
    }
    const accsessTokenData: any = isAuthorized(req)
    const userInfo = await prisma.users.findFirst({
        where: {
            nickname: accsessTokenData?.nickname
        }
    })
    if (!userInfo) {
        return res.status(425).send('not user')
    }
    if (!await prisma.users.findFirst({
        where: {nickname: req.body.userId}
    })) {
        return res.status(426).send('not find user')
    }
    await prisma.messages.create({
        data: {
            nickname: userInfo?.id,
            text: req.body.context,
            target: req.body.target
        }
    })
    return res.status(200).send('send ok')
}
