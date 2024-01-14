import {DragModel} from './models/DragModel';
import {ResizeModel} from './models/ResizeModel';
import {AddElement, RightControls, AddSection} from './features';

import {makeAutoObservable} from 'mobx';

export class Section {
    public id = Math.round(Math.random() * 100000);
    private elements = new Map();
    public dragModel;
    public resizeModel;
    public HTMLElementRef;
    public isHovered = false;
    public plugins = [];

    constructor(
        private gridViewModel: any,
    ) {
        makeAutoObservable(this);

        this.dragModel = new DragModel(
            this.gridViewModel,
        );

        this.resizeModel = new ResizeModel(
            this.gridViewModel
        );

        this.plugins = [
            <AddElement sectionVM={this} />,
            <RightControls sectionVM={this} />,
            <AddSection sectionVM={this} where={'top'}/>,
            <AddSection sectionVM={this} where={'bottom'}/>,
        ];
    }

    setHTMLElementRef(HTMLElementRef) {
        this.HTMLElementRef = HTMLElementRef;
    }

    addElement(elementUnitViewModel: any) {
        this.elements.set(elementUnitViewModel.id, elementUnitViewModel);
    }

    getConfig() {
        const elements = [];

        this.elements.forEach((elementVM) => {
            const elementConfig = elementVM.getConfig();
            elements.push(elementConfig);
        });

        const grid = this.gridViewModel.getConfig();
        
        return {
            id: this.id,
            elements,
            grid,
        };
    }

    get gridColumnsCount() {
        return this.gridViewModel.columns;
    }

    get elementList() {
        return [...this.elements.values()];
    }

    get gridVM() {
        return this.gridViewModel;
    }

    get HTMLElement() {
        if (!this.HTMLElementRef) return;
        return this.HTMLElementRef.current;
    }
}
