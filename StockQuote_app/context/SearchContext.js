import React, { useState, createContext } from "react";


export const AppContext = createContext();

export const AppProvider = (props) => {

    const [searchValye, setSearchValue] = useState('');
    const [realTimeQuotesList, setRealTimeQuotesList] = useState([]);



    const getSearchValue = (value) => {
        setSearchValue(value)
    }

    return (
        <AppContext.Provider value={{searchValye, getSearchValue: getSearchValue, setRealTimeQuotesList, realTimeQuotesList: realTimeQuotesList}}>
            {props.children}
        </AppContext.Provider>
    )
}