import {useCallback, useMemo} from 'react';

export const useMoveableData = (moveableRef) => {
    const moveable = moveableRef.current?.moveable;
    const controlBox = moveable?.getControlBoxElement();

    const hideControlBox = useCallback((e) => {
        if (e) {
            const controlBox = e.moveable.getControlBoxElement();
            controlBox.style.display = `none`;
            return;
        }
        controlBox.style.display = `none`;
    }, [controlBox]);

    const showControlBox = useCallback((e) => {
        if (e) {
            const controlBox = e.moveable.getControlBoxElement();
            controlBox.style.display = `block`;
            return;
        }

        controlBox.style.display = `block`;
    }, [controlBox]);

    // TODO: Поправить костыль с форсированным перемещением controlBox react-moveable
    const forceUpdateControlBox = useCallback((e, callback?: VoidFunction) => {
        hideControlBox(e);
        setTimeout(() => {
            e.moveable.updateRect();
            callback?.();
            showControlBox(e);
        });
    }, [hideControlBox, showControlBox]);

    return useMemo(() => {
        return {
            controlBox,
            forceUpdateControlBox,
        };
    }, [forceUpdateControlBox, controlBox]);
};
