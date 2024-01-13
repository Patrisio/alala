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

// export async function createPage(name: string) {
//     const page = await prisma.website.update({
//         where: {
//             id: 2,
//         },
//         data: {
//             pages: {
//                 create: {
//                     name,
//                 },
//             },
//         },
//         include: {
//             pages: true,
//         },
//     });

//     return page;
// }

// grid: {
//     create: {
//         rows: 10,
//         columns: 24,
//         rowGap: 10,
//         columnGap: 10,
//         maxRowsCount: 10,
//         gridCellHeight: 36,
//     }
// },

// elements: {
//     create: {
        //     width: 10,
        //     height: 44,
        //     minWidth: 34,
        //     minHeight: 23,
        //     type: 'BUTTON',
        //     position: {
        //         create: {
        //             rowStart: 3,
        //             rowEnd: 5,
        //             columnStart: 5,
        //             columnEnd: 10,
        //         },
        //     }
        // }
    
// }

export async function deletePage(id: number) {
    console.log(id, '__AGE_ID__');
    const deletedPage = await prisma.page.delete({
        where: {
            id,
        },
    });

    return deletedPage;
}

export async function createPage() {
    const page = await prisma.page.create({
        data: {
            name: 'test page',
            sections: {
                create: {
                    grid: {
                        create: {
                            rows: 10,
                            columns: 24,
                            rowGap: 10,
                            columnGap: 10,
                            maxRowsCount: 10,
                            gridCellHeight: 36,
                        }
                    }
                }
            },
            website: {
                connect: {
                    id: 2
                },
            },
        },
    });
    
    return page;
}

export async function hello(sectionList) {
    const positionList = sectionList.flatMap((section) => {
        return section.elements.flatMap((element) => {
            return element.position;
        });
    });

    const positionIds = [];

    for (const position of positionList) {
        const {rowStart, rowEnd, columnStart, columnEnd} = position;
        const prismaPosition = await prisma.position.upsert({
            where: {
                id: position.id,
            },
            create: {
                rowStart,
                rowEnd,
                columnStart,
                columnEnd,
            },
            update: {
                rowStart,
                rowEnd,
                columnStart,
                columnEnd,
            },
        });

        positionIds.push(prismaPosition.id);
    }

    console.log(positionIds, 'positionIds');

    return positionIds;
}

export async function updatePage(id: number, sectionList) {
    const positionIds = await hello(sectionList, );
    console.log(id, '__PAGE_IDDD__');
    console.log(sectionList, '__LIST__')
    console.log(positionIds, '__positionIds__');
    for (const section of sectionList) {
        const elementList = section.elements;

        const formattedElementList = elementList.map((element, idx) => {
            const positionId = positionIds[idx];
            const {position, ...restElementData} = element;
            return {
                ...restElementData,
                positionId,
            };
        });

        console.log(formattedElementList, '__formattedElementList__');
        console.log(section.id, 'section.id');

        const {id: gridId, ...gridData} = section.grid;

        const isExistSection = await prisma.section.findUnique({
            where: {
                id: section.id,
            },
        });

        if (isExistSection) {
            await prisma.section.update({
                where: {
                    id: section.id,
                },
                data: {
                    page: {
                        connect: {
                            id
                        }
                    },
                    grid: {
                        update: {
                            where: {
                                id: gridId,
                            },
                            data: gridData,
                        },
                    },
                },
            });

            for (const element of section.elements) {
                await prisma.element.update({
                    where: {
                        id: element.id,
                    },
                    data: {
                        ...element,
                        Section: {
                            connect: {
                                id: section.id,
                            }
                        }
                    },
                });
            }

            return;
        }

        await prisma.section.create({
            data: {
                page: {
                    connect: {
                        id
                    },
                },
                grid: {
                    create: {
                        rows: 10,
                        columns: 24,
                        rowGap: 10,
                        columnGap: 10,
                        maxRowsCount: 10,
                        gridCellHeight: 36,
                    },
                },
                elements: {
                    createMany: {
                        data: formattedElementList,
                    },
                },
            },
        });
    }
}

export async function savePage() {
    const page = await prisma.website.upsert({
        where: {
            id: 1,
        },
        create: {
            name: 'website name',
            pages: {
                create: {
                    name: 'page name',
                    sections: {
                        create: {
                            elements: {
                                create: {
                                    width: 10,
                                    height: 44,
                                    minWidth: 34,
                                    minHeight: 23,
                                    type: 'BUTTON',
                                    position: {
                                        create: {
                                            rowStart: 3,
                                            rowEnd: 5,
                                            columnStart: 5,
                                            columnEnd: 10,
                                        },
                                    }
                                }
                            },
                            grid: {
                                create: {
                                    rows: 10,
                                    columns: 24,
                                    rowGap: 10,
                                    columnGap: 10,
                                    maxRowsCount: 10,
                                    gridCellHeight: 36,
                                }
                            },
                        }
                    }
                },
            },
        },
        update: {

        },
        include: {
            pages: true,
        },
    });


    return page;
}

export async function getWebsite() {
    const page = await prisma.website.findUnique({
		where: {
			id: 2,
		},
        include: {
            pages: {
                include: {
                    sections: {
                        include: {
                            grid: true,
                            elements: {
                                include: {
                                    position: true
                                }
                            }
                        }
                    },
                }
            }
        },
	});

    return page;
}

export async function createEmptyWebsite() {
    const page = await prisma.website.create({
		data: {
            name: 'Website for sales',
        },
	});

    return page;
}

export async function createWebsite() {
    const position = await prisma.position.create({
        data: {
            rowStart: 4,
            rowEnd: 8,
            columnStart: 3,
            columnEnd: 8,
        }
    });
    
    const page = await prisma.website.create({
		data: {
            name: 'test hello 777',
            pages: {
                create: {
                    sections: {
                        create: [
                            {
                                grid: {
                                    create: {
                                        rows: 10,
                                        columns: 24,
                                        rowGap: 10,
                                        columnGap: 10,
                                        maxRowsCount: 10,
                                        gridCellHeight: 36,
                                    }
                                },
                                elements: {
                                    create: [
                                        {
                                            width: 300,
                                            height: 400,
                                            minWidth: 50,
                                            minHeight: 36,
                                            type: 'SHAPE',
                                            positionId: position.id,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
	});

    return page;
}