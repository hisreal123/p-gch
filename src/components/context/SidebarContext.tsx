import { createContext } from "react";


 type SideBarProps  = { 
    Open: boolean
    setOpen :  any
}

export const SideBarContext = createContext( {} as  SideBarProps)
