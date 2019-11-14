import React,{ Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar2';
import PicturesList from './components/PicturesList';
import FormPicture from './components/FormPicture';
import Home from './components/Home2';
import './App.css';

class App extends Component {
 constructor() {
   super();
   this.state = {
     pictures: [],
   };
 }

 componentDidMount() {
   axios.get("http://localhost:5000/pictures")
    .then(res => {
      localStorage.setItem('pictures', JSON.stringify(res.data))
      this.setState({pictures: res.data})
    })
    .catch(err => console.log(err));
 }


 addNewPicture = form => {
   axios
     .post("http://localhost:5000/pictures", form)
     .then(res => {
       localStorage.setItem('pictures', JSON.stringify(res.data))
       this.setState({ pictures: res.data });
       this.props.history.push('/pictures');
     })
     .catch(err => console.log(err));
 };

 updatePicture = picture => {
   axios
    .put(`http://localhost:5000/pictures/${picture.id}`, picture)
    .then(res => {
      localStorage.setItem('pictures', JSON.stringify(res.data))
      this.setState({ pictures: res.data })
      this.props.history.push('/pictures');
    })
    .catch(err => console.log(err));
 };

 render() {
   return (
     <div className="App">
       <NavBar />
       <Route exact path="/" component={Home} />
       <Route exact path="/pictures" render={props => (
         <PicturesList
          {...props}
          pictures={this.state.pictures}
         />
       )}/>
       <Route path="/pictures/new" render={props => (
         <FormPicture
           {...props}
           addNewPicture={this.addNewPicture}
         />
       )}/>
       <Route path="/pictures/:pictureId/edit" render={props => (
         <FormPicture
           {...props}
           updatePicture={this.updatePicture}
         />
       )}/>
     </div>
   );
 }
}

const AppWithRouter = withRouter(App);


export default AppWithRouter;
