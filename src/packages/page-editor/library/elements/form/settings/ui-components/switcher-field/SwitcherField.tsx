import {FormFieldContainer, FormLabel} from './styles';
import {SwitchUI} from '../../../../../../../diamond-ui';

export const SwitcherField = ({toggleBackground, label, hasBackground}) => {
    return (
        <FormFieldContainer>
            {/* <FormLabel>{label}</FormLabel> */}
            <SwitchUI
                checked={hasBackground}
                label={label}
                onClick={toggleBackground}
            />
        </FormFieldContainer>
    );
};