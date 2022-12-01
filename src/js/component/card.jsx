import React from "react";
import Images from "../../img/big-project-image.png"
const Card = () => {
    return (
      <>
      <div className=" marginLeft row">
      <div className="card col-3 mt-3 border padding">
        <img src={Images} id="square1" alt=""/>
        <h4 className=" mt-3 text-dark">Card title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ra eusimod odio, gravida pellentesque urna varius vitae.</p>
        <div className="mt-3 border-top marginBottom">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
      <div className="card col-3 mt-3 border padding">
        <img src={Images} id="square2" alt=""/>
        <h4 className="mt-3 text-dark">Card title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ra eusimod odio, gravida pellentesque urna varius vitae.</p>
        <div className="mt-3 border-top marginBottom">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
      <div className="card col-3 mt-3 border padding">
        <img src={Images} id="square3" alt=""/>
        <h4 className="mt-3 text-dark">Card title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ra eusimod odio, gravida pellentesque urna varius vitae.</p>
        <div className="mt-3 border-top marginBottom">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
      <div className="card col-3 mt-3 border padding">
        <img src={Images} id="square3" alt=""/>
        <h4 className="mt-3 text-dark">Card title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ra eusimod odio, gravida pellentesque urna varius vitae.</p>
        <div className="mt-3 border-top marginBottom">
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    </div>
    </>
    )
}
export default Card;
