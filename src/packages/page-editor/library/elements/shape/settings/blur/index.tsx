import {RangeFieldUI} from '../../../../../../diamond-ui';
import {useForceUpdate} from '../../../../../../utils';

export const Blur = ({elementUnitViewModel}) => {
    const forceUpdate = useForceUpdate();

    return (
        <RangeFieldUI
            label={'Blur'}
            value={elementUnitViewModel.blur}
            onChange={(_, blurValue) => {
                elementUnitViewModel.setBlur(blurValue);
                forceUpdate();
            }}
        />
    );
};
