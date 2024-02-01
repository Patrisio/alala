import styled from 'styled-components';

export const SelectedColor = styled.div<{elementVM}>`
    ${({elementVM}) => `background: ${elementVM.color.hex}`};
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;
