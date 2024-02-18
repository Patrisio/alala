import styled from 'styled-components';

export const SelectedColor = styled.div<{color}>`
    ${({color}) => `background: ${color}`};
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;
