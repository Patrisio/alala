import styled from 'styled-components';
import {observer} from 'mobx-react';

export const ButtonContainer = styled.button<{
    // gridArea: string,
    // width: number,
    isFitObjectFit: boolean,
    // height: number,
    background: string,
    color: string,
}>`
    ${({isFitObjectFit}) => `width: ${isFitObjectFit ? `80%` : `100%`}`};
    /* ${({height}) => `height: ${height}px`}; */
    /* width: 100%; */
    height: 100%;
    ${({background}) => `background: ${background}`};
    ${({color}) => `color: ${color}`};
    // opacity: .6;
    /* position: absolute; */
`;

// ${({gridArea}) => `grid-area: ${gridArea}`};

