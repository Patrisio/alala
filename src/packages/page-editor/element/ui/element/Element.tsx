'use client'

import {FloatOutline} from './components/FloatOutline';
import {useMoveableData} from './hooks/useMoveableData';

import Moveable from 'react-moveable';
import {useMemo, useRef, useEffect, useCallback} from 'react';
import {observer} from 'mobx-react';

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

    return (
        <>
            {children}
            <FloatOutline
                elementUnitViewModel={elementUnitViewModel}
            />
            <Moveable
                ref={moveableRef}
                target={targetRef}
                draggable
                resizable
                origin={false}
                {...moveableProps}
            />
        </>
    );
});
