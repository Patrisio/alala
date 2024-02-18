import styled from 'styled-components';

export const FormContainer = styled.form<{
    gridArea: string,
    width: number,
    height: number,
    backgroundColor: string,
}>`
    ${({width}) => `width: ${width}px`};
    ${({height}) => `height: ${height}px`};
    ${({gridArea}) => `grid-area: ${gridArea}`};
    /* opacity: .6; */
    position: absolute;
    ${({backgroundColor}) => `background-color: ${backgroundColor}`};
    box-sizing: border-box;
    padding: 40px;

    & > div {
        margin-bottom: 15px;
    }
`;
