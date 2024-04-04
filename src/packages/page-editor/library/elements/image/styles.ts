import styled from 'styled-components';

export const ImageContainer = styled.div<{
    gridArea: string,
    width: number,
    height: number,
    clipPath: string | null,
}>`
    ${({width}) => `width: ${width}px`};
    ${({height}) => `height: ${height}px`};
    ${({gridArea}) => `grid-area: ${gridArea}`};
    ${({clipPath}) => `clip-path: ${clipPath ? `url(#${clipPath})` : 'none'}`};
    opacity: .6;
    position: absolute;
`;

export const ImageElement = styled.img`
    object-fit: cover;
    cursor: auto;
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
`;
