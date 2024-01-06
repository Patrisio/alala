import {cl, EVENTS} from '../../../../communication-layer';

import {makeAutoObservable} from 'mobx';

export class ViewportPreviewer {
    private isLoaded: boolean = false;
    private pageId: string = '';

    constructor() {
        makeAutoObservable(this);
        cl.register('ViewportPreviewer', this);
        window.addEventListener('message', (e) => {
            this.isLoaded = e.data.isLoaded;
            this.pageId = e.data.pageId;


            cl.emit(EVENTS.IFRAME_WITH_PAGE_EDITOR_HAS_LOADED);
        });
    }
}
