export const DragIcon = ({width = 22, height = 22, color = '#000'}) => {
    return (
        <svg color={color} fill="currentColor" height={height} width={width} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" cursor="move">
            <path d="M8 6h2v2H8V6zM10 10H8v2h2v-2zM10 14H8v2h2v-2zM14 10h-2v2h2v-2zM12 14h2v2h-2v-2zM14 6h-2v2h2V6z"></path>
        </svg>
    );
};
