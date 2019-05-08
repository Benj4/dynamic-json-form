
function evalCondicional(condicion, campoModificado){

    let whens = ['<', '>', '=', '<>', 'in', 'out', 'true', 'false', 'null', 'notnull'];

    var res = null; 

    switch (condicion.when) {
      case 'notnull':
        
        //TODO: -1 se usa para los select, buscar forma decente de validar
        if( campoModificado._value && campoModificado._value.trim() && campoModificado._value != '-1' ){
          res = true;
        }else{
          res = false;
        }
        
      break;
      case 'true':
       
        res = true;

      break;

      case '<':
        
        if( campoModificado._value && parseFloat(campoModificado._value) < condicion.value ){
          res = true;
        }else{
          res = false;
        }

      break;
      case 'in':
        let inarr = condicion.value.split(',');

        res = inarr.indexOf( campoModificado._value ) !== -1

      break;
      default:
      break;
    }

    return res;

}