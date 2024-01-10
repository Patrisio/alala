import {IconUI} from '../../../../../../../diamond-ui';
import {DeletePageButtonUI} from './styles';

export const DeletePageButton = ({deletePage}) => {
    return (
        <DeletePageButtonUI
            onClick={deletePage}
        >
            <IconUI name={'trash'} width={16} height={16} />
        </DeletePageButtonUI>
    );
};
