import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PictureModal from './modal/PictureModal';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Picture extends React.Component {
  state = {
    modal: false,
  };

  modalToggle = () => {
    this.setState({ modal: !this.state.modal })
  };

  render() {
    const picture = this.props.picture;
    return (
      <Card key={picture.id}>
        <CardBody>
          <CardTitle>
            <h5>{picture.title}</h5>
            <h5 className="age-field">No: {picture.id}</h5>
          </CardTitle>
          <CardSubtitle><h6>{picture.subtitle}</h6></CardSubtitle>
          <CardImg className="card-img" top width="100%" src={picture.image} alt="Card image cap" />
          <CardText>
            {picture.description.length > 104 ?
              picture.description.slice(0, 104) + '...' :
              picture.description}
          </CardText>
          <Link className="btn btn-secondary" to={`/pictures/${picture.id}/edit`}>Edit</Link>{' '}
          <Button className="btn btn-secondary" onClick={this.modalToggle}>View</Button>
        </CardBody>
        <PictureModal picture={picture} onClick={this.modalToggle} status={this.state.modal} />
      </Card>
    );
  }
};

Picture.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  })
}

Picture.defaultProps = {
  picture: {
    id: 0,
    title: 'Anonymous',
    subtitle: 'Anonymous@gmail.com',
    image: 'picsum.photos/500/500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. At quis risus sed vulputate odio. Sed risus ultricies tristique nulla. Purus non enim praesent elementum. Quis eleifend quam adipiscing vitae proin sagittis. Amet massa vitae tortor condimentum lacinia qui',
  }
}

export default Picture;
