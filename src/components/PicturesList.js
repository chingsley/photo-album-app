import React from 'react';
import Picture from './Picture';
import {
  Container, Row, Col
} from 'reactstrap';


class PicturesList extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col className="card-container">
            {this.props.pictures.map(picture => (
                <Picture key={picture.id} picture={picture} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PicturesList;
