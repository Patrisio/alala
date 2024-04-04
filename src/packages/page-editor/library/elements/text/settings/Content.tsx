import {observer} from 'mobx-react';

import {SelectUI, OptionUI} from '../../../../../diamond-ui';

export const Content = observer(({textVM}) => {
    return (
        <>
            <SelectUI
                defaultValue={'h1'}
                onChange={(_, value) => {
                    textVM.setTagWrapper(value);
                }}
            >
                <OptionUI value={'h1'}>Heading 1</OptionUI>
                <OptionUI value={'h2'}>Heading 2</OptionUI>
                <OptionUI value={'h3'}>Heading 3</OptionUI>
                <OptionUI value={'h4'}>Heading 4</OptionUI>
                <OptionUI value={'p1'}>Paragraph 1</OptionUI>
                <OptionUI value={'p2'}>Paragraph 2</OptionUI>
                <OptionUI value={'p3'}>Paragraph 3</OptionUI>
                <OptionUI value={'monospace'}>Monospace</OptionUI>
            </SelectUI>
        </>
    );
});
