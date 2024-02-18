import {ButtonUI, InputUI, TabPanelUI, TabsListUI, TabUI, TabsUI, SelectUI, OptionUI, SwitchUI, DividerUI} from '../../../../../diamond-ui';
import {Content, Design} from './tab-panels';

import styled from 'styled-components';
import {useState} from 'react';
import {ClickAwayListener} from '@mui/base';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {observer} from 'mobx-react';

export const PopupBody = styled('div')`
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid #DAE2ED;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 0.1);
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
`;

export default observer(({elementUnitViewModel}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    const attachLinkHandler = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const closePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(null);
    };

    const closeAllToolbars = () => {
        console.log('EDITOR_CLOSE');
        // elementUnitViewModel.closeElementToolbar();
        // elementUnitViewModel.closeEditorToolbar();
    };

    return (
        <TabsUI defaultValue={0}>
            <TabsListUI>
                <TabUI value={0}>Content</TabUI>
                <TabUI value={1}>Design</TabUI>
                <TabUI value={2}>Storage</TabUI>
            </TabsListUI>

            <TabPanelUI value={0}>
                <Content
                    formVM={elementUnitViewModel}
                />
            </TabPanelUI>
            <TabPanelUI value={1}>
                <Design
                    formVM={elementUnitViewModel}
                />
            </TabPanelUI>
            <TabPanelUI value={2}>
                Storage
            </TabPanelUI>
        </TabsUI>
    );
});
