class Paso extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    console.log( 'this.props.paso', this.props.paso );
  }

  render() {
    const bloques = this.props.paso.bloques;
    const style = { display: 'block'};
    
    if( this.props.paso.isVisible === false ){
      style.display = 'none';
    }

    return (
      <div className="paso" style={style}>
        <h2> {this.props.paso.nombre}</h2>
        <div className="container"> 
          {bloques.map( bloque =>  <Bloque key={bloque.idPasosHasBloques} bloque={bloque} onChangeCampo={this.props.onChangeCampo} debug={this.props.debug} /> )}
        </div>
      </div>
    )
  }
}