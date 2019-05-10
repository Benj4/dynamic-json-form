class Campo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value : ''}
  }

  componentDidMount() {
    console.log('this.props.campo', this.props.campo);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    const campo = this.props.campo;
    campo._value = event.target.value;
    //console.log('handleChange', campo.nombre, campo._value);
    
    this.props.onChangeCampo(campo);
  }

  render() {
    const {campo, debug} = this.props;
    const style = {};

    if( campo.isVisible === false ){
      style.display = 'none';
    }

    const isReady = campo.isReady !== false;
    console.log( campo.nombre, 'isRequired', campo.isRequired, 'isVisible', campo.isVisible, 'isReady', isReady);


    return (
      <React.Fragment>
        { ( campo.isVisible === false && debug) ? <i>["{campo.nombre}" visible when field <b>{campo.visible.idUnidadCampo} {campo.visible.when} {campo.visible.value || ''}</b> ]</i> : null }
        <div className="form-group" style={style}>
          <label>{campo.nombre} {debug ? <i>[ ID: <b>{campo.idUnidadCampo}</b> ]</i> : null} </label>
          { (()=>{ 

            switch (campo.type) {
              case 'select':
                return <CampoSelect value={this.state.value} options={campo.options} onChange={this.handleChange} isReady={isReady} />
              case 'radios':
                return <CampoRadios value={this.state.value} options={campo.options} onChange={this.handleChange} nombre={campo.nombre} isReady={isReady} />
              case 'number':
                return <CampoNumber value={this.state.value} onChange={this.handleChange} isReady={isReady} />
              case 'textarea':
                return <textarea className={"form-control" + (!isReady ? ' is-invalid':'') } value={this.state.value} onChange={this.handleChange} />
              case 'file':
                return <input type="file" className={"form-control" + (!isReady ? ' is-invalid':'') } value={this.state.value} onChange={this.handleChange} />
              case 'text':
                return <input className={"form-control" + (!isReady ? ' is-invalid':'') } type="text" value={this.state.value} onChange={this.handleChange} />
              case 'lavel':
                return <CampoLavel value={campo.value} />
              default:
                return <input className={"form-control" + (!isReady ? ' is-invalid':'') } type="text" value={this.state.value} onChange={this.handleChange} />
            }

            })() }
          {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
          <div className="invalid-feedback">
            { campo.invalidFeedback || "Campo requerido"}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}