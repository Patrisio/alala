import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import ElementEditor from '../settings/ElementEditor';

import {makeObservable, observable, action} from 'mobx';

export class Image extends ElementVM {
    public altText = '';
    public imageData = {
        url: null,
        name: null,
    };
    public objectFit = 'fit';

    constructor(
        gridViewModel: any,
        width: number = gridViewModel.getElementWidth(config.position.columnStart, config.position.columnEnd),
        height: number = gridViewModel.getElementHeight(config.position.rowStart, config.position.rowEnd),
        minWidth: number = gridViewModel.cellWidth,
        minHeight: number = gridViewModel.gridCellHeight,
        position: any = {...config.position},
        public src: string = 'https://images.squarespace-cdn.com/content/v1/63dbe2648addf376efc1c735/d8db4354-4756-4a5c-b62f-2d972ec842eb/image-asset.jpeg?format=2500w',
    ) {
        super(
            gridViewModel,
            width,
            height,
            minWidth,
            minHeight,
            position,
            'IMAGE',
        );

        makeObservable(this, {
            altText: observable,
            setAltText: action,
            imageData: observable,
            setImageData: action,
            objectFit: observable,
            setObjectFit: action,
        });
    }

    setAltText(value) {
        this.altText = value;
    }

    setImageData(value) {
        this.imageData = value;
    }

    setObjectFit(value) {
        this.objectFit = value;
    }

    renderElementEditor() {
        return (
            <ElementEditor
                elementUnitViewModel={this}
            />
        );
    }
}
