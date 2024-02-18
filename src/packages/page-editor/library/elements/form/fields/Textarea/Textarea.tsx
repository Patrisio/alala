import {FormFieldContainer, FormLabel, FormTextarea} from './styles';
import {TextareaUI} from '../../../../../../diamond-ui';

export const Textarea = ({vm}) => {
    return (
        <FormFieldContainer>
            <FormLabel>{vm.label}</FormLabel>
            <TextareaUI
                placeholder={vm.placeholder}
                value={vm.value}
            />
        </FormFieldContainer>
    );
};
