import React from 'react';
import './FormPicture.css';
import { Container, Row, Col, Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';


const initialFormState = {
  title: '',
  subtitle: '',
  date: '',
  image: '',
  description: '',
  formError: '',
}

class  FormPicture extends React.Component {
  state = {
    form: initialFormState,
    isEditing: false,
  }

  componentDidMount() {
    const pictures = JSON.parse(localStorage.getItem('pictures'));
    const pictureId = this.props.match.params.pictureId;
    const activePicture = pictures.find(picture => `${picture.id}` === `${pictureId}`)
    if (activePicture) {
      this.setState({ form: { ...activePicture, formError: '' }, isEditing: true })
    }
  }

  changeHandler = e => {
    console.log(e.target.name, ' = ', e.target.value);
    if (e.target.name === 'date') {
      console.log(e.target.value)
      console.log(new Date(e.target.value));
    }
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    // const fieldValue = fieldName === 'date' ? new Date(e.target.value) : e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [fieldName]: fieldValue,
        formError: '',
      },
    }));

  }

  handleSubmit = e => {
    e.preventDefault();
    const { form: { title, image } } = this.state;
    if(title && image) {
      if (this.state.isEditing) {
        this.props.updatePicture(this.state.form)
      } else {
        this.props.addNewPicture(this.state.form);
      }
    } else {
      this.setState(prevState =>({
        form: {
          ...prevState.form,
          formError: 'Title and Image fields are required',
        }
      }))
    }
  };
  
  render() {
    const { title } = this.state.form;
    return (
      <Container>
        <Row className="form-container-row">
          <Col className="form-container">
            <Form className="form new-picture-form" onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    className="form-error"
                    type="text"
                    name="formError"
                    id="formError"
                    value={this.state.form.formError}
                    readOnly
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={7}>
                  <Input
                    type="text"
                    name="title"
                    id="title" 
                    placeholder="Picture Title"
                    value={this.state.form.title}
                    onChange={this.changeHandler}
                    valid={title.length > 1}
                    invalid={title !== '' && !Number.isNaN(Number(title))}
                  />
                </Col>
                <Col sm={3}>
                  <Input 
                    type="date"
                    name="date"
                    id="date" 
                    value={this.state.form.date}
                    onChange={this.changeHandler}
                    // valid={this.state.form.date > 0}
                    // invalid={this.state.form.date < 0}
                    />
                    <FormFeedback>Invalid date</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="text"
                    name="subtitle"
                    id="subtitle" 
                    placeholder="Picture Subtitle"
                    value={this.state.form.subtitle}
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="text"
                    name="image"
                    id="image" 
                    placeholder="Image URL"
                    value={this.state.form.image}
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="textarea"
                    name="description"
                    id="description" 
                    placeholder="Give your picture a description"
                    value={this.state.form.description}
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 10}}>
                  <Button className="btn-add-picture">
                    {this.state.isEditing ? 'Update Picture' : 'Save Picture'}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormPicture;
