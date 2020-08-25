import React, { Component } from 'react';

class NewPatient extends Component {
  state = { 
    cita : {
      mascota : '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    },
    error: false
  }
  
  
  //cuando el user escribe lo tomo
  handleChange = e => {
    //colocar en el state lo que el usuario escribe
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name] : e.target.value
      }
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    //extraer los valores del state
    const {mascota,propietario,fecha,hora,sintomas} = this.state.cita
    
    //validar que todos los campos esten llenos
    if(mascota === '' || propietario === ''|| fecha === '' || hora === '' || sintomas === ''){
      this.setState({error:true})

      //detener ejecucion
      return;
    }
    
    //agregamos la cita al state de app

  }
  render() {
    return (
      <div className='card mt-5'>
        <div className='card-body'>
          <h2 className='card-title text-center mb-5 text-dark'>
            Completa para crear una nueva cita:
          </h2>
          <form
          onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label className='text-dark col-sm-4 col-lg-2 col-form-label'>Nombre de tu mascota : </label>
              <div className='col-sm-8 col-lg-10'>
                  <input 
                    type="text"
                    className='form-control'
                    placeholder='Ej : China'
                    name='mascota'
                    onChange={this.handleChange}
                    value={this.state.cita.mascota}
                  />
              </div>
            </div> {/* Cierra el form group*/}
            <div className="form-group row">
              <label className='text-dark col-sm-4 col-lg-2 col-form-label'>Tu nombre : </label>
              <div className='col-sm-8 col-lg-10'>
                  <input 
                    type="text"
                    className='form-control'
                    placeholder='Ej : Benjamin Kunkel'
                    name='propietario'
                    onChange={this.handleChange}
                    value={this.state.cita.propietario}
                  />
              </div>
            </div> {/* Cierra el form group*/}
            <div className="form-group row">
              <label className='text-dark col-sm-4 col-lg-2 col-form-label'>Fecha : </label>
              <div className='col-sm-8 col-lg-4'>
                  <input 
                    type="date"
                    className='form-control'
                    name='fecha'
                    onChange={this.handleChange}
                    value={this.state.cita.fecha}
                  />
              </div>
              <label className='text-dark col-sm-4 col-lg-2 col-form-label'>Hora : </label>
              <div className='col-sm-8 col-lg-4'>
                  <input 
                    type="time"
                    className='form-control'
                    name='hora'
                    onChange={this.handleChange}
                    value={this.state.cita.hora}
                  />
              </div>
            </div> {/* Cierra el form group*/}
            <div className="form-group row">
              <label className='text-dark col-sm-4 col-lg-2 col-form-label'>Sintomas : </label>
              <div className='col-sm-8 col-lg-10'>
                <textarea
                  className='form-control'
                  name='sintomas'
                  placeholder='Ej: No se levanta'
                  onChange={this.handleChange}
                    value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div> {/* Cierra el form group*/}
              <input type='submit' className='py-3 mt-2 btn btn-dark btn-block' value='Confirmar Cita' />
          </form> {/*Cierra el form*/}
        </div>
      </div>
    );
  }
}

export default NewPatient;