'use client'

import {useRef} from 'react';
import {observer} from 'mobx-react';

import {Element} from '../../../element/ui/element';
import {ImageContainer, ImageElement} from './styles';
import {Placeholder} from './components';

export const Image = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
    altText,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <Element
            targetRef={targetRef}
            elementUnitViewModel={elementUnitViewModel}
            dragModel={dragModel}
            resizeModel={resizeModel}
        >
            <ImageContainer
                gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                width={elementUnitViewModel.width}
                height={elementUnitViewModel.height}
                ref={targetRef}
            >
                {
                    elementUnitViewModel.imageData.url ? 
                    <ImageElement
                        src={elementUnitViewModel.imageData.url}
                        alt={altText}
                    /> :
                    <Placeholder
                        imageVM={elementUnitViewModel}
                    />
                }
            </ImageContainer>
        </Element>
    );
});
