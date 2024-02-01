'use client'

import {useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {ClickAwayListener} from '@mui/base';

import {Element} from '../../../element/ui/element';
import {ButtonContainer} from './styles';

// let uxTranslateX = 0;

export const Button = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const closeAllToolbars = () => {
        console.log('WRAPPER_CLOSE__', elementUnitViewModel.isEditorToolbarOpened);
        if (elementUnitViewModel.isElementToolbarOpened || elementUnitViewModel.isEditorToolbarOpened) return;
        // console.log('__CLOSE__');
        elementUnitViewModel.closeElementToolbar();
        elementUnitViewModel.closeEditorToolbar();
    };

    return (
            <Element
                targetRef={targetRef}
                elementUnitViewModel={elementUnitViewModel}
                dragModel={dragModel}
                resizeModel={resizeModel}
                // onClick={handleClick}
            >
                <ClickAwayListener
                    onClickAway={closeAllToolbars}
                    mouseEvent={'onMouseDown'}
                >
                    <div
                        ref={targetRef}
                        width={elementUnitViewModel.width}
                        height={elementUnitViewModel.height}
                        style={{
                            gridArea: elementUnitViewModel.positionerUnitViewModel.gridArea,
                            display: 'flex',
                            justifyContent: elementUnitViewModel.alignment,
                        }}
                    >
                        <ButtonContainer
                            // width={elementUnitViewModel.width}
                            // gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                            background={elementUnitViewModel.background}
                            isFitObjectFit={elementUnitViewModel.objectFit === 'fit'}
                            color={elementUnitViewModel.color}
                            className={'__DDDDSSSS__'}
                            // onClick={handleClick}
                        >
                            {elementUnitViewModel.text}
                        </ButtonContainer>
                    </div>
                </ClickAwayListener>
            </Element>
    );
});
