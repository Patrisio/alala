import {StyledButton} from './styles';

export const Button = ({contentLeft, contentRight, text, children, style, type, ...restProps}) => {
    const isContentLeft = Boolean(contentLeft);
    const isContentRight = Boolean(contentRight);
    const hasChildren = Boolean(children);

    return (
        <StyledButton
            $hasChildren={hasChildren}
            $type={type}
            style={style}
            {...restProps}
        >
            {children}
            {!children && isContentLeft && contentLeft}
            {!children && <div style={{margin: '0 6px'}}>{text}</div>}
            {!children && isContentRight && contentRight}
        </StyledButton>
    );
};
