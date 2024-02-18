import {Box} from '@mui/system';
import {H2, SelectUI, OptionUI, TabsUI, TabsListUI, TabUI, IconUI, TabPanelUI} from '../../../../../../diamond-ui';
import {StrokeColor} from '../stroke-color';

export const Stroke = ({elementVM}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <H2>{'Stroke'}</H2>

            <TabsUI
                defaultValue={elementVM.strokeType}
                onChange={(_, strokeType) => elementVM.setStrokeType(strokeType)}
            >
                <TabsListUI>
                    <TabUI value={'none'}>
                        <IconUI
                            name={'notAllowed'}
                            color={'#0E0E0E'}
                        />
                    </TabUI>
                    <TabUI value={'solid'}>
                        <IconUI
                            name={'solid'}
                            color={'#0E0E0E'}
                        />
                    </TabUI>
                    <TabUI value={'dashed'}>
                        <IconUI
                            name={'dashed'}
                            color={'#0E0E0E'}
                        />
                    </TabUI>
                </TabsListUI>

                <TabPanelUI value={'none'} />

                <TabPanelUI value={'solid'}>
                    <StrokeColor elementVM={elementVM} />
                </TabPanelUI>

                <TabPanelUI value={'dashed'}>
                    <StrokeColor elementVM={elementVM} />
                </TabPanelUI>
            </TabsUI>
        </Box>
    );
};
