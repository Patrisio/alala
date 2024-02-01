import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import ElementEditor from '../settings/ElementEditor';

import {makeObservable, observable} from 'mobx';

export class Shape extends ElementVM {
    public isStretch = true;
    public blur = 0;
    public color = {
        hex: "#6f37e3",
        rgb: {
            r: 110.6303391028963,
            g: 54.89529597569676,
            b: 227.07676849365237,
            a: 1
        },
        hsv: {
            h: 259.4219653179191,
            s: 75.82522583007812,
            v: 89.04971313476562,
            a: 1
        }
    };
    public figure = 'award';

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
            'SHAPE',
        );

        this.toggleStretch = this.toggleStretch.bind(this);

        makeObservable(this, {
            isStretch: observable,
            blur: observable,
            color: observable,
            figure: observable,
        });
    }

    toggleStretch() {
        this.isStretch = !this.isStretch;
    }

    setBlur(value) {
        this.blur = value;
    }

    setColor(value) {
        this.color = value;
    }

    setFigure(value) {
        this.figure = value;
    }

    renderElementEditor() {
        return (
            <ElementEditor
                elementUnitViewModel={this}
            />
        );
    }
}
