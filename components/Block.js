class Bloque extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    console.log( 'this.props.bloque', this.props.bloque );
  }

  render() {
    const campos = this.props.bloque.campos.sort( (a,b) => (parseInt(a.row) - parseInt(b.row)) );
    
    var rows = [];
    campos.forEach( c =>{
      var row = parseInt(c.row);
      if( Array.isArray(rows[row]) ){
        rows[row].push(c);
      }else{
        rows[row] = [ c ];
      }
    })

    return (
      <div>
        <h3> {this.props.bloque.nombre}</h3>
        <div className="container">
          {rows.map( (row,i) => 
            <div className="row" key={i}> 
              {row.map( campo =>
                <div className="col" key={campo.idUnidadCampo}>
                  <Campo key={campo.idUnidadCampo} campo={campo} onChangeCampo={this.props.onChangeCampo} debug={this.props.debug}/>
                </div>
              )} 
            </div>
          )}
          { /* campos.map( campo =>  <Campo key={campo.idUnidadCampo} campo={campo} onChangeCampo={this.props.onChangeCampo} /> ) */ }
        </div>
      </div>
    )
  }
}