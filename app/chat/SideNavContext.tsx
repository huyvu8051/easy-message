'use client'

import React, {createContext, useContext, useState} from 'react'

const SideNavContext = createContext({
    isSideNavOpen: true,
    toggleSideNav: (): void => {}
})

const SideNavProvider = ({children}: { children: React.ReactNode }) => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(true)

    const toggleSideNav = (): void => {
        setIsSideNavOpen(!isSideNavOpen)
    }

    return (
        <SideNavContext.Provider value={{isSideNavOpen, toggleSideNav}}>
            {children}
        </SideNavContext.Provider>
    )
}

const useSideNav = () => {
    const context = useContext(SideNavContext)
    if (!context) {
        throw new Error('useSideNav must be used within a SideNavProvider')
    }
    return context
}

export {SideNavProvider, useSideNav}
