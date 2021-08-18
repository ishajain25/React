import React, { useState, useEffect } from "react";

const User = (props) => {
    const [planet, setPlanet]= useState("earth");

    //changing the state //omponentDidMount
    useEffect(()=> {
        console.log("component mounting");

        //componentWillUnmount
        return console.log("bye");
    },[]);

    //componentDidUpdate
    useEffect(() => {
        console.log("Planet changes");
    },[planet]);

    return (
        <div>
            <h1>{props.name} </h1>
            <p> {props.description} </p>
            <button onClick={() => setPlanet("pluto")}>{planet}</button>

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