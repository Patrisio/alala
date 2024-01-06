import {Submit as SubmitUI} from '../Submit';

import {v4 as uuid} from 'uuid';

export class Submit {
    public id: string = uuid();
    public text?: string;

    constructor() {}

    render() {
        return (
            <SubmitUI vm={this}/>
        );
    }
}
