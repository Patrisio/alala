'use client'

import {SectionVM} from '../section';
import {GridVM} from '../section/components/grid';
import {Converter} from '../Converter';
import {Page} from '../entity/Page';
import {cl, EVENTS} from '../../communication-layer';

import {makeAutoObservable} from 'mobx';

export class PageEditor {
    public page: any = new Page();

    constructor() {
        makeAutoObservable(this);

        cl.on(EVENTS.ADD_SECTION_TO_POSITION, ({id, position}) => {
            this.page.addSectionToPosition(id, position);
        });
        cl.on(EVENTS.MOVE_SECTION_DOWN, ({id}) => {
            this.page.moveSection(id, 'down');
        });
        cl.on(EVENTS.MOVE_SECTION_UP, ({id}) => {
            this.page.moveSection(id, 'up');
        });
        cl.on(EVENTS.REMOVE_SECTION, ({id}) => {
            this.page.removeSection(id);
        });
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
