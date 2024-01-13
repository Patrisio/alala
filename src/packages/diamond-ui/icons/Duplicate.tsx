export const DuplicateIcon = ({width = 22, height = 22, color = '#000'}) => {
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
                clip-rule="evenodd"
                d="M2 16V2h14v4h4v14H6v-4H2zM4 4h10v10H4V4zm4 12v2h10V8h-2v8H8z"
                fill-rule="evenodd"
            >
            </path>
        </svg>
    );
};
