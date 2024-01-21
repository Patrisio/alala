export const ShapeIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg
            color={color}
            fill="currentColor"
            height={height}
            viewBox="0 0 22 22"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clip-rule="evenodd"
                d="M13.501 1L21 14h-7.019a6.5 6.5 0 11-4.183-6.582L13.501 1zm-1.528 13H6l2.779-4.816A4.5 4.5 0 1011.973 14zm5.564-2H9.463l4.038-6.998L17.537 12z"
                fill-rule="evenodd"
            >
            </path>
        </svg>
    );
};
