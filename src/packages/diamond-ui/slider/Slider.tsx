import * as React from 'react';
import { Box } from '@mui/system';
import {Slider} from './styles';

export const SliderUI = (props) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                {...props}
            />
        </Box>
    );
};
