import {styled} from '@mui/system';
import {observer} from 'mobx-react';

export const AddSectionContainer = observer(styled('div')<{$sectionVM: any; $where: string}>`
    ${({$where}) => `
        ${$where === 'top' && `
            top: 0;
            transform: translate(-50%, -50%);
        `};
        ${$where === 'bottom' && `
            bottom: 0;
            transform: translate(-50%, 50%);
        `}
    `};
    ${({$sectionVM}) => `visibility: ${$sectionVM.isHovered ? 'visible' : 'hidden'}`};
    ${({$sectionVM}) => `opacity: ${$sectionVM.isHovered ? 1 : 0}`};

    position: absolute;
    left: 50%;
    transition: all .3s;
    z-index: 9999;
`);
