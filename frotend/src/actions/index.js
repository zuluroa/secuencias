
import { BASE_URL } from "../config/url";

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

export function getParametro(id) {
    console.log("id actions", id)
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(
                `${BASE_URL}result/${id}`
            )
            const data = await response.json()
            console.log("data actions", data)
            dispatch(success({ data }))
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function postParametro(parametros) {
    return async dispatch => {
        dispatch(loading())
        try {
            const response = await fetch(`${BASE_URL}new`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parametros)
                }
            )
            const data = await response.json()
            dispatch(success({ redirect: `/respuesta/${data.id}` }));
        } catch (error) {
            dispatch(failure())
        }
    }
}
