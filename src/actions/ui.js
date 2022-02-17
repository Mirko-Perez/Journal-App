import { types } from "../types/types";

export const setError = ( err ) =>({
    type:types.uiSetErrors,
    payload:err
})


export const RemoveError = (  ) =>({
    type:types.uiRemoveErrors,
})


export const uiStartLoading =  () =>({
    type:types.uiStartLoading
})

export const uiFinishLoading = () =>({
    type:types.uiFinishLoading
})

