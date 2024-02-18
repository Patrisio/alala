export const CheckboxFieldIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H5V17H17V5ZM3 3V19H19V3H3Z" fill={color} />
            <path d="M15 7V9.99594L10 14.9959L7 11.9959V9L10 12L15 7Z" fill={color} />
        </svg>
    );
};
