import styled from 'styled-components';

export const TextContainer = styled.div<{
    gridArea: string,
    width: number,
    height: number,
}>`
    ${({width}) => `width: ${width}px`};
    ${({height}) => `height: ${height}px`};
    ${({gridArea}) => `grid-area: ${gridArea}`};
    opacity: .6;
    position: absolute;
    word-wrap: break-word;
    cursor: text;
    white-space: pre-wrap;
`;

export const ParagraphElement = styled.p`
    margin: 0;
    
    &::before {
        content: attr(data-placeholder);
        pointer-events: none;
        height: 0;
    }
`;
