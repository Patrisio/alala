import styled from 'styled-components';

export const FormContainer = styled.form<{
    gridArea: string,
    width: number,
    height: number,
}>`
    ${({width}) => `width: ${width}px`};
    ${({height}) => `height: ${height}px`};
    ${({gridArea}) => `grid-area: ${gridArea}`};
    opacity: .6;
    position: absolute;
`;
