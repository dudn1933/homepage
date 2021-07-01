import { createContext, useReducer, useMemo } from 'react';

const globalInitialState = {
    screenSize: { width:0, height:0},
    navigationBar: { show: false },
    offsetTop: { mainLocation: 0, prodLocation: 0, hicardiLocation: 0, smartViewLocation: 0, footerLocation: 0 },
    productView: { hicardi: false, smartView: false, liveStudio: false },
    plusButton: { first: false, second: false, third: false },
    mousePoint: { show: false, x: 0, y: 0 },
    scrollPoint: { target: 0 },
};

const globalReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'screenSizeRegister':
            return {
                ...state,
                screenSize: payload
            }
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
        case 'mousePointChange':
            return {
                ...state,
                mousePoint: payload,
            }
        case 'scrollPointChange':
            return {
                ...state,
                scrollPoint: payload,
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
