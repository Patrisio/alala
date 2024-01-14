import {Button as BaseButton} from '@mui/base/Button';
import {styled} from '@mui/system';

const commonStyles = `
    justify-content: center;
    align-items: center;
    display: flex;
    color: #313131;
    cursor: pointer;
    user-select: none;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    height: 37px;
`;

export const StyledButton = styled(BaseButton)<{$hasChildren: boolean, $type: string}>`
    ${({$type}) => {
        if ($type === 'SOLID') {
            return `
                ${commonStyles}
                border: 3px solid #FFF;
                width: max-content;
                border-radius: 10px;

                ${({$hasChildren}) => `padding: 0 ${$hasChildren ? 5 : 13}px`};
                ${({$hasChildren}) => `width: ${$hasChildren ? '36px' : 'auto'}`};
                ${({$hasChildren}) => `height: ${$hasChildren ? '36px' : 'auto'}`};

                padding: 22px 13px;
                background: #FAF8F8;

                &:hover {
                    background-color: #EFEFEF;
                }
            `;
        }

        if ($type === 'OUTLINE') {
            return `
                ${commonStyles}
                border: 1px solid #EFEFEF;
                width: max-content;
                border-radius: 3px;

                ${({$hasChildren}) => `padding: 0 ${$hasChildren ? 5 : 13}px`};
                ${({$hasChildren}) => `width: ${$hasChildren ? '36px' : 'auto'}`};
                ${({$hasChildren}) => `height: ${$hasChildren ? '36px' : 'auto'}`};

                padding: 22px 13px;
                background: #FFF;

                &:hover {
                    background-color: #EFEFEF;
                }
            `;
        }

        if ($type === 'BLUE') {
            return `
                ${commonStyles}
                border: 1px solid #76B6FF;
                width: max-content;
                border-radius: 10px;

                padding: 10px 13px;
                background: #027AFF;
                color: #FFF;

                &:hover {
                    background-color: #0069DE;
                }
            `;
        }
        
        return `
            ${commonStyles}
            border: none;
            border-radius: 4px;
            background-color: transparent;

            ${({$hasChildren}) => `padding: 0 ${$hasChildren ? 5 : 13}px`};
            ${({$hasChildren}) => `width: ${$hasChildren ? '36px' : 'auto'}`};
            ${({$hasChildren}) => `height: ${$hasChildren ? '36px' : 'auto'}`};

            &:hover {
                background-color: #f2f2f2;
            }
        `;
    }};
`;
