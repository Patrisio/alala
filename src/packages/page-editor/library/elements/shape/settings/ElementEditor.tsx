import {ButtonUI, InputUI, TabPanelUI, TabsListUI, TabUI, TabsUI, SelectUI, OptionUI, SwitchUI, DividerUI} from '../../../../../diamond-ui';

import styled from 'styled-components';
import {useState} from 'react';
import {ClickAwayListener} from '@mui/base';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {observer} from 'mobx-react';
import {Stretch} from './stretch';
import {Blur} from './blur';
import {Color} from './color';
import {Shape} from './shape';
import {Stroke} from './stroke';

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
    console.log(elementUnitViewModel, '__elementUnitViewModel__');
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

    const buttonTextHandler = (e) => {
        const text = e.target.value;
        console.log(text, e.target.value);

        elementUnitViewModel.updateText(text);
    };

    return (
        <TabsUI defaultValue={0}>
            <TabsListUI>
                <TabUI value={0}>Design</TabUI>
            </TabsListUI>

            <TabPanelUI value={0}>
                <Shape elementVM={elementUnitViewModel} />

                <Stretch elementUnitViewModel={elementUnitViewModel} />
                <DividerUI />

                <Color elementVM={elementUnitViewModel} />
                
                <Blur elementUnitViewModel={elementUnitViewModel} />

                <Stroke elementVM={elementUnitViewModel} />


                <InputUI
                    value={elementUnitViewModel.text}
                    onChange={buttonTextHandler}
                />

                <ClickAwayListener
                    onClickAway={closePopup}
                >
                    <div style={{zIndex: 99999}}>
                        <ButtonUI
                            aria-describedby={'edit-section'}
                            onClick={attachLinkHandler}
                            text={'attach link'}
                            type={'OUTLINE'}
                            style={{width: '100%', color: '#0E0E0E'}}
                        />

                        <BasePopup
                            id={id}
                            open={open}
                            anchor={anchor}
                            placement={'left-center'}
                            offset={20}
                            style={{zIndex: 9999}}
                        >
                            <PopupBody>
                                <SelectUI defaultValue={10}>
                                    <OptionUI value={10}>Url</OptionUI>
                                    <OptionUI value={20}>File</OptionUI>
                                    <OptionUI value={30}>Email</OptionUI>
                                    <OptionUI value={40}>Phone</OptionUI>
                                </SelectUI>

                                <InputUI
                                    value={'search me'}
                                    onChange={() => {}}
                                />
                                <pre>{String(elementUnitViewModel.openLinkInNewTab)}</pre>
                                <SwitchUI
                                    checked={elementUnitViewModel.openLinkInNewTab}
                                    label={'Open link in new tab'}
                                    onClick={elementUnitViewModel.toggleOpenLinkInNewTab}
                                />
                            </PopupBody>
                        </BasePopup>
                    </div>
                </ClickAwayListener>
            </TabPanelUI>
        </TabsUI>
    );
});
