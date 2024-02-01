import {iconsMap} from '../icons';
import {IconComponentContainer} from './styles';
import {observer} from 'mobx-react';

export const Icon = observer(({name, width, height, color, style, elementUnitViewModel}) => {
    console.log(width, '__width-_');
    let fwidth = width;
    if (elementUnitViewModel) {
        console.log(elementUnitViewModel.width);
        fwidth = elementUnitViewModel.width;
    }
    const IconComponent = iconsMap[name];

    return (
        <IconComponentContainer style={style}>
            <IconComponent
                width={fwidth}
                height={height}
                color={color}
            />
        </IconComponentContainer>
    );
});
