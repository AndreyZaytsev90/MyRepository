export type StateType = {
    collapsed: boolean
}

export const UncontrolledAccordionReducer = (state: StateType, action: ActionType) : StateType=> {
    switch (action.type) {
        case "SET-COLLAPSED" :
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('The type of action was not found')
    }
}


type ActionType = CollapsedHandlerType

type CollapsedHandlerType = ReturnType<typeof collapsedHandlerAC>

export const collapsedHandlerAC = ()=> {
    return {
        type: "SET-COLLAPSED",
        //payload: {collapsed}
    } as const
}