import styled from 'styled-components';

export const ButtonContainer = styled.button<{
    gridArea: string,
    width: number,
    height: number,
    background: string,
    color: string,
}>`
    ${({width}) => `width: ${width}px`};
    ${({height}) => `height: ${height}px`};
    ${({gridArea}) => `grid-area: ${gridArea}`};
    ${({background}) => `background: ${background}`};
    ${({color}) => `color: ${color}`};
    // opacity: .6;
    position: absolute;
`;

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
