import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewPatient from './components/ NewPatient';
import ListaPacientes from './components/ListaCitas';

class App extends Component {
  state={
      citas: []
  }

  //para cargar el componente

  componentDidMount(){
    const citasLS = localStorage.getItem('citas')
    if (citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  //aca se actualiza el componente  
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

crearNuevaCita= datos => {
  //copiar el state actual
  const citas = [...this.state.citas, datos];
  //agregar el nuevo state
  this.setState({
    citas
  })
}

//eliminar citas del state
 eliminarCita = id => {
    //tomar una copia del state
    const citasActuales = [...this.state.citas];

    //filtrar para encontrar el que coincide con el id
    const citas = citasActuales.filter(cita => cita.id !== id)

    // devolver citas sin el que saque anteriormnete con filter
    this.setState({
      citas
    })
 }
  

  render() {
    return (
      <div className="container">
        <Header 
        titulo="Crear paciente para la Veterinaria"/>
        
        <div className="row">
          <div className='col-md 10 mx-auto'>
            <NewPatient 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className='mt-5 col-md-10 mx-auto'>

          <ListaPacientes
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />

          </div>
        </div>

      </div>
    );
  }
}

export default App;