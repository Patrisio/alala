import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import {TextVM, SubmitVM} from '../fields';

export class Form extends ElementVM {
    private fieldsMap = new Map();

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
            'FORM',
        );

        this.setupDefaultForm();
    }

    private addField(field: any) {
        this.fieldsMap.set(field.id, field);
    }

    private setupDefaultForm() {
        const textField = new TextVM();
        this.addField(textField);

        const submit = new SubmitVM();
        this.addField(submit);
    }

    get fieldList() {
        return [...this.fieldsMap.values()];
    }
}
