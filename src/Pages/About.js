import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    width="100%"
                    height="100%"
                    src="https://cs9.pikabu.ru/post_img/big/2017/11/09/6/1510215450126434120.jpg"
                    alt="Design"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error tempore facere? Et, repellat quibusdam. Est
                    nesciunt esse itaque, eligendi nisi iusto aliquam fugit
                    dolor magni, nulla error, voluptas quidem.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    width="100%"
                    height="100%"
                    src="https://lh3.googleusercontent.com/proxy/9ui4xyyb6f9S07FhB5GPV4CczzNj3xworIxRlrPmK0NpLL0-4bp9xLHskA75nwXItkV8uvgjGm-sSy6fHrvtKg"
                    alt="Team"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error tempore facere? Et, repellat quibusdam. Est
                    nesciunt esse itaque, eligendi nisi iusto aliquam fugit
                    dolor magni, nulla error, voluptas quidem.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    width="100%"
                    height="100%"
                    src="https://miro.medium.com/max/10912/1*O3fDiy_86uvPcoAfMIbgNQ.jpeg"
                    alt="Programming"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error tempore facere? Et, repellat quibusdam. Est
                    nesciunt esse itaque, eligendi nisi iusto aliquam fugit
                    dolor magni, nulla error, voluptas quidem.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    width="100%"
                    height="100%"
                    src="https://rubygarage.s3.amazonaws.com/uploads/article_image/file/812/js-frameworks.jpg"
                    alt="frameworks"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error tempore facere? Et, repellat quibusdam. Est
                    nesciunt esse itaque, eligendi nisi iusto aliquam fugit
                    dolor magni, nulla error, voluptas quidem.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    width="100%"
                    height="100%"
                    src="https://nisnom.com/wp-content/uploads/2018/04/7-luchshih-javascript-frejmvorkov-i-bibliotek-dlya-izucheniya-v-2018.jpg"
                    alt="libraries"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim error tempore facere? Et, repellat quibusdam. Est
                    nesciunt esse itaque, eligendi nisi iusto aliquam fugit
                    dolor magni, nulla error, voluptas quidem.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
