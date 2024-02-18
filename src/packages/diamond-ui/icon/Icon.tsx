import {iconsMap} from '../icons';
import {IconComponentContainer} from './styles';
import {observer} from 'mobx-react';

export const Icon = observer(({
    name, width, height, color, style,
    blur, fill, strokeType, className,
    strokeColor,
}) => {
    const IconComponent = iconsMap[name];

    return (
        <IconComponentContainer style={style}>
            <IconComponent
                width={width}
                height={height}
                color={color}
                blur={blur}
                fill={fill}
                strokeType={strokeType}
                strokeColor={strokeColor}
                className={className}
            />
        </IconComponentContainer>
    );
});
