import {makeAutoObservable} from 'mobx';
import {v4 as uuid} from 'uuid';

export class PositionerUnitViewModel {
    public id = Math.round(Math.random() * 1000);

    constructor(
        private position: any,
    ) {
        makeAutoObservable(this);
    }

    updateColumnStart(columnStart: number) {
        this.position.columnStart = columnStart;
    }

    updateColumnEnd(columnEnd: number) {
        this.position.columnEnd = columnEnd;
    }

    updateRowStart(rowStart: number) {
        this.position.rowStart = rowStart;
    }

    updateRowEnd(rowEnd: number) {
        this.position.rowEnd = rowEnd;
    }

    get gridArea(): string {
        return `${this.position.rowStart} / ${this.position.columnStart} / ${this.position.rowEnd} / ${this.position.columnEnd}`;
    }
}
