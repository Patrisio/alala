import {FormFieldContainer, FormLabel, FormInput} from './styles';

export const TextField = ({onChange, label, type, value}) => {
    return (
        <FormFieldContainer>
            <FormLabel>{label}</FormLabel>
            <FormInput
                value={value}
                type={type}
                onChange={onChange}
            />
        </FormFieldContainer>
    );
};