import React from 'react'

const SecondsCounter =(props)=>{
    console.log(props.seconds)// 10
    let unidades = 0 // 1
    let decenas = 0 // 0
    return (
        <>
            <h1>SecondsCounter</h1>
            <h2>{props.seconds}</h2>
            <p>{unidades}</p>
            <p>{decenas}</p>
        </>
    );
}

export default SecondsCounter;


// ahcer una funcion que tome 123. y les retonre 1 ,2,3