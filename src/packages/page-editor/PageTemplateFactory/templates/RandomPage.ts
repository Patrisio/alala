'use client'

import {Page} from '../../entity/Page';
import {ShapeVM, ButtonVM} from '../../library/elements';

import randomInteger from 'random-int';

export class RandomPage extends Page {
    constructor() {
        super();
        this.createFirstSection();
    }

    private createFirstSection() {
        const section = this.addSection();
        const initialPosition = {
            rowStart: randomInteger(1, 4),
            rowEnd: randomInteger(5, 10),
            columnStart: randomInteger(1, 12),
            columnEnd: randomInteger(13, 14),
        }

        const element = new ShapeVM(
            section.gridVM,
            section?.gridVM.getElementWidth(initialPosition.columnStart, initialPosition.columnEnd),
            section?.gridVM.getElementHeight(initialPosition.rowStart, initialPosition.rowEnd),
            section.gridVM.cellWidth,
            section.gridVM.gridCellHeight,
            {
                rowStart: initialPosition.rowStart,
                rowEnd: initialPosition.rowEnd,
                columnStart: initialPosition.columnStart,
                columnEnd: initialPosition.columnEnd,
            },
        );

        section.addElement(element);
    }

    private createSecondSection() {
        const section = this.addSection();
        const initialPosition = {
            rowStart: 8,
            rowEnd: 9,
            columnStart: 3,
            columnEnd: 8,
        }
        section.addElement({
            width: section?.gridVM.getElementWidth(initialPosition.columnStart, initialPosition.columnEnd),
            height: section?.gridVM.getElementHeight(initialPosition.rowStart, initialPosition.rowEnd),
            minWidth: section.gridVM.cellWidth,
            minHeight: section.gridVM.gridCellHeight,
            position: {
                rowStart: initialPosition.rowStart,
                rowEnd: initialPosition.rowEnd,
                columnStart: initialPosition.columnStart,
                columnEnd: initialPosition.columnEnd,
            },
        });
    }

    private createThirdSection() {
        const section = this.addSection();

        const firstElementInitialPosition = {
            rowStart: 2,
            rowEnd: 8,
            columnStart: 15,
            columnEnd: 20,
        }
        section.addElement({
            width: section?.gridVM.getElementWidth(firstElementInitialPosition.columnStart, firstElementInitialPosition.columnEnd),
            height: section?.gridVM.getElementHeight(firstElementInitialPosition.rowStart, firstElementInitialPosition.rowEnd),
            minWidth: section.gridVM.cellWidth,
            minHeight: section.gridVM.gridCellHeight,
            position: {
                rowStart: firstElementInitialPosition.rowStart,
                rowEnd: firstElementInitialPosition.rowEnd,
                columnStart: firstElementInitialPosition.columnStart,
                columnEnd: firstElementInitialPosition.columnEnd,
            },
        });

        const secondElementInitialPosition = {
            rowStart: 4,
            rowEnd: 7,
            columnStart: 3,
            columnEnd: 7,
        }
        section.addElement({
            width: section?.gridVM.getElementWidth(secondElementInitialPosition.columnStart, secondElementInitialPosition.columnEnd),
            height: section?.gridVM.getElementHeight(secondElementInitialPosition.rowStart, secondElementInitialPosition.rowEnd),
            minWidth: section.gridVM.cellWidth,
            minHeight: section.gridVM.gridCellHeight,
            position: {
                rowStart: secondElementInitialPosition.rowStart,
                rowEnd: secondElementInitialPosition.rowEnd,
                columnStart: secondElementInitialPosition.columnStart,
                columnEnd: secondElementInitialPosition.columnEnd,
            },
        });
    }
}