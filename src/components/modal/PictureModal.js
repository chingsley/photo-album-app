import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './modalStyle.sass';

// const CharacterImg = styled.div`
//   display: inline-block;
//   width: 900px;
//   height: 275px;
//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)
//   ), url(${props => props.avenger.img});
//   background-size: auto;
//   background-repeat: no-repeat;
//   background-position: center;
//   color: white;
//   margin-bottom: 2rem;
// `;
const Pic = styled.div`
  left: 0;
  width: 50%;
  Height: 100%;
  transform: translate(-50px, -20px) rotate(30deg);
  transform-origin: left top;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform .45s ease-in-out;
`;

class Modal2 extends React.Component {


  render() {
    return (
        <div className="modal" data-status={this.props.status}>
          <Pic className="modal-left" image={this.props.picture.image}>
            <span className="price-tag">{this.props.picture.id}</span>
          </Pic>
          <div className="modal-right">
            <h2>{this.props.picture.title}</h2>
            <p>{(new Date(this.props.picture.date)).toString()}</p>
            <p>{this.props.picture.description}</p>
            <button onClick={this.props.onClick} className="close">
              <span className="fa fa-close"></span>
            </button>
          </div>
        </div>
    );
  }
}

Modal2.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  })
}

Modal2.defaultProps = {
  picture: {
    id: 0,
    name: 'Anonymous',
    age: 53,
    email: 'Anonymous@gmail.com',
    image: 'picsum.photos/500/500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. At quis risus sed vulputate odio. Sed risus ultricies tristique nulla. Purus non enim praesent elementum. Quis eleifend quam adipiscing vitae proin sagittis. Amet massa vitae tortor condimentum lacinia qui',
  }
}

export default Modal2;
