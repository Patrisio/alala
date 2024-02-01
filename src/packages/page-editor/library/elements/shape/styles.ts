import styled from 'styled-components';
import {observer} from 'mobx-react';

export const ShapeContainer = observer(styled.div<{
    elementVM: any
}>`
    ${({elementVM}) => `width: ${elementVM.width}px`};
    ${({elementVM}) => `height: ${elementVM.height}px`};
    ${({elementVM}) => `grid-area: ${elementVM.positionerUnitViewModel.gridArea}`};
    ${({elementVM}) => `filter: blur(${elementVM.blur}px)`};
    opacity: .6;
    background: #E6E4D5;
    position: absolute;
`);
