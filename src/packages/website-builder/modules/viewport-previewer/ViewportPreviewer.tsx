import {ViewportPreviewerContainer} from './styles';
import {ViewportPreviewerVM} from './vm';

import {useMemo} from 'react';

export const ViewportPreviewer = () => {
    const viewportPreviewer = useMemo(() => {
        return new ViewportPreviewerVM();
    }, []);

    return (
        <ViewportPreviewerContainer
            name={'page-editor'}
            src={`/7c68v7b9`}
        />
    );
};
