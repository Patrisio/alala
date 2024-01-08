import {DragModel} from './models/DragModel';
import {ResizeModel} from './models/ResizeModel';

import {makeAutoObservable} from 'mobx';
import {v4 as uuid} from 'uuid';

export class Section {
    public id = Math.round(Math.random() * 100000);
    private elements = new Map();
    public dragModel;
    public resizeModel;

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
}
