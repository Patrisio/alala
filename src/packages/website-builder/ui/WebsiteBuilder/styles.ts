import styled from 'styled-components';

export const ViewportPreviewerWrapper = styled.div<{open: boolean}>`
    ${({open}) => `width: calc(100% - ${open ? 342 + 16 : 0}px)`};
    ${({open}) => `top: ${open ? 16 : 0}px`};
    ${({open}) => `transform: translate3d(${open ? 342 : 0}px, 0px, 0px)`};
    
    position: fixed;
    height: calc(100vh - 16px);
    box-shadow: 0 0 25px rgba(0,0,0,.11);
    transition: all .55s cubic-bezier(.66,0,.34,1);
    left: 0;
    right: unset;
`;
