'use client'

import {SectionVM} from '../section';
import {GridVM} from '../section/components/grid';
import {cl, EVENTS} from '../../communication-layer';

import {makeObservable, action, observable} from 'mobx';
import {v4 as uuid} from 'uuid';

export class Page {
    public sectionsMap = new Map();
    private browserContext: any;

    constructor(
        public id: string | number = uuid(),
        public name?: string,
    ) {
        makeObservable(this, {
            sectionsMap: observable,
            addSection: action.bound,
            getSections: action.bound,
            openPageInIframe: action.bound,
        });
    }

    addSection(gridViewModel?: any) {
        let section;

        if (gridViewModel) {
            section = new SectionVM(gridViewModel);
        } else {
            const gridVM = new GridVM();
            section = new SectionVM(gridVM);
        }

        this.sectionsMap.set(section.id, section);
        
        return section;
    }

    cloneSection(id: number) {
        
    }

    removeSection(id: number) {
        this.sectionsMap.delete(id);
    }

    moveSection(id: number, position: 'down' | 'up') {
        const sectionEntries = [...this.sectionsMap.entries()];
        const foundIndex = sectionEntries.findIndex((entry) => {
            const sectionId = entry[0];
            return sectionId === id;
        });

        if (foundIndex < 0) throw new Error(`Не найдена секция по указанному id: ${id}`);

        const newIndex = position === 'down'
            ? foundIndex + 1
            : foundIndex - 1;

        function swapElements(arr, i1, i2) {
            arr[i1] = arr.splice(i2, 1, arr[i1])[0];
        }
        
        swapElements(sectionEntries, foundIndex, newIndex);

        this.sectionsMap.clear();

        for (const [sectionId, section] of sectionEntries) {
            this.sectionsMap.set(sectionId, section);
        }
    }

    addSectionToPosition(id: number, position: 'bottom' | 'top') {
        const sectionEntries = [...this.sectionsMap.entries()];
        const foundIndex = sectionEntries.findIndex((entry) => {
            const sectionId = entry[0];
            return sectionId === id;
        });

        if (foundIndex < 0) throw new Error(`Не найдена секция по указанному id: ${id}`);

        const newIndex = position === 'bottom'
            ? foundIndex + 1
            : foundIndex;

        const gridVM = new GridVM();
        const section = new SectionVM(gridVM);

        sectionEntries.splice(newIndex, 0, [section.id, section]);

        this.sectionsMap.clear();

        for (const [sectionId, section] of sectionEntries) {
            this.sectionsMap.set(sectionId, section);
        }
    }

    getSections() {
        return this.sectionsMap;
    }

    replace(page) {
        this.clearSections();
        this.insertSectionList(page.getSections());
    }

    private clearSections() {
        this.sectionsMap.clear();
    }

    private insertSectionList(sections) {
        sections.forEach((section) => {
            this.sectionsMap.set(section.id, section);
        });
    }

    getConfig() {
        const config = [];
        this.sectionsMap
            .forEach((sectionVM) => {
                const sectionConfig = sectionVM.getConfig();
                config.push(sectionConfig);
            });
            
        return config;
    }

    openPageInIframe() {
        const activePageIdInIframe = cl.to('ViewportPreviewer').pageId;
        if (activePageIdInIframe === this.id) {
            return;
        }

        cl.once(EVENTS.IFRAME_WITH_PAGE_EDITOR_HAS_LOADED, () => {
            this.postMessageToViewportPreviewer();
        });

        this.browserContext = window.open(`/${this.id}`, 'page-editor');
    }

    postMessageToViewportPreviewer() {
        window.frames[0].postMessage({hello: this.getConfig()}, '*');
    }
}
