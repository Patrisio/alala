import {ViewportPreviewerContainer} from './styles';
import {ViewportPreviewerVM} from './vm';

import {useState} from 'react';

export const ViewportPreviewer = () => {
    useState(() => new ViewportPreviewerVM());

    return (
        <ViewportPreviewerContainer
            name={'page-editor'}
            src={`/7c68v7b9`}
        />
    );
};
