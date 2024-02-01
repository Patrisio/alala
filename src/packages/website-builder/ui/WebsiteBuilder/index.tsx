'use client'

import {ConfigurationMenu, FrameToolbar} from '../../modules';
import {ViewportPreviewerWrapper} from './styles';
import {WebsiteBuilderVM} from '../../vm';

import {PageMiniCardListControls, PageMiniCardList} from '../components';

import {observer} from 'mobx-react';
import {useState, useEffect, use} from 'react';
import dynamic from 'next/dynamic';

export const WebsiteBuilder = observer(({website: websitePromise}) => {
    const website = use(websitePromise);
    const [websiteBuilderVM, setWebsiteBuilderVM] = useState(null);

    useEffect(() => {
        let websiteBuilderVM;

        if (!website) {
            websiteBuilderVM = new WebsiteBuilderVM();
        } else {
            websiteBuilderVM = new WebsiteBuilderVM(website.id, website.name, website.pages);
        }

        setWebsiteBuilderVM(websiteBuilderVM);
    }, [website]);

	const ViewportPreviewer = dynamic(() =>
        import('../../modules/viewport-previewer')
            .then((module) => module.ViewportPreviewer), { ssr: false }
    );

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <ConfigurationMenu
                    title={'Pages'}
                    open={websiteBuilderVM?.layoutMode === 'right'}
                    // addEmptyPage={async () => await websiteBuilderVM?.asyncAddPage()}
                    // deletePage={(id: number) => async () => await websiteBuilderVM?.asyncDeletePage(id)}
                    // pageList={websiteBuilderVM?.pageList ?? []}
                >
                    <PageMiniCardListControls addEmptyPage={async () => await websiteBuilderVM?.asyncAddPage()}/>
                    <PageMiniCardList
                        pageList={websiteBuilderVM?.pageList ?? []}
                        deletePage={(id: number) => async () => await websiteBuilderVM?.asyncDeletePage(id)}
                    />
                </ConfigurationMenu>

                <ViewportPreviewerWrapper layout={websiteBuilderVM?.layoutMode}>
                    <FrameToolbar />
                    <ViewportPreviewer />
                </ViewportPreviewerWrapper>

                <ConfigurationMenu
                    title={'Styles'}
                    open={websiteBuilderVM?.layoutMode === 'left'}
                    // addEmptyPage={async () => await websiteBuilderVM?.asyncAddPage()}
                    // deletePage={(id: number) => async () => await websiteBuilderVM?.asyncDeletePage(id)}
                    // pageList={websiteBuilderVM?.pageList ?? []}
                >
                    <div>Styles Panel</div>
                </ConfigurationMenu>
            </div>
        </>
    );
});
