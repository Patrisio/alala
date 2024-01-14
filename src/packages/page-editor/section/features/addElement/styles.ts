import {styled} from '@mui/system';
import {observer} from 'mobx-react';

export const AddElementContainer = observer(styled('div')<{$sectionVM: any}>`
    ${({$sectionVM}) => {
        const top = $sectionVM.HTMLElement ? $sectionVM.HTMLElement?.getBoundingClientRect().top + 20 : 20;

        return `
            top: ${$sectionVM.isHovered ? top : top - 20}px;
        `;
    }};
    ${({$sectionVM}) => `visibility: ${$sectionVM.isHovered ? 'visible' : 'hidden'}`};
    ${({$sectionVM}) => `opacity: ${$sectionVM.isHovered ? 1 : 0}`};
    position: fixed;
    left: 20px;
    transition: all .3s;
`);

export const PopupBody = styled('div')`
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid #DAE2ED;
    background-color: #fff;
    box-shadow: '0px 4px 8px rgb(0 0 0 / 0.1)';
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 1;
`;
