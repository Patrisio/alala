import {styled} from '@mui/system';
import {observer} from 'mobx-react';

export const AddElementContainer = observer(styled('div')<{$sectionVM: any}>`
    ${({$sectionVM}) => {
        const top = $sectionVM.boundingClientRect?.top > 0
            ? $sectionVM.boundingClientRect.top + 20
            : 20;

        return `
            top: ${$sectionVM.isHovered ? top : top - 20}px;
        `;
    }};
    ${({$sectionVM}) => `visibility: ${$sectionVM.isHovered ? 'visible' : 'hidden'}`};
    ${({$sectionVM}) => `opacity: ${$sectionVM.isHovered ? 1 : 0}`};
    ${({$sectionVM}) => {
        const position = $sectionVM.boundingClientRect?.top > 0 ? 'absolute' : 'fixed'

        return `
            position: ${position};
            top: 20px;
        `;
    }};
    left: 20px;
    transition: all .3s;
    z-index: 9999;
`);

export const PopupBody = styled('div')`
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    padding: 20px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid #DAE2ED;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 0.1);
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
`;
