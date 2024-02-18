import * as React from 'react';

import {TextareaAutosize} from './styles';

export const TextareaUI = ({
    placeholder = '',
    value,
}) => {
    return (
        <TextareaAutosize
            aria-label='empty textarea'
            placeholder={placeholder}
            value={value}
        />
    );
}