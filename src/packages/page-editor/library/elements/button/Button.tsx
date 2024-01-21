'use client'

import {useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {ClickAwayListener} from '@mui/base';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';

import {Element} from '../../../element/ui/element';
import {ButtonUI} from '../../../../diamond-ui';
import {ButtonContainer, PopupBody} from './styles';

// let uxTranslateX = 0;

export const Button = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const closePopup = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(null);
    };

    return (
        <ClickAwayListener
            onClickAway={closePopup}
        >
            <div>
                <Element
                    targetRef={targetRef}
                    elementUnitViewModel={elementUnitViewModel}
                    dragModel={dragModel}
                    resizeModel={resizeModel}
                >
                    <ButtonContainer
                        gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                        width={elementUnitViewModel.width}
                        height={elementUnitViewModel.height}
                        background={elementUnitViewModel.background}
                        color={elementUnitViewModel.color}
                        ref={targetRef}
                    >
                        {elementUnitViewModel.text}
                    </ButtonContainer>
                </Element>

                <BasePopup
                    id={open ? 'sdf' : undefined}
                    open={open}
                    anchor={anchor}
                    placement={'top'}
                >
                    <PopupBody>
                        <ButtonUI
                            onClick={async (e) => {
                                
                            }}
                            text={'Добавить пустую страницу'}
                        />
                    </PopupBody>
                </BasePopup>
            </div>
        </ClickAwayListener>
    );
});
