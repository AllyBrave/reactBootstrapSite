import React, { Component } from "react";
import { Container, Media, Col, Row, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://img-a.udemycdn.com/course/240x135/2417542_6387.jpg"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur vero enim non impedit, aperiam eligendi ratione
                  nobis laudantium dolorem neque suscipit dolor delectus, ab
                  praesentium cumque tenetur! Enim, ratione delectus.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://img-a.udemycdn.com/course/240x135/2417542_6387.jpg"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur vero enim non impedit, aperiam eligendi ratione
                  nobis laudantium dolorem neque suscipit dolor delectus, ab
                  praesentium cumque tenetur! Enim, ratione delectus.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://img-a.udemycdn.com/course/240x135/2417542_6387.jpg"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur vero enim non impedit, aperiam eligendi ratione
                  nobis laudantium dolorem neque suscipit dolor delectus, ab
                  praesentium cumque tenetur! Enim, ratione delectus.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://img-a.udemycdn.com/course/240x135/2417542_6387.jpg"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur vero enim non impedit, aperiam eligendi ratione
                  nobis laudantium dolorem neque suscipit dolor delectus, ab
                  praesentium cumque tenetur! Enim, ratione delectus.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  officiis quidem culpa?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
