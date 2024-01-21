import styled from 'styled-components';
import {observer} from 'mobx-react';

export const RightControlsContainer = observer(styled.div<{$sectionVM: any}>`
    ${({$sectionVM}) => {
        const top = $sectionVM.boundingClientRect?.top > 0
            ? $sectionVM.boundingClientRect.top + 20
            : 20;

        return `
            top: ${$sectionVM.isHovered ? top : top - 20}px;
        `;
    }}
    ${({$sectionVM}) => `margin-left: ${$sectionVM.gridVM.clientWidth - 181 - 20}px`};
    ${({$sectionVM}) => `visibility: ${$sectionVM.isHovered ? 'visible' : 'hidden'}`};
    ${({$sectionVM}) => `opacity: ${$sectionVM.isHovered ? 1 : 0}`};
    ${({$sectionVM}) => {
        const position = $sectionVM.boundingClientRect?.top > 0 ? 'absolute' : 'fixed'

        return `
            position: ${position};
            top: 20px;
        `;
    }};

    padding: 5px;
    background: #fff;
    border-radius: 8px;
    transition: all .3s;
    z-index: 9999;

    & > *:not(:last-child) {
        margin-bottom: 5px;
    }
`);
