import React, { useState } from "react";
import styled from "styled-components";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import db from './../firebase/firebaseConfig';

const Contacto = (props) => {
    const { id, nombre, correo } = props;
    const [editar, setEditar] = useState(false);
    const [actualizarNombre, setActualizarNombre] = useState(nombre);
    const [actualizarCorreo, setActualizarCorreo] = useState(correo);

    const actualizarContacto = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'users', id), {
                nombre: actualizarNombre,
                correo: actualizarCorreo
            })
        } catch (error) {
            console.log(error);
        }

        setEditar(false);
    }

    const eliminarContacto = async (id) => {
        try {
            await deleteDoc(doc(db, 'users', id))

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ContenedorContacto>
            {
                editar ?
                    <form onSubmit={actualizarContacto}>
                        <Input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={actualizarNombre}
                            onChange={(e) => { setActualizarNombre(e.target.value) }}
                        />
                        <Input
                            type="email"
                            name="Correo"
                            placeholder="Correo"
                            value={actualizarCorreo}
                            onChange={(e) => { setActualizarCorreo(e.target.value) }}
                        />
                        <Boton type="submit">Actualizar</Boton>
                    </form>
                    :
                    <>
                        <Nombre>{nombre}</Nombre>
                        <Correo>{correo}</Correo>
                        <Boton onClick={() => { setEditar(!editar) }}>Editar</Boton>
                        <Boton onClick={() => { eliminarContacto(id) }}>Borrar</Boton>

                    </>
            }
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;


const Nombre = styled.p`
	font-weight: bold;
`;

const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

export default Contacto;