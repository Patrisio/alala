'use client'

import {SectionVM} from '../section';
import {GridVM} from '../section/components/grid';
import {cl, EVENTS} from '../../communication-layer';


import {makeObservable, action, observable} from 'mobx';
import {v4 as uuid} from 'uuid';

export class Page {
    public id = uuid();
    public sectionsMap = new Map();
    private browserContext: any;

    constructor() {
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
