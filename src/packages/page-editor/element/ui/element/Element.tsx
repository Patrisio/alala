'use client'

import {FloatOutline} from './components/FloatOutline';
import {useMoveableData} from './hooks/useMoveableData';
import {ElementToolbar, ElementEditor} from './ables';

import Moveable, {makeAble} from 'react-moveable';
import {useMemo, useRef, useEffect, useCallback, useState} from 'react';
import {observer} from 'mobx-react';
import OutsideClickHandler from 'react-outside-click-handler';

import {ClickAwayListener} from '@mui/base';
import {Unstable_Popup as BasePopup} from '@mui/base/Unstable_Popup';
import {ButtonUI, IconUI} from '../../../../diamond-ui';
import styled from 'styled-components';

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

const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
};

export const Element = observer(({
    targetRef,
    contentRef,
    elementUnitViewModel,
    dragModel,
    resizeModel,
    focusOnClick = false,
    useResizeObserver = false,
    children,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(elementUnitViewModel.isElementToolbarOpened, elementUnitViewModel.isEditorToolbarOpened);
        if (elementUnitViewModel.isElementToolbarOpened || elementUnitViewModel.isEditorToolbarOpened) return;

        elementUnitViewModel.openElementToolbar();
    };

    useEffect(() => {
        console.log('elementUnitViewModel.isElementToolbarOpened', elementUnitViewModel.isElementToolbarOpened)
    }, [elementUnitViewModel.isElementToolbarOpened]);

    const moveableRef = useRef(null);
    const moveableData = useMoveableData(moveableRef);

    const bounds = useMemo(() => {
        return {
            top: 0,
            left: 0,
            position: 'css',
        };
    }, []);

    const moveableProps = useMemo(() => ({
        onDragStart: dragModel.onDragStartHandler(elementUnitViewModel),
        onDrag: dragModel.onDragHandler(elementUnitViewModel, moveableData),
        onDragEnd: dragModel.onDragEndHandler(elementUnitViewModel, moveableData),

        onResizeStart: resizeModel.onResizeStartHandler(elementUnitViewModel),
        onResize: resizeModel.onResizeHandler(elementUnitViewModel),
        onResizeEnd: resizeModel.onResizeEndHandler(elementUnitViewModel, moveableData),

        bounds,

        ...(focusOnClick && {
            onClick: () => {
                targetRef?.current?.focus();
            }
        }),
    }), [moveableData, bounds]);

    const recalculate = useCallback((mutationRecordList) => {
        mutationRecordList.forEach((mutationRecord) => {
            console.log('__HERE__');
            const clientHeight = mutationRecord.target.clientHeight;
            if (clientHeight <= elementUnitViewModel.height) {
                // elementUnitViewModel.setMinOffsetWidthAndHeight(moveableRef?.current?.moveable, 1, 7);
                // if (clientHeight > elementUnitViewModel.height - 46) {

                // }

                return;
            }
            
            // ATTENTION: rowEnd = это количество track. setMaxRowsCount устанавливает максимальное количество ячеек в сетке.
            const rowEnd = elementUnitViewModel.positionerUnitViewModel.position.rowEnd + 1;
            if (rowEnd > elementUnitViewModel.gridViewModel.maxRowsCount + 1) {
                elementUnitViewModel.gridViewModel.incrementRow();
                elementUnitViewModel.gridViewModel.setMaxRowsCount(rowEnd - 1);
            }

            elementUnitViewModel.outlineUnitViewModel.updateRowEnd(rowEnd);
            elementUnitViewModel.positionerUnitViewModel.updateRowEnd(rowEnd);

            // const elementWidth = elementUnitViewModel.outlineUnitViewModel.outlineWidth;
            const elementHeight = elementUnitViewModel.outlineUnitViewModel.outlineHeight;
    
            // elementUnitViewModel.updateElementWidth(elementWidth);
            elementUnitViewModel.updateElementHeight(elementHeight);
            moveableData.forceUpdateControlBox(moveableRef.current);

        });
    }, [elementUnitViewModel.positionerUnitViewModel.rowEnd, moveableRef]);

    useEffect(() => {
        if (!useResizeObserver) return;
        // const observer = new MutationObserver(recalculate);
        const resizeObserver = new ResizeObserver(recalculate);

        if (contentRef.current) {
            // observer.observe(contentRef.current, config);
            resizeObserver.observe(contentRef.current);
        }

        return () => {
            // observer.disconnect();
            resizeObserver.disconnect();
        };
    }, [recalculate]);

    const closeAllToolbars = () => {
        console.log('__CLOSE__');

        if (!(elementUnitViewModel.isElementToolbarOpened || elementUnitViewModel.isEditorToolbarOpened)) return;

        elementUnitViewModel.closeElementToolbar();
        elementUnitViewModel.closeEditorToolbar();
    };
    console.log(moveableRef, '__REDDDD__');
    return (
        <>
            {children}
            <FloatOutline
                elementUnitViewModel={elementUnitViewModel}
            />
            {/* <ClickAwayListener
                onClickAway={closeAllToolbars}
            > */}
                <Moveable
                    ables={[
                        ElementEditor(elementUnitViewModel),
                        ElementToolbar(elementUnitViewModel),
                    ]}
                    props={{
                        elementToolbar: elementUnitViewModel.isElementToolbarOpened,
                        elementEditor: elementUnitViewModel.isEditorToolbarOpened,
                    }}
                    ref={moveableRef}
                    target={targetRef}
                    draggable
                    resizable
                    origin={false}
                    {...moveableProps}
                    onClick={handleClick}
                    className={'huiii'}
                />
            {/* </ClickAwayListener> */}
        </>
    );
});
