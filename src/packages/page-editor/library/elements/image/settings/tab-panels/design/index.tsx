import {TabPanelUI, TabsListUI, TabUI, TabsUI, IconUI} from '../../../../../../../diamond-ui';

import {observer} from 'mobx-react';
import styled from 'styled-components';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {useState} from 'react';

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

const oneLevelIcons = [
    {
        name: 'award',
        clipPathUrlId: 'svgPathNewaward',
    },
];

export const Design = observer(({imageVM}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);
    const openPopup = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget, 'event.currentTarget');
        setAnchor(anchor ? null : event.currentTarget);
    };
    const closePopup = () => {
        setAnchor(null);
    };

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
                    <div
                        onClick={openPopup}
                        style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}
                    >
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            Shape
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <IconUI
                                name={'chevronDown'}
                                style={{marginLeft: 10}}
                            />
                        </div>
                    </div>
                    {
                        <BasePopup
                            open={open}
                            anchor={anchor}
                            placement={'right-center'}
                            offset={20}
                            style={{zIndex: 9999}}
                        >
                            <PopupBody>
                                <TabsUI
                                    defaultValue={'1:1'}
                                    // onChange={(_, objectFit) => imageVM.setObjectFit(objectFit)}
                                >
                                    <TabsListUI>
                                        <TabUI value={'1:1'}>1:1</TabUI>
                                        <TabUI value={'2:3'}>2:3</TabUI>
                                        <TabUI value={'3:2'}>3:2</TabUI>
                                    </TabsListUI>

                                    <TabPanelUI value={'1:1'}>
                                        {
                                            oneLevelIcons.map((icon) => {
                                                return (
                                                    <div
                                                        style={{border: imageVM.clipPathUrlId ? '1px solid blue' : 'none'}}
                                                        onClick={() => imageVM.setClipPathUrlId(icon.clipPathUrlId)}
                                                    >
                                                        <IconUI
                                                            name={icon.name}
                                                        />
                                                    </div>
                                                );
                                            })
                                        }
                                    </TabPanelUI>
                                    <TabPanelUI value={'2:3'}>
                                        2
                                    </TabPanelUI>
                                    <TabPanelUI value={'3:2'}>
                                        3
                                    </TabPanelUI>
                                </TabsUI>
                            </PopupBody>
                        </BasePopup>
                    }
                </TabPanelUI>
            </TabsUI>
        </>
    );
});
