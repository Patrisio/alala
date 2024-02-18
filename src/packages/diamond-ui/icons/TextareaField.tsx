export const TextareaFieldIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10H8V8H14V10H12V15H10V10Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2V20H20V2H2ZM18 4H4V18H18V4Z" fill={color} />
        </svg>
    );
};
