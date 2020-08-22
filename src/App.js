import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NewPatient from './components/ NewPatient'

class App extends Component {
  state={
      
  }
  render() {
    return (
      <div className="container">
        <Header 
        titulo="Crear paciente para la Veterinaria"/>
        
        <div className="row">
          <div className='col-md 10 mx-auto'>
            <NewPatient />
          </div>
        </div>

      </div>
    );
  }
}

export default App;