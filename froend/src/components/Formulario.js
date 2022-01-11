import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postParametro } from '../actions';
import { useForm } from "react-hook-form";

export const Formulario = () => {

    const parametros = useSelector(state => state.parametros);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        dispatch(postParametro(data));
    }
    return (
        <div>
            <section>
                <div className="container-md shadow p-4 mb-3 bg-white rounded form-group mx-10">
                    <h1 className="pt-2 text-center">Generador de secuencias aleatorias</h1>
                    <hr></hr>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="valorInicial">Valor más pequeño</label>
                            <input className="form-control" type="number" {...register("valorInicial")} />
                        </div>
                        <div>
                            <label htmlFor="valorMaximo">Valor más grande</label>
                            <input className="form-control" type="number" {...register("valorMaximo")} />
                        </div>
                        <div>
                            <label htmlFor="cantidadColumnas">Formato en columnas</label>
                            <input className="form-control" type="number" {...register("cantidadColumnas")} />
                        </div>
                        <br></br>
                        <button type='submit' className='btn btn-primary btn-lg' disabled={parametros.loading}>
                            {parametros.loading ? "Obteniendo..." : "Obtener"}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
