import React, { useState, useEffect } from "react";

const User = (props) => {
    const [planet, setPlanet]= useState("earth");

    //changing the state //omponentDidMount
    useEffect(()=> {

        setPlanet("mars")
        console.log("bye");
    }, [planet]);

    //componentDidUpdate
    

    return (
        <div>
            <h1>{props.name} </h1>
            <p> {props.description} </p>
            <h1>{planet}</h1>
        </div>
    )
}

export default User;



























// const User = (props) => {
//     return (
//     <div>
//         <h1> {props.name} </h1>
//         <p> {props.description} </p>
//     </div>
//     );
// };

// export default User;

//props=> parameters