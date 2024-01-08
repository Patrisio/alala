'use client'

import {ViewportPreviewer, ConfigurationMenu} from '../../modules';
import {ViewportPreviewerWrapper} from './styles';
import {PageTemplateFactory, Converter} from '../../../page-editor';
import {WebsiteBuilderVM} from '../../vm';
import {createPage} from '../../repository';

import {observer} from 'mobx-react';
import {useState, useMemo, useEffect, use, useLayoutEffect} from 'react';
import dynamic from 'next/dynamic';

export const WebsiteBuilder = observer(({website: websitePromise}) => {
    const website = use(websitePromise);
    const [websiteBuilderVM, setWebsiteBuilderVM] = useState(null);

    useEffect(() => {
        if (!website) return;

        const websiteBuilderVM = new WebsiteBuilderVM(website.id, website.name);

        for (const page of website.pages) {
            const pageEntity = new Converter(page.sections, page.id, page.name).getPage();

            websiteBuilderVM.addPage(pageEntity);
        }

        setWebsiteBuilderVM(websiteBuilderVM);
    }, [website]);


    const [open, setOpen] = useState(true);

    const addEmptyPage = () => {
    };

	const ViewportPreviewer = dynamic(() => import('../../modules/viewport-previewer').then((module) => module.ViewportPreviewer), { ssr: false });

    const addPage = async () => {
        const page = await createPage();

        const pageEntity = new Converter([], page.id, page.name).getPage();
        websiteBuilderVM.addPage(pageEntity);

        console.log(page, '__VIDDD__');
    };

    return (
        <>
            <div style={{
                display: 'flex',
            }}>
                <button
                    style={{position: 'fixed', left: 0, bottom: 0, zIndex: 9999, background: 'blue'}}
                    onClick={() => setOpen(prev => !prev)}
                >
                    {open ? 'close' : 'open'}
                </button>
                <ConfigurationMenu
                    open={open}
                    addEmptyPage={addPage}
                    pageList={websiteBuilderVM?.pageList ?? []}
                />
                <ViewportPreviewerWrapper open={open}>
                    <ViewportPreviewer />
                </ViewportPreviewerWrapper>
            </div>
        </>
    );
});
