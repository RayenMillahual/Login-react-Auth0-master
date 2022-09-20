import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import AlertaContext from "../context/alertas/alertaContext";

const Login = () => {

     
     const alertaContext = useContext(AlertaContext);
     const { alerta, mostrarAlerta } = alertaContext;
 

    const [ usuario, guardarUsuario ] = useState({
        username: "",
        password: ""
    });

     
    const { username, password } = usuario;
     

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };


    const onSubmit = e => {
        e.preventDefault();

        
        if(username.trim() === "" || password.trim() === "") {
            mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
        } else {
            mostrarAlerta("Inicio exitoso", "alerta-ok");
        }

        
        //Función para conectar a la página central
        //iniciarSesion({username, password});
    };

    return ( 
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="username"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Sign In" />
                    </div>
                </form>

                <Link to={"/nueva-cuenta"} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;