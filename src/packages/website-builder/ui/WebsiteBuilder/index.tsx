'use client'

import {ViewportPreviewer, ConfigurationMenu} from '../../modules';
import {ViewportPreviewerWrapper} from './styles';
import {PageTemplateFactory} from '../../../page-editor';
import {WebsiteBuilderVM} from '../../vm';

import {observer} from 'mobx-react';
import {useState, useMemo, useEffect} from 'react';
import dynamic from 'next/dynamic';

export const WebsiteBuilder = observer(() => {
    const [open, setOpen] = useState(true);

    const websiteBuilderVM = useMemo(() => {
        return new WebsiteBuilderVM();
    }, []);

    const addEmptyPage = () => {
        const page = PageTemplateFactory.createRandomPage();
        websiteBuilderVM.addPage(page);
    };

	const ViewportPreviewer = dynamic(() => import('../../modules/viewport-previewer').then((module) => module.ViewportPreviewer), { ssr: false });


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
                    addEmptyPage={addEmptyPage}
                    pageList={websiteBuilderVM.pageList}
                />
                <ViewportPreviewerWrapper open={open}>
                    <ViewportPreviewer />
                </ViewportPreviewerWrapper>
            </div>
        </>
    );
});
