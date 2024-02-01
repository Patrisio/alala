import {ButtonUI, IconUI, InputUI, TabPanelUI, TabsListUI, TabUI, TabsUI, SelectUI, OptionUI, SwitchUI} from '../../../../../diamond-ui';

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
    z-index: 99999;
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

    const buttonTextHandler = (e) => {
        const text = e.target.value;
        console.log(text, e.target.value);

        elementUnitViewModel.updateText(text);
    };

    return (
        <TabsUI defaultValue={0}>
            <TabsListUI>
                <TabUI value={0}>Content</TabUI>
                <TabUI value={1}>Design</TabUI>
            </TabsListUI>

            <TabPanelUI value={0}>
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
                                    onChange={elementUnitViewModel.toggleOpenLinkInNewTab}
                                />
                            </PopupBody>
                        </BasePopup>
                    </div>
                </ClickAwayListener>
            </TabPanelUI>

            <TabPanelUI value={1}>
                <SelectUI
                    defaultValue={100}
                    // slots={{popup: PopupBody}}
                >
                    <OptionUI value={100}>Primary Button</OptionUI>
                    <OptionUI value={200}>Secondary Button</OptionUI>
                    <OptionUI value={300}>Tertiary Button</OptionUI>
                </SelectUI>

                <TabsUI
                    defaultValue={'fill'}
                    onChange={(_, objectFit) => elementUnitViewModel.setObjectFit(objectFit)}
                >
                    <TabsListUI>
                        <TabUI value={'fit'}>Fit</TabUI>
                        <TabUI value={'fill'}>Fill</TabUI>
                    </TabsListUI>

                    <TabPanelUI value={'fit'}>
                        <TabsUI
                            defaultValue={'center'}
                            onChange={(_, alignment) => elementUnitViewModel.setAlignment(alignment)}
                        >
                            <TabsListUI>
                                <TabUI value={'flex-start'}>
                                    <IconUI
                                        name={'alignmentLeft'}
                                        color={'#0E0E0E'}
                                    />
                                </TabUI>
                                <TabUI value={'center'}>
                                    <IconUI
                                        name={'alignmentCenter'}
                                        color={'#0E0E0E'}
                                    />
                                </TabUI>
                                <TabUI value={'flex-end'}>
                                    <IconUI
                                        name={'alignmentRight'}
                                        color={'#0E0E0E'}
                                    />
                                </TabUI>
                            </TabsListUI>
                        </TabsUI>
                    </TabPanelUI>
                    <TabPanelUI value={'fill'} />
                </TabsUI>
            </TabPanelUI>
        </TabsUI>
    );
});
