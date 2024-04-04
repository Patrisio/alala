import {ElementVM} from '../../../../element/vm';
import {config} from './config';
import ElementEditor from '../settings/ElementEditor';
import {Line} from '../vm/Line';

import {makeObservable, observable, action, computed} from 'mobx';

export class Text extends ElementVM {
    public tagWrapper = 'h1';
    public selectedText = '';
    public linesMap = new Map();

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
            'TEXT',
        );

        makeObservable(this, {
            tagWrapper: observable,
            setTagWrapper: action,
            selectedText: observable,
            setSelectedText: action,
            linesMap: observable,
            addLine: action,
            lineList: computed,
        });

        const line = new Line(this);
        this.addLine(line);
    }

    addLine(node) {
        this.linesMap.set(node.id, node);
    }

    get lineList() {
        return [...this.linesMap.values()];
    }

    setTagWrapper(tagWrapper: string) {
        this.tagWrapper = tagWrapper;
    }

    setSelectedText() {
        this.selectedText = window.getSelection().toString();
    }

    onInputHandler(...args) {
        console.log(args, '__ARGS__');
    }

    renderElementEditor() {
        return (
            <ElementEditor
                elementUnitViewModel={this}
            />
        );
    }
}
