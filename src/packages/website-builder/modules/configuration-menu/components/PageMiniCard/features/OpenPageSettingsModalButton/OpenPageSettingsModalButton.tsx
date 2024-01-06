import {IconUI} from '../../../../../../../diamond-ui';
import {OpenPageSettingsModalButtonUI} from './styles';

export const OpenPageSettingsModalButton = ({onClick}) => {
    return (
        <OpenPageSettingsModalButtonUI onClick={onClick}>
            <IconUI name={'settings'} />
        </OpenPageSettingsModalButtonUI>
    );
};
