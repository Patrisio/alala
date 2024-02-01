'use client'

import {useRef} from 'react';
import {observer} from 'mobx-react';

import {Element} from '../../../element/ui/element';
import {IconUI} from '../../../../diamond-ui';
// import {ShapeContainer} from './styles';

// let uxTranslateX = 0;

export const Shape = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    console.log(elementUnitViewModel, '__DDD__');
    return (
        <Element
            targetRef={targetRef}
            elementUnitViewModel={elementUnitViewModel}
            dragModel={dragModel}
            resizeModel={resizeModel}
        >
            <div
                ref={targetRef}
                style={{
                    gridArea: elementUnitViewModel.positionerUnitViewModel.gridArea,
                    width: elementUnitViewModel.width,
                    height: elementUnitViewModel.height,
                    position: 'absolute',
                    background: '#E6E4D5',
                    opacity: 0.6,
                }}
            >
                <IconUI
                    elementUnitViewModel={elementUnitViewModel}
                    name={elementUnitViewModel.figure}
                    width={elementUnitViewModel.width}
                    height={elementUnitViewModel.height}
                />
            </div>
            {/* <ShapeContainer
                elementVM={elementUnitViewModel}
                // gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                // width={elementUnitViewModel.width}
                // height={elementUnitViewModel.height}
                // blur={elementUnitViewModel.blur}
                // ref={targetRef}
            /> */}
        </Element>
    );
});
