import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <CarouselBox />
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://klike.net/uploads/posts/2019-05/1558767809_1.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum iste totam fugit!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum iste totam fugit!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://pristor.ru/wp-content/uploads/2018/06/%D0%9E%D1%87%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BC%D0%B8%D0%BB%D1%8B%D0%B5-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-1.jpg"
              />
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://klike.net/uploads/posts/2019-05/1558767809_1.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum iste totam fugit!
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
