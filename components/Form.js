class Formulario extends React.Component {
  constructor(props) {
    super(props)

    var formulario = props.formulario;
    //calcular isVisible y isRequired antes de la primera renderizacion del formulario
    formulario.pasos.forEach( paso => {
      paso.bloques.forEach( bloque => {
        bloque.campos.forEach( campoVerificar => {
          var validationVisible = this.validarCondicional(formulario, campoVerificar, 'visible' );
          var validationRequired = this.validarCondicional(validationVisible.formulario, campoVerificar, 'required' );
          formulario = validationRequired.formulario
        } )
      } )
    } )

    this.state = {
      formulario : formulario,
      position : 1,
      debug : !!this.props.debug
    }

  }

  onChangeCampo = (campoModificado ) => {
    //console.log('form change campo', campo);

    const formulario = this.state.formulario;

    var validationVisible = this.validarCondicional(formulario, campoModificado, 'visible' );

    var validationRequired = this.validarCondicional(validationVisible.formulario, campoModificado, 'required' );
    
    if( validationVisible.updated || validationRequired.updated){
      this.setState( { formulario : validationRequired.formulario })
    }


  }

  //retorna .updated true cuando hay cambios y .updated false cuando nada cambia
  validarCondicional(formulario, campoModificado, tipoCondicional){ //recive el campo modificado, y el tipo de condicional
    
    const tipos = {
        required : { keyCampo : 'required', keyVerificado : 'isRequired' },
        visible : { keyCampo : 'visible', keyVerificado : 'isVisible' }
    }

    //buscar si se encuentra en los requiere de los otros campos
    var updated = false;
    //const formulario = this.state.formulario;
    try {
      formulario.pasos.forEach( paso => {

        //VISIVILIDAD DEL PASO
        if( tipoCondicional == 'visible' && paso.visible ){
          if( paso.visible.idUnidadCampo === campoModificado.idUnidadCampo ){
            
            //TODO: configurar keyCondicional y keyVerificado igual que los campos
            let prev = paso.isVisible;
            paso.isVisible = evalCondicional(paso.visible, campoModificado);

            if( prev != paso.isVisible ){
              updated = true;
            }

          }
        }

        paso.bloques.forEach( bloque => {
          bloque.campos.forEach( campoVerificar => {
            
            //VISIBILIDAD DE LOS CAMPOS
            var keyCondicional = tipos[tipoCondicional].keyCampo; // required o visible
            var keyVerificado = tipos[tipoCondicional].keyVerificado; // isRequired o isVisible

            var prev = campoVerificar[keyVerificado];
            if( campoVerificar[keyCondicional].idUnidadCampo === campoModificado.idUnidadCampo ){
              
              campoVerificar[keyVerificado] = evalCondicional(campoVerificar[keyCondicional], campoModificado)

            }
            
            //QUE SEA VALIDO CUANDO ES REQUERIDO
            var prevIsReady = campoVerificar.isReady;
            campoVerificar.isReady = true;
            if( campoVerificar.isVisible !== false && campoVerificar.isRequired ){ //visible, obligatorio y validado como faltante

              //cuando ya se valido que faltaba o el elemento no se a tocado, y el valor es invalido o no se ha seleccionado un select
              if( (!prevIsReady || typeof campoVerificar._value != 'undefined') && !campoVerificar._value || campoVerificar._value == "-1" ){ // -1 cuando los select no se han seleccionado
                
                campoVerificar.isReady = false;
                
              }
            }

            //optimizacion para no renderizar todo el formulario cuando no hay cambios
            if( prev !== campoVerificar[keyVerificado] || prevIsReady !== campoVerificar.isReady){
              console.log(campoVerificar.nombre, '-'+keyCondicional+' when-', campoModificado.nombre, campoVerificar[keyCondicional].when, ' ~ ', campoVerificar[keyCondicional].value);
              updated = true;
            }

          } )
        } )
      } )
    } catch (error) { console.log(error); }
    

    return { updated, formulario };

  }

  componentDidMount() {
    console.log( 'this.state.formulario', this.state.formulario );
  }

  validateRequired = () => {
    const formulario = this.props.formulario;

    //VALIDAR QUE LOS REQUIRE ESTEN INGRESADOS
    var ready = true;
    formulario.pasos.forEach( paso => {
      paso.bloques.forEach( bloque => {
        bloque.campos.forEach( campoVerificar => {
          campoVerificar.isReady = true;
          if( campoVerificar.isVisible !== false && campoVerificar.isRequired ){ //visible y obligatorio
            if( !campoVerificar._value || campoVerificar._value == "-1" ){ // -1 cuando los select no se han seleccionado
              ready = false;
              campoVerificar.isReady = false;
            }
          }
          //console.log( 'required', campoVerificar.nombre, campoVerificar.isRequired, campoVerificar._value, !campoVerificar._value || campoVerificar._value == "-1" );
        } )
      } )
    } )

    return { ready, formulario }

  }

  goPrev = () => {
    this.setState( { position : this.state.position - 1 } ) ;
  }
  goNext = () => {

    const { ready, formulario } = this.validateRequired();

    this.setState( { position : ready ? this.state.position + 1 : this.state.position, formulario : formulario } ) ;

  }
  goFinish = () => {

    const { ready, formulario } = this.validateRequired();

    if( ready ){
      alert('fin');  
    }else{
      this.setState( { formulario : formulario } ) ;
    }

  }


  render() {
    const pasos = this.state.formulario.pasos;
    const position = this.state.position;

    const paso = pasos.find( p => p.position === position );

    var pasoNext = null;
    var pasoPrev = null;
    var count = 0;
    while( pasoNext === null ){
      count++;
      pasoNext = pasos.find( p => p.position === position + count );
      if( !!pasoNext && pasoNext.isVisible === false && count < 500) {
        pasoNext = null;
      }
    }
    count = 0;
    while( pasoPrev === null ){
      count--;
      pasoPrev = pasos.find( p => p.position === position + count );
      if( !!pasoPrev && pasoPrev.isVisible === false && count > -500) {
        pasoPrev = null;
      }
    }

    return (
      <div>
        <h1> {this.state.formulario.nombre}</h1>
        <div className="container"> 
          { /*pasos.map( paso =>  <Paso key={paso.idFormulariosHasPasos} paso={paso} onChangeCampo={this.onChangeCampo} /> )*/}
          { <Paso key={paso.idFormulariosHasPasos} paso={paso} onChangeCampo={this.onChangeCampo} debug={this.state.debug} /> }
        </div>

        <div className="buttons" style={{margin: 20, textAlign: 'right'}}>
          {
            !!pasoPrev ?
            <button id="prev" className="btn btn-primary" onClick={this.goPrev} > {'<'} <span className="nombrePaso">{ pasoPrev.nombre || "Prev" }</span></button>
            :null
          }
          
          { !!pasoNext ? 
            <button id="next" className="btn btn-primary" onClick={this.goNext} > <span className="nombrePaso">{ pasoNext.nombre || "Next" }</span> {'>'} </button>
            :
            <button id="finish" className="btn btn-success" onClick={this.goFinish} > Finish </button>
          }
        </div>

      </div>
    )
  }
}