import {observer} from 'mobx-react';

export const ArchedWindowIcon = observer(({
    width = 22,
    height = 22,
    color = '#000',
    fill = 'rgb(102, 102, 102)',
    blur,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 150"
            style={{
                fill,
                height,
                width,
                filter: `blur(${blur}px)`,
            }}
        >
            <path
                d="M50 .5A49.5 49.5 0 00.5 50v99.5h99V50A49.5 49.5 0 0050 .5z"
            >
            </path>
        </svg>
    );
});
