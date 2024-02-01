import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import ElementEditor from '../settings/ElementEditor';
import {makeObservable, observable} from 'mobx';

export class Button extends ElementVM {
    public text: string = 'Learn more';
    public background: string = '#2B2C29';
    public color: string = '#FFF';
    public openLinkInNewTab = true;
    public objectFit = 'fill';
    public alignment = 'center';

    constructor(
        gridViewModel: any,
        width: number = gridViewModel.getElementWidth(config.position.columnStart, config.position.columnEnd),
        height: number = gridViewModel.getElementHeight(config.position.rowStart, config.position.rowEnd),
        minWidth: number = gridViewModel.cellWidth,
        minHeight: number = gridViewModel.gridCellHeight,
        position: any = {...config.position},
    ) {
        super(
            gridViewModel, 
            width,
            height,
            minWidth,
            minHeight,
            position,
            'BUTTON',
        );

        makeObservable(this, {
            text: observable,
            objectFit: observable,
            alignment: observable,
        });
    }

    updateText(text: string) {
        this.text = text;
    }

    setObjectFit(objectFit: string) {
        this.objectFit = objectFit;
    }

    setAlignment(alignment: string) {
        this.alignment = alignment;
    }

    toggleOpenLinkInNewTab() {
        this.openLinkInNewTab = !this.openLinkInNewTab;
    }

    getWidth() {
        if (this.objectFit === 'fit') {
            const width = this.width - (20 * this.width / 100);

            return width;
        }

        return this.width ;
    }

    renderElementEditor() {
        return (
            <ElementEditor
                elementUnitViewModel={this}
            />
        );
    }

    // TODO: добавить переопределение конфига для Converter
}
