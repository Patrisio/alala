import styled from 'styled-components';

export const MoreSectionControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EFEFEF;
    border-radius: 3px;
    padding: 5px;

    & > *:not(:last-child) {
        margin-right: 5px;
    }
`;
