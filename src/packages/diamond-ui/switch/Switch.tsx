import * as React from 'react';
import {Switch as BaseSwitch} from '@mui/base/Switch';
import {observer} from 'mobx-react';

import {Root} from './styles';
import {H5} from '../typography';

export const Switch = observer(({
    checked,
    onClick,
    label,
}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            {
                label && <H5>{label}</H5>
            }
            <BaseSwitch
                slots={{
                    root: Root,
                }}
                checked={checked}
                onClick={onClick}
            />
        </div>
    );
});