export const DropdownFieldIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 13.5L12 10.5V9H18V10.5L15 13.5Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5V17H22V5H0ZM20 7H2V15H20V7Z" fill={color} />
        </svg>
    );
};
