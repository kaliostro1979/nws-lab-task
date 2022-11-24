import {createContext, useState} from "react";

export const Context = createContext(null)

export const ContextProvider = (({children}) => {
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    return (
        <Context.Provider
            value={{
                limit,
                setLimit,
                page,
                setPage
            }}
        >
            {children}
        </Context.Provider>
    )
})
