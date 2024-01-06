import {ElementVM} from '../../../../element/vm';
import {config} from './config';

export class Text extends ElementVM {
    constructor(
        gridViewModel: any,
        width: number = gridViewModel.getElementWidth(config.position.columnStart, config.position.columnEnd),
        height: number = gridViewModel.getElementHeight(config.position.rowStart, config.position.rowEnd),
        minWidth: number = gridViewModel.cellWidth,
        minHeight: number = gridViewModel.gridCellHeight,
        position: any = {...config.position},
        public value?: string,
    ) {
        super(
            gridViewModel,
            width,
            height,
            minWidth,
            minHeight,
            position,
            'TEXT',
        );
    }
}
