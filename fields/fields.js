  
    /**
     * 
     * 
     * CAMPOS PROGRAMADOS
     * 
     * 
     * */

    class CampoSelect extends React.Component {
      constructor(props) {
        super(props)
        this.state = {}
      }
      render(){

        const { options = [], value, onChange, isReady } = this.props;
 
        return (
          <select className={"form-control selectpicker" + (!isReady ? ' is-invalid':'') } data-style="btn-select-drop" value={value} onChange={onChange} data-width="100%" >
            { options.map( o => <option key={o.value} value={o.value} > {o.label} </option> ) }
          </select>
        )
      }

    }

    class CampoNumber extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }
      render(){
        const { value, onChange, isReady } = this.props;
        return (
          <input type="number" className={"form-control" + (!isReady ? ' is-invalid':'') } value={value} onChange={onChange} />
        )
      }

    }

    class CampoRadios extends React.Component {
      constructor(props) {
        super(props)
        this.state = {}
      }
      render(){

        const { options = [], value, onChange, nombre, isReady } = this.props;
        const nameId = nombre.replace(/[^a-zA-Z]+/g,''); //cuidado cuando empiece con numero

        return (
          <div className={"radiosContainer form-control" + (!isReady ? ' is-invalid':'') } >
            { options.map( o => {
              return (
                <div className="custom-control custom-radio custom-control-inline" key={nameId+o.value}>
                  <input 
                    type="radio"
                    className={"custom-control-input"}
                    id={nameId+o.value} 
                    name={nameId} 
                    value={o.value} 
                    onChange={onChange}
                    selected={ o.value === value } 
                  />
                  <label className="custom-control-label" htmlFor={nameId+o.value}> {o.label} </label>
                </div>
              )
            } ) }
          </div>
        )
      }

    }