import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient()

export async function POST(request: Request) {
    // console.log(request);
    const res = await request.json();
    console.log(res. '__HUI__');

    const {name} = res;
    const website = await prisma.website.create({
        data: {
            name,
        }
	});

    return Response.json(website);
}
