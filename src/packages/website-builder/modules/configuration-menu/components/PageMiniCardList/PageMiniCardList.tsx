'use client'

import {PageMiniCard} from '../PageMiniCard';

import {observer} from 'mobx-react';

export const PageMiniCardList = observer(({pageList, deletePage}) => {
    return (
        <div>
            {pageList.map((pageVM) => {
                return (
                    <PageMiniCard
                        pageVM={pageVM}
                        deletePage={deletePage}
                        key={pageVM.id}
                    />
                );
            })}
        </div>
    );
});
