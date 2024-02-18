export const NameFieldIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10C9 8.89543 9.89543 8 11 8C12.1046 8 13 8.89543 13 10C13 11.1046 12.1046 12 11 12C9.89543 12 9 11.1046 9 10Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4V18H20V4H2ZM18 6H4V16H7V14.4286C7.85714 13.5714 9.57143 13 11 13C12.4286 13 14.1429 13.5714 15 14.4286V16H18V6Z" fill={color} />
        </svg>
    );
};
