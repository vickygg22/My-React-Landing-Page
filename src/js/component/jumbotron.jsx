import React from "react";
const Jumbotron = () => {
    return (
        <div className="jumbotron mt-3 rounded">
            <h1 className="alignToLeft display-4">A Warm Welcome!</h1>
            <p className="alignToLeft lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae in fugiat amet adipisci, velit provident cumque consequuntur nobis odit animi nulla numquam itaque excepturi rerum ipsa iusto atque quis?</p>
            <div className="alignToLeft align-self-start mr-auto">
            <button type="button" class="align-self-start mr-auto btn btn-primary">Call to action!</button>
            </div>
        </div>
    )
}
export default Jumbotron;