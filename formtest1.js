var formtest1 = {
      "formulario" : { 
        "idFormulario" : 1,
        "nombre" : "Basic Example",
        "pasos" : [
          {
            "idFormulariosHasPasos" : 1,
            "nombre" : "Paso 1",
            "position" : 1,
            "bloques" : [
              {
                "idPasosHasBloques" : 1,
                "nombre" : "",
                "campos" : [
                  {
                    "idUnidadCampo" : 1,
                    "nombre" : "Nombre",
                    "type" : "text",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true",
                      "idUnidadCampo" : 1,
                      "value": null
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true",
                      "idUnidadCampo" : 0,
                      "value": null
                    }
                  },
                  {
                    "idUnidadCampo" : 4,
                    "nombre" : "",
                    "type" : "lavel",
                    "value" : "Edad aparece al ingresar un nombre, y si edad es menor a 18 se activa el paso 2",
                    "row" : 3,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 7,
                      "when" : "false","idUnidadCampo" : 4
                    },
                    "visible" : {
                      "idCampoCondicion" : 8,
                      "when" : "true","idUnidadCampo" : 4
                    }
                  },
                  {
                    "idUnidadCampo" : 2,
                    "nombre" : "Edad",
                    "type" : "number",
                    "row" : 2,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 3,
                      "when" : "notnull",
                      "idUnidadCampo" : 1,
                      "value": null
                    },
                    "visible" : {
                      "idCampoCondicion" : 4,
                      "when" : "notnull",
                      "idUnidadCampo" : 1,
                      "value": null
                    }
                  }
                ]
              }
            ]
          },
          {
            "idFormulariosHasPasos" : 2,
            "nombre" : "Descripcion",
            "position" : 2,
            "visible" : {
              "idCampoCondicion" : 9,
              // "when" : "in",
              "when" : "<",
              "idUnidadCampo" : 2,
              "value": "18"
              // "value": "10,20,30"
            },
            "bloques" : [
              {
                "idPasosHasBloques" : 2,
                "nombre" : "Bloque paso 2",
                "campos" : [
                  {
                    "idUnidadCampo" : 3,
                    "nombre" : "Descripcion",
                    "type" : "textarea",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 5,
                      "when" : "true",
                      "idUnidadCampo" : 0,
                      "value": null
                    },
                    "invalidFeedback": "Required field",
                    "visible" : {
                      "idCampoCondicion" : 6,
                      "when" : "true",
                      "idUnidadCampo" : 0,
                      "value": null
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }