export const DashedIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12H0V10H6V12Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 12H8V10H14V12Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12H16V10H22V12Z" fill={color} />
        </svg>
    );
};
