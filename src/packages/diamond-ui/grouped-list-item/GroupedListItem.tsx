import {GroupedListItemContainer} from './styles';

export const GroupedListItem = ({
    element: StyledComponentElement = GroupedListItemContainer,
    leftSlot,
    rightSlot,
    hasLeftGap = false,
    highlightOnHover = false,
    ...restProps
}) => {
    return (
        <StyledComponentElement
            hasLeftGap={hasLeftGap}
            highlightOnHover={highlightOnHover}
            {...restProps}
        >
            {leftSlot}
            {rightSlot}
        </StyledComponentElement>
    );
};
