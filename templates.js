
var formulario = { 
  "idFormulario" : 1,
  "nombre" : "Formulario Prueba 3",
  "pasos" : []
}
var paso = {
  "idFormulariosHasPasos" : 1,
  "nombre" : "Paso 1",
  "position" : 1,
  "bloques" : []
}
var bloque = {
  "idPasosHasBloques" : 1,
  "nombre" : "Bloque 1",
  "position" : 1,
  "campos" : []
}
var campo = {
  "idUnidadCampo" : 1,
  "nombre" : "Color",
  "type" : "select",
  "row" : 1,
  "column" : 1,
  "options" : [
    { value : "-1", label : 'Select color'},
    { value : "1", label : 'Red'},
    { value : "2", label : 'Blue'},
    { value : "3", label : 'Green'},
    { value : "4", label : 'White'}
  ],
  "required" : {
    "idCampoCondicion" : 1,
    "when" : "true",
    "idUnidadCampo" : 1,
    "value": null
  },
  "invalidFeedback": "Required field",
  "visible" : {
    "idCampoCondicion" : 2,
    "when" : "true",
    "idUnidadCampo" : 1,
    "value": null
  }
}
