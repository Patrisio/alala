export const ButtonIcon = ({width = 22, height = 22, color = '#000'}) => {
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
                d="M18 6H4v10h14V6zM2 4v14h18V4H2z"
                fill-rule="evenodd"
            >
            </path>
            <path
                d="M6 10h10v2H6v-2z"
            >
            </path>
        </svg>
    );
};
