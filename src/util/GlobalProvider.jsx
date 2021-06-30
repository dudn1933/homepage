import { createContext, useReducer, useMemo } from 'react';

const globalInitialState = {
    navigationBar: { show: false },
    offsetTop: { mainLocation: 0, prodLocation: 0, footerLocation: 0 },
    productView: { hicardi: false, smartView: false, liveStudio: false },
};

const globalReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'offsetTopChange':
            return {
                ...state,
                offsetTop: payload
            }
        case 'navigationView':
            return {
                ...state,
                navigationBar: payload,
            }
        case 'productViewChange':
            return {
                ...state,
                productView: payload,
            }
        default:
            throw new Error('[Error] dispatch - global');
    }
};

export const GlobalContext = createContext({
    globalState: null,
    globalDispatch: () => {},
});

const GlobalProvider = ({ children }) => {
    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState);
    const value = useMemo(() => ({ globalState, globalDispatch }), [globalState, globalDispatch]);
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
