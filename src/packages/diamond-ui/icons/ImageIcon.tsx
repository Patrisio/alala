export const ImageIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg
            width={width}
            height={height}
            color={color}
            fill="currentColor"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 11a2 2 0 100-4 2 2 0 000 4z"
            >
            </path>
            <path
                clip-rule="evenodd"
                d="M2 4h18v14H2V4zm2 2v8.586L8.586 10h1.828l6 6H18V6H4zm9.586 10H5.414l4-4h.172l4 4z"
                fill-rule="evenodd"
            >
            </path>
        </svg>
    );
};
