import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParametro } from '../actions';


export const Response = ({ match }) => {

    const parametros = useSelector(state => state.parametros);
    const dispatch = useDispatch();
    const { id } =  match.params ;
    console.log("ID ENVIADO POR PARAMETROS", id)

    useEffect(() => {
        console.log("entre al useeffec")
        dispatch(getParametro(id))
    }, [id])

    
    console.log("Parametros", parametros)

    return (
        <div>
            Lista random:
            <div className="row">
                {parametros?.data?.randomList?.map(lista =>
                    <div className="col-md-auto">
                        <ul id='columnas' >
                            Columna
                            {lista.map(numero =>
                                <div>
                                    {numero}
                                </div>
                            )}
                            <br></br>
                        </ul>
                    </div>)}
            </div>
            <br></br>
        </div>
    )
}
