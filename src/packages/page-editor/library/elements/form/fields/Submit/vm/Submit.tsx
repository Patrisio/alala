import {Submit as SubmitUI} from '../Submit';

import {v4 as uuid} from 'uuid';
import {makeAutoObservable} from 'mobx';

export class Submit {
    public id: string = `submit-${uuid()}`;
    public text: string = 'Submit';

    constructor() {
        makeAutoObservable(this);
        this.setButtonText = this.setButtonText.bind(this);
    }

    setButtonText(text: string) {
        this.text = text;
    }

    render() {
        return (
            <SubmitUI submitVM={this}/>
        );
    }
}
