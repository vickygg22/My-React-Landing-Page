import React from "react";
import Images from "../../img/big-project-image.png"
const Card = (props) => {
    return (
      <div className="card col-3 mt-3 border padding">
        <img src={props.item.imgUrl} className="imageSize" id="square1" alt=""/>
        <h4 className=" mt-3 text-dark">{props.item.title}</h4>
        <p>{props.item.description}</p>
        <div className="mt-3 border-top marginBottom">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    )
}
export default Card;
