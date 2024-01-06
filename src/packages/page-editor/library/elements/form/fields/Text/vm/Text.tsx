import {Text as TextUI} from '../Text';

import {v4 as uuid} from 'uuid';

export class Text {
    public id: string = uuid();
    public value?: string;
    public label?: string;
    public placeholder?: string;
    public type: string = 'text';

    constructor() {}

    render() {
        return (
            <TextUI vm={this}/>
        );
    }
}
