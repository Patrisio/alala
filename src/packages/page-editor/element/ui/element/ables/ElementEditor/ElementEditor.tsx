import {ButtonUI, IconUI, InputUI, TabPanelUI, TabsListUI, TabUI, TabsUI, SelectUI, OptionUI, SwitchUI} from '../../../../../../diamond-ui';

import styled from 'styled-components';
import {MoveableManagerInterface, Renderer, makeAble} from 'react-moveable';
import {useState} from 'react';
import {ClickAwayListener} from '@mui/base';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {observer} from 'mobx-react';

const Popup = observer(({left, top, rect, elementUnitViewModel}) => {
    return (
        // <ClickAwayListener
        //     onClickAway={closeAllToolbars}
        // >
            <div
                className={"moveable-dimension1"}
                style={{
                    width: 320,
                    height: 300,
                    display: 'flex',
                    position: "absolute",
                    left: `${left}px`,
                    top: `${top}px`,
                    background: "#FFF",
                    borderRadius: "8px",
                    color: "#000",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                    transform: `translate(-50%, 0px)`,
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px',
                }}
            >
                {elementUnitViewModel.renderElementEditor()}
            </div>
        // </ClickAwayListener>
    );
});

export const ElementEditor = (elementUnitViewModel) => ({
    name: "elementEditor",
    props: [],
    events: [],
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
        const rect = moveable.getRect();
        const topFromViewport = moveable.state.targetClientRect.top;

        // Add key (required)
        // Add class prefix moveable-(required)
        const left = rect.width + 180;
        const top = topFromViewport < 60 ? rect.height + 20 : -60;

        return (
            <Popup
                key={'elementEditor'}
                left={left}
                top={top}
                rect={rect}
                elementUnitViewModel={elementUnitViewModel}
            />
        );
    },
} as const);
