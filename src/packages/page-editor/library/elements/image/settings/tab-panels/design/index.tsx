import {TabPanelUI, TabsListUI, TabUI, TabsUI} from '../../../../../../../diamond-ui';

import {observer} from 'mobx-react';

export const Design = observer(({imageVM}) => {
    return (
        <>
            <TabsUI
                defaultValue={'fill'}
                onChange={(_, objectFit) => imageVM.setObjectFit(objectFit)}
            >
                <TabsListUI>
                    <TabUI value={'fit'}>Fit</TabUI>
                    <TabUI value={'fill'}>Fill</TabUI>
                    <TabUI value={'shape'}>Shape</TabUI>
                </TabsListUI>

                <TabPanelUI value={'fit'}>
                    fit
                </TabPanelUI>
                <TabPanelUI value={'fill'}>
                    fill
                </TabPanelUI>
                <TabPanelUI value={'shape'}>
                    shape
                </TabPanelUI>
            </TabsUI>
        </>
    );
});
