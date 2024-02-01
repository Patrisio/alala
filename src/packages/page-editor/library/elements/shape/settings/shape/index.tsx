import {useForceUpdate} from '../../../../../../utils';
import {SelectUI, OptionUI, IconUI} from '../../../../../../diamond-ui';

export const Shape = ({elementVM}) => {
    const forceUpdate = useForceUpdate();

    return (
        <SelectUI
            defaultValue={elementVM.figure}
            onChange={(_, value) => {
                elementVM.figure = value;
            }}
        >
            <OptionUI value={'archedWindow'}>
                <IconUI
                    name={'archedWindow'}
                />
                archedWindow
            </OptionUI>
            <OptionUI value={'award'}>
                <IconUI
                    name={'award'}
                />
                award
            </OptionUI>
        </SelectUI>
    );
};
