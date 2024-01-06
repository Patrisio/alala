import {FormFieldContainer, FormLabel, FormInput} from './styles';

export const Text = ({vm}) => {
    return (
        <FormFieldContainer>
            <FormLabel>{vm.label}</FormLabel>
            <FormInput
                placeholder={vm.placeholder}
                value={vm.value}
                type={vm.type}
            />
        </FormFieldContainer>
    );
};
