import React from "react";

const Details = (props) => {
    return(
        <>
        <h1> {props.nombre} </h1>
        <h3> {props.descripcion} </h3>
        </>
    )

}

export default Details