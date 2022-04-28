import { PrismaClient } from "@prisma/client";
import { isAuthorized } from "../tokenFunctions";

export async function writePost (req: any, res: any) {

    // 쿠키가 없거나 맞지 않으면 오류 처리
    if (!isAuthorized(req)) {
        return res.status(405).send('Mismatched Cookies')
    }

    // 닉네임으로 users 테이블에서 id값을 가져온다.
    const accsessTokenData: any = isAuthorized(req)
    const prisma = new PrismaClient();
    const userInfo = await prisma.users.findFirst({
        where:{
            nickname:accsessTokenData.nickname
        }
    })

    // 가져온 id값과 body에 들어있는 값을 삽입한다.
    await prisma.posts.create({
        data: {
            nickname:userInfo?.id,
            likes:0,
            view:0,
            file:'',
            caption:req.body.caption,
            context:req.body.context
        }
    })
    return res.status(200).send('ok')
}