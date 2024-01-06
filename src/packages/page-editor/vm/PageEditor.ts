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
        
        // window.addEventListener('message', this.handleMessage);
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

    private handleMessage = (e) => {
        const pageConfig = e.data.hello;
        const page = new Converter(pageConfig).getPage();
        this.replacePage(page);
    }

    get sectionList() {
        return [...this.page.sectionsMap.values()];
    }
}
