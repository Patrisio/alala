import {SwitchUI} from '../../../../../../diamond-ui';
import {useForceUpdate} from '../../../../../../utils';

export const Stretch = ({elementUnitViewModel}) => {
    const forceUpdate = useForceUpdate();

    return (
        <SwitchUI
            checked={elementUnitViewModel.isStretch}
            label={'Stretch'}
            onClick={() => {
                elementUnitViewModel.toggleStretch();
                forceUpdate();
            }}
        />
    );
};
