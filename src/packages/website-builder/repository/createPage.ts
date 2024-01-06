'use server';

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// export function createPage() {
//     const abortController = new AbortController();

//     request(abortController);

//     return abortController;
// }

export async function request(abortController?: any) {
    const website = await prisma.website.create({
		data: {
			name: 'from server333',
		},
	});

    return website;
}

export async function createPage() {
    const page = await prisma.page.create({
		data: {
			sections: {
                create: [
                    {
                        element: {}
                    },
                ],
            },
            websiteId: 240,
		},
	});

    return page;
}

export async function getWebsite() {
    const page = await prisma.website.findUnique({
		where: {
			id: 240,
		},
        include: {
            pages: {
                include: {
                    sections: true,
                }
            }
        },
	});

    return page;
}