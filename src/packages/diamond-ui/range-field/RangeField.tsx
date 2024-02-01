import {RangeFieldContainer} from './styles';
import {Box} from '@mui/system';
import {H2} from '../typography';
import {SliderUI} from '../slider';

export const RangeField = ({
    label,
    value,
    onChange,
}) => {
    return (
        <RangeFieldContainer>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <H2>{label}</H2>
                <H2>{value}</H2>
            </Box>
            <SliderUI
                onChange={onChange}
            />
        </RangeFieldContainer>
    );
};
