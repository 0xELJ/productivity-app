import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export function useActions<T>(actions: T, deps: any[]): T {
    const dispatch = useDispatch();

    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(action => bindActionCreators(action, dispatch));
            }
            return bindActionCreators(actions as any, dispatch);
        }
        // TODO: remove comment and fix the warning react-hooks/exhaustive-deps
        // eslint-disable-next-line react-hooks/exhaustive-deps
    , deps.length ? [dispatch, ...deps] : [dispatch]) as T;
}
