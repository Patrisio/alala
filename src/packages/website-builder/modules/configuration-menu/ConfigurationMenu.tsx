'use client'

import {PanelTitle, PageMiniCardListControls, PageMiniCardList} from './components';

import {observer} from 'mobx-react';

export const ConfigurationMenu = observer(({open, addEmptyPage, deletePage, pageList, title, children}) => {
    console.log(pageList, '__pageList--');
    return (
        <div
            className='sidebar'
            style={{
                width: open ? 342 : 0,
                height: 500,
                visibility: open ? 'visible' : 'hidden',
            }}
        >
            <PanelTitle title={title} />
            {children}

            <div style={{width: 1000, height: 500}}></div>
        </div>
    );
});
