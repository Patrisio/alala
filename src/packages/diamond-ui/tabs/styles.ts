import {styled} from '@mui/system';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

export const Tabs = styled(BaseTabs)`
    & {
        width: 100%;
    }
`;

export const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #666;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    /* width: 100%; */
    padding: 16px 18px;
    border: none;
    display: flex;
    justify-content: center;
    position: relative;
    transition: all .2s;

    &:hover {
        color: #0E0E0E;
    }

    &.${tabClasses.selected} {
        color: #0E0E0E;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #0E0E0E;
            z-index: 1;
        }
        /* border-bottom: 2px solid black; */
    }

    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        padding: 20px 12px;
    `,
);

export const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
        margin-bottom: 16px;
        display: flex;
        align-content: space-between;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #E7E7E7;
        }
    `,
);
