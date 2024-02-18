import {observer} from 'mobx-react';
import {useMemo} from 'react';

export const AwardIcon = observer(({
    className,
    width = 22,
    height = 22,
    color = '#000',
    fill = 'rgb(102, 102, 102)',
    blur,
    strokeType,
    strokeColor,
}) => {
    const solidStroke = 0;
    const dashedStroke = '30px calc(6px + 5px)';
    const strokeDasharray = strokeType === 'solid' ? solidStroke : dashedStroke;
    console.log(strokeColor, '__strokeColor__');
    const strokeCss = strokeType !== 'none'
        ? `
            stroke: ${strokeColor};
            stroke-width: 15px;
            stroke-linecap: round;
            stroke-dasharray: ${strokeDasharray};
        `
        : '';
    
    const css = useMemo(() => `
        .${className} > path {
            ${strokeCss}
            overflow: visible;
            vector-effect: non-scaling-stroke;
        }
    `, [strokeType, strokeCss, className]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 150"
            style={{
                fill,
                height,
                width,
                filter: `blur(${blur}px) drop-shadow(-71px 71px 61px red)`,
            }}
            className={className}
        >
            <style>
                {css}
            </style>
            <path
                d="M99.5 49.9a49.4 49.4 0 10-89.1 29.4H.5v70.2h99V79.3h-9.7A49.1 49.1 0 0099.5 50z"
            >
            </path>
        </svg>
    );
});
