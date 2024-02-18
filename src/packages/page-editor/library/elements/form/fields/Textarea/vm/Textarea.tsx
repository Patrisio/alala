import {Textarea as TextareaUI} from '../Textarea';
import Settings from '../Settings';

import {v4 as uuid} from 'uuid';
import {makeAutoObservable} from 'mobx';

export class Textarea {
    public id: string = uuid();
    public name: string = 'textareaField';
    public value?: string;
    public placeholder?: string;

    constructor(
        private label: string,
    ) {
        makeAutoObservable(this);
    }

    onChange(value) {
        this.value = value;
    }

    renderSettings() {
        return (
            <Settings textareaFieldVM={this} />
        );
    }

    render() {
        return (
            <TextareaUI vm={this} />
        );
    }
}
