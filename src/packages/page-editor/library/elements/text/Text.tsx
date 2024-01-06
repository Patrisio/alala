'use client'

import {useRef} from 'react';
import {observer} from 'mobx-react';

import {Element} from '../../../element/ui/element';
import {TextContainer, ParagraphElement} from './styles';

// let uxTranslateX = 0;

export const Text = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Element
            targetRef={targetRef}
            contentRef={contentRef}
            elementUnitViewModel={elementUnitViewModel}
            dragModel={dragModel}
            resizeModel={resizeModel}
            focusOnClick
            useResizeObserver
        >
            <TextContainer
                gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                width={elementUnitViewModel.width}
                height={elementUnitViewModel.height}
                ref={targetRef}
                contentEditable
            >
                <div
                    ref={contentRef}
                >
                    <ParagraphElement
                        data-placeholder={'Write here...'}
                    >
                        {elementUnitViewModel.value}
                    </ParagraphElement>
                </div>
            </TextContainer>
        </Element>
    );
});
