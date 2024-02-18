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
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    background: '#E6E4D5',
                    opacity: 0.6,
                }}
            >
                <IconUI
                    name={elementUnitViewModel.figure}
                    width={'100%'}
                    height={'100%'}
                    blur={elementUnitViewModel.blur}
                    fill={elementUnitViewModel.color.hex}
                    strokeType={elementUnitViewModel.strokeType}
                    strokeColor={elementUnitViewModel.strokeColor.hex}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    className={'shape-svg'}
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
