import {ElementConfig} from '../types';
import {SharedState} from '../SharedState';

import {PositionerUnitViewModel} from '../components/positioner/PositionerUnitViewModel';
import {OutlineUnitViewModel} from '../components/outline/OutlineUnitViewModel';
import {ElementType} from '../components/positioner/types';

import {makeObservable, toJS, action, observable} from 'mobx';
import {v4 as uuid} from 'uuid';

export class Element {
    public id = Math.round(Math.random() * 1000);
    public sharedState = new SharedState();
    public positionerUnitViewModel: any;
    public outlineUnitViewModel: any;
    public isEditorToolbarOpened = false;
    public isElementToolbarOpened = false;

    constructor(
        private gridViewModel: any,
        protected width: number,
        private height: number,
        private minWidth: number,
        private minHeight: number,
        private position: any,
        private type: string,
    ) {
        makeObservable(this, {
            updateElementWidth: action.bound,
            updateElementHeight: action.bound,
            isEditorToolbarOpened: observable,
            isElementToolbarOpened: observable,
        });

        this.positionerUnitViewModel = new PositionerUnitViewModel({...this.position});
        this.outlineUnitViewModel = new OutlineUnitViewModel(
            {...this.position},
            this.width,
            this.height,
            this.gridViewModel,
        );
    }

    protected getConfig() {
        return {
            id: this.id,
            width: this.width,
            height: this.height,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            position: {
                ...toJS(this.positionerUnitViewModel.position),
                id: this.positionerUnitViewModel.id,
            },
            type: this.type,
        };
    }

    setMinOffsetWidthAndHeight(e, minWidth, minHeight) {
        // const {minWidth, minHeight} = this.config;
        e.setMin([minWidth, minHeight]);
    }

    updateElementWidth(width: number) {
        this.width = width;
    }

    updateElementHeight(height: number) {
        this.height = height;
    }

    openEditorToolbar() {
        this.isEditorToolbarOpened = true;
    }

    closeEditorToolbar() {
        this.isEditorToolbarOpened = false;
    }

    openElementToolbar() {
        this.isElementToolbarOpened = true;
    }

    closeElementToolbar() {
        this.isElementToolbarOpened = false;
    }
}
