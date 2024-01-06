'use client'

import {Debug} from '../../packages/system/Debug/Debug';
import {Converter, PageEditorVM, PageEditor} from '../../packages/page-editor';

import {observer} from 'mobx-react';
// import dynamic from 'next/dynamic';

import {useMemo, useEffect, useRef} from 'react';

const EditorPage = observer(({ params }: { params: { websiteRouting: string[] } }) => {
    const {
        websiteRouting,
    } = params;

    // const PageEditor = useMemo(() => {
    //     return dynamic(() => import('../../packages/page-editor').then((module) => module.PageEditor), { ssr: false });
    // }, []);

    useEffect(() => {
        window.addEventListener('message', (e) => {
            if (e.source?.location.pathname !== '/config') return;

            const pageConfig = e.data.hello;
            const page = new Converter(pageConfig).getPage();
            pageEditorVM.replacePage(page);
        });

        window.parent.postMessage({isLoaded: true, pageId: websiteRouting[0]}, '*');
    }, []);


    const pageEditorVM = useMemo(() => {
        const pageId = websiteRouting[0];
        return new PageEditorVM();
    }, []);

    return (
        <>
            <PageEditor vm={pageEditorVM}/>
            <Debug
                page={pageEditorVM}
            />
        </>
    )
});

export default EditorPage;
