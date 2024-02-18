import {TextVM} from './Text';
import {TextareaVM} from './Textarea';

export * from './Text';
export * from './Submit';
export * from './Textarea';

export const fieldList = [
    {
        fieldName: 'name',
        FieldVM: TextVM,
    },
    {
        fieldName: 'text',
        FieldVM: TextVM,
    },
    {
        fieldName: 'email',
        FieldVM: TextVM,
    },
    {
        fieldName: 'phone',
        FieldVM: TextVM,
    },
    {
        fieldName: 'textarea',
        FieldVM: TextareaVM,
    },
    {
        fieldName: 'dropdown',
        FieldVM: TextVM,
    },
    {
        fieldName: 'checkbox',
        FieldVM: TextVM,
    },
    {
        fieldName: 'radio',
        FieldVM: TextVM,
    },
];
