import {useState} from 'react';

export const useForceUpdate = () => {
    const [_, forceUpdate] = useState(Symbol());

    return () => forceUpdate(Symbol());
};
