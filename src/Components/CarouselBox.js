import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Run from "../assets/Run.jpg";
import Skateboarding from "../assets/skateboarding.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Run} alt="Run" />
          <Carousel.Caption>
            <h3>Run</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt architecto nam blanditiis ipsa laborum at eius eligendi rerum
              officia deserunt id vitae, sit eaque? Iure facere aperiam fugiat
              exercitationem?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Skateboarding} alt="Skateboarding" />
          <Carousel.Caption>
            <h3>Skateboarding</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt architecto nam blanditiis ipsa laborum at eius eligendi rerum
              officia deserunt id vitae, sit eaque? Iure facere aperiam fugiat
              exercitationem?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Run} alt="Run" />
          <Carousel.Caption>
            <h3>Run</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              sunt architecto nam blanditiis ipsa laborum at eius eligendi rerum
              officia deserunt id vitae, sit eaque? Iure facere aperiam fugiat
              exercitationem?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
