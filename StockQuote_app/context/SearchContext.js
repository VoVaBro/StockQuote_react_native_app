import React, {useState, createContext} from "react";


export const SearchContext = createContext();

export const SearchProvider = (props) => {

    const [searchValye, setSearchValue] = useState();


    const getSearch = () => {

    }

    return (
        <SearchContext.Provider value={searchValye }>
            {props.children}
        </SearchContext.Provider>
    )
}