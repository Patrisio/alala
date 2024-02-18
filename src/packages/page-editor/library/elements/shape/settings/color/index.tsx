import {H2, SelectUI, OptionUI} from '../../../../../../diamond-ui';
import {useForceUpdate} from '../../../../../../utils';
import {SelectedColor} from './styles';

import {Box} from '@mui/system';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";

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

export const Color = ({elementVM}) => {
    const forceUpdate = useForceUpdate();

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const open = Boolean(anchor);
    const id = open ? 'simple-popup' : undefined;

    const openColorPalettePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                onClick={openColorPalettePopup}
            >
                <H2>{'Color'}</H2>
                <SelectedColor color={elementVM.color.hex} />
            </Box>
            <BasePopup
                id={id}
                open={open}
                anchor={anchor}
                placement={'left-center'}
                offset={20}
                style={{zIndex: 9999}}
            >
                <PopupBody>
                    <ColorPicker
                        color={elementVM.color}
                        onChange={(color) => {
                            elementVM.setColor(color);
                            forceUpdate();
                        }}
                    />
                </PopupBody>
            </BasePopup>
        </div>
    );
};
