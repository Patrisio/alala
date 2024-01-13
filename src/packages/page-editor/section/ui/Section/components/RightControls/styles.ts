import styled from 'styled-components';

export const RightControlsContainer = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    padding: 5px;
    background: #fff;
    border-radius: 8px;

    & > *:not(:last-child) {
        margin-bottom: 5px;
    }
`;
