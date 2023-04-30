import { Dispatch } from 'redux';
import { updateToastMessage, updateToastShow } from "./reducer";

export const showToast = (mes: string) => (dispatch: Dispatch) => {
    // display toast for 2 seconds
    dispatch(updateToastMessage(mes))
    dispatch(updateToastShow(true))
    setTimeout(() => {
        dispatch(updateToastShow(false))
        dispatch(updateToastMessage(''))
    }, 2000)
}