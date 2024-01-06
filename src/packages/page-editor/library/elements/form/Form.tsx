'use client'

import {useRef} from 'react';
import {observer} from 'mobx-react';

import {Element} from '../../../element/ui/element';
import {FormContainer} from './styles';

export const Form = observer(({
    elementUnitViewModel,
    dragModel,
    resizeModel,
}) => {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <Element
            targetRef={targetRef}
            elementUnitViewModel={elementUnitViewModel}
            dragModel={dragModel}
            resizeModel={resizeModel}
        >
            <FormContainer
                gridArea={elementUnitViewModel.positionerUnitViewModel.gridArea}
                width={elementUnitViewModel.width}
                height={elementUnitViewModel.height}
                ref={targetRef}
            >
                {
                    elementUnitViewModel.fieldList.map((field) => field.render())
                }
            </FormContainer>
        </Element>
    );
});
