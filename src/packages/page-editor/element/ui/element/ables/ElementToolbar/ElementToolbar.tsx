import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ButtonUI, IconUI} from '../../../../../../diamond-ui';

import styled from 'styled-components';
import Moveable, {MoveableManagerInterface, Renderer} from 'react-moveable';
import {ClickAwayListener} from '@mui/base';

const Popup = ({left, top, rect, elementUnitViewModel, moveable}) => {
    const closeAllToolbars = () => {
        console.log('ELEMENT_CLOSE', elementUnitViewModel.isEditorToolbarOpened);

        // console.log('__CLOSE__');
        // elementUnitViewModel.closeElementToolbar();
        // elementUnitViewModel.closeEditorToolbar();
    };

    return (
        <ClickAwayListener
            onClickAway={closeAllToolbars}
        >
            <div
                className={"moveable-dimension2"}
                style={{
                    display: 'flex',
                    position: "absolute",
                    left: `${left}px`,
                    top: `${top}px`,
                    background: "#FFF",
                    borderRadius: "8px",
                    padding: "3px 4px",
                    color: "white",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                    transform: `translate(-50%, 0px)`,
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px',
                }}
            >
                <ButtonUI
                    onClick={() => {
                        // element.action(sectionVM);
                        // closePopup();
                        elementUnitViewModel.openEditorToolbar();
                        elementUnitViewModel.closeElementToolbar();
                    }}
                    style={{width: 36, height: 36}}
                >
                    <IconUI name={'pencil'} />
                </ButtonUI>
                <ButtonUI
                    onClick={() => {
                        elementUnitViewModel.updateText();

                        // element.action(sectionVM);
                        // closePopup();
                    }}
                    style={{width: 36, height: 36}}
                >
                    <IconUI name={'duplicate'} />
                </ButtonUI>
                <ButtonUI
                    onClick={() => {
                        // element.action(sectionVM);
                        // closePopup();
                    }}
                    style={{width: 36, height: 36}}
                >
                    <IconUI
                        name={'trash'}
                        color={'#db3642'}
                    />
                </ButtonUI>
            </div>
        </ClickAwayListener>
    );
};

export const ElementToolbar = (elementUnitViewModel) => ({
    name: "elementToolbar",
    props: [],
    events: [],
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
        console.log(moveable, 'moveable');
        const rect = moveable.getRect();
        const topFromViewport = moveable.state.targetClientRect.top;

        const left = rect.width / 2;
        const top = topFromViewport < 60 ? rect.height + 20 : -60;

        console.log(elementUnitViewModel, '__elementViewModel_');
        
        return (
            <Popup
                key={"elementToolbar"}
                left={left}
                top={top}
                rect={rect}
                elementUnitViewModel={elementUnitViewModel}
                moveable={moveable}
            />
        );
    },
} as const);
