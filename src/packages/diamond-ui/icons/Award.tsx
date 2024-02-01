import {observer} from 'mobx-react';

export const AwardIcon = observer(({
    width = 22,
    height = 22,
    color = '#000',
    fill = 'rgb(102, 102, 102)',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 150"
            style={{
                fill,
                height,
                width,
            }}
        >
            <path d="M99.5 49.9a49.4 49.4 0 10-89.1 29.4H.5v70.2h99V79.3h-9.7A49.1 49.1 0 0099.5 50z"></path>
        </svg>
    );
});
