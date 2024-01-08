'use client'

import {SectionVM} from '../section';
import {GridVM} from '../section/components/grid';
import {Converter} from '../Converter';
import {Page} from '../entity/Page';

import {makeAutoObservable} from 'mobx';

export class PageEditor {
    public page: any = new Page();

    constructor() {
        makeAutoObservable(this);
    }

    addSection() {
        const gridVM = new GridVM();
        const section = new SectionVM(gridVM);

        this.page.getSections().set(section.id, section);

        return section;
    }

    getPageConfig() {
        return this.page.getConfig();
    }

    replacePage(page: any) {
        this.page.replace(page);
    }

    get sectionList() {
        return [...this.page.sectionsMap.values()];
    }
}
