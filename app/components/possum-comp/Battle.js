import React from "react";
import { Link } from 'react-router-dom';
import Button from './awesome-possum/lib/Button'
import HelpText from './awesome-possum/lib/HelpText'
import Row from './awesome-possum/lib/Row'
import Col from './awesome-possum/lib/Col'
import Card from './awesome-possum/lib/Card'
import Lipsum from './awesome-possum/lib/Lipsum'

class Battle extends React.Component {


  render() {
    return (
        <div>
        <Row>
          <Col>
            <h3>Card Sizes</h3>
          </Col>
          <Col large={4}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Default Card</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col large={4}>
            <Card small>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Small Card</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h3>Card Types</h3>
          </Col>
          <Col large={4}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Default Card</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col large={4}>
            <Card primary>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Primary Card</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col large={4}>
            <Card secondary>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Secondary Card</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h3>Card Layouts</h3>
          </Col>
          <Col large={6}>
            <Card>
              <Card.Header>
                <Row className="rev-Row--flex rev-Row--middle">
                  <Col>
                    <h4>Header</h4>
                  </Col>
                  <Col shrink>
                    <Button small>Button</Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <img src="https://picsum.photos/800/400" className="ResponsiveImage" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col large={6}>
            <Card>
              <Card.Body>
                <img src="https://picsum.photos/800/400" className="ResponsiveImage" />
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <HelpText>Here's an image</HelpText>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col large={6}>
            <Card>
              <Card.Header>
                <Row>
                  <Col>
                    <h3>Header</h3>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <p><Lipsum /></p>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <h6>Footer</h6>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>

          <Col large={6}>
            <Card small>
              <Card.Header>
                <Row>
                  <Col>
                    <h3>Header</h3>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <p><Lipsum /></p>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <h6>Footer</h6>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>

          <Col large={6}>
            <Card>
              <Card.Header>
                <Row className="rev-Row--flex rev-Row--middle">
                  <Col>
                    <h4>Header</h4>
                  </Col>
                  <Col shrink>
                    <Button small>Button</Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <img src="https://picsum.photos/800/400" className="ResponsiveImage" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col large={6}>
            <Card>
              <Card.Body>
                <img src="https://picsum.photos/800/400" className="ResponsiveImage" />
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <HelpText>Here's an image</HelpText>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        </div>
      )
  }
}



module.exports = Battle;

