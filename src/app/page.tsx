'use client'

import {Debug} from '../packages/system/Debug/Debug';
import {Converter, PageEditorVM, PageEditor} from '../packages/page-editor';

import {observer} from 'mobx-react';
import dynamic from 'next/dynamic';

import {useMemo, useRef, useEffect, useLayoutEffect, useState} from 'react';

const EditorPage = observer(() => {
    const PageEditor = useMemo(() => {
        return dynamic(() => import('../packages/page-editor').then((el) => el.PageEditor), { ssr: false });
    }, []);

    const [pageEditorVM] = useState(() => new PageEditorVM());

    return (
        <>
            <PageEditor vm={pageEditorVM} />
            <Debug
                page={pageEditorVM}
            />
        </>
    )
});

export default EditorPage;
