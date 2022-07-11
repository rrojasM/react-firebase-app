import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, onSnapshot } from "firebase/firestore";
import db from './../firebase/firebaseConfig';
import Contacto from "./contacto";


const Lista = () => {
    const [contactos, setContactos] = useState([]);


    useEffect(() => {
        onSnapshot(
            collection(db, 'users'),
            (snap) => {
                const usuarios = snap.docs.map((user) => {
                    return { ...user.data(), id: user.id }
                });
                setContactos(usuarios);
            },
            (error) => {
                console.log("Error", error);
            }
        )
    }, [])


    return (

        contactos.length > 0 &&
        <ContenedorContactos>
            {
                contactos.map((item) => {
                    return <Contacto
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        correo={item.correo}
                    />
                })
            }
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default Lista;