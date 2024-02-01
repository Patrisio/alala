import styled from 'styled-components';

export const ViewportPreviewerWrapper = styled.div<{layout: string}>`
    ${({layout}) => {
        const isRight = layout === 'right';
        const isLeft = layout === 'left';
        const isRightOrLeft = isRight || isLeft;

        const getTranslateX = (layout:  string) => {
            switch (layout) {
                case 'right':
                    return 342;
                case 'left':
                    return 16;
                default:
                    return 0;
            }
        };

        return `
            width: calc(100% - ${isRightOrLeft ? 342 + 16 : 0}px);
            top: ${isRightOrLeft ? 16 : 0}px;
            transform: translate3d(${getTranslateX(layout)}px, 0px, 0px)
        `;
    }};


    position: fixed;
    height: calc(100vh - 16px);
    box-shadow: 0 0 25px rgba(0,0,0,.11);
    transition: all .55s cubic-bezier(.66,0,.34,1);
    left: 0;
    right: unset;
`;
