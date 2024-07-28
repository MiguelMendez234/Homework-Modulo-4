import React from "react";

const Details = (props) => {
    return(
        <>
        <h2> {props.nombre} </h2>
        <p> {props.descripcion} </p>
        </>
    )

}

export default Details