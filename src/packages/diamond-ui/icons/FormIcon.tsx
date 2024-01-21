export const FormIcon = ({width = 22, height = 22, color = '#000'}) => {
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
                d="M4 6.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM4 12.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM4 18.8a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
                fill-rule="evenodd"
            >
            </path>
            <path
                d="M8 4h12v2H8V4zM8 10h12v2H8v-2zM8 16h12v2H8v-2z"
            >
            </path>
        </svg>
    );
};
