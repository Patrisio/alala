export const PhoneFieldIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 16H8V18H14V16Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1H8C6.34315 1 5 2.34315 5 4V18C5 19.6569 6.34315 21 8 21H14C15.6569 21 17 19.6569 17 18V4C17 2.34315 15.6569 1 14 1ZM7 4C7 3.44772 7.44772 3 8 3H14C14.5523 3 15 3.44772 15 4V18C15 18.5523 14.5523 19 14 19H8C7.44772 19 7 18.5523 7 18V4Z" fill={color} />
        </svg>
    );
};
