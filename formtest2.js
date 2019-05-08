var formtest2 = {
      "formulario" : {
        "idFormulario" : 1,
        "nombre" : "Formulario Prueba 2",
        "pasos" : [
          {
            "idFormulariosHasPasos" : 1,
            "nombre" : "Paso 1",
            "position" : 1,
            "bloques" : [
              {
                "idPasosHasBloques" : 1,
                "nombre" : "Bloque 1",
                "campos" : [
                  {
                    "idUnidadCampo" : 1,
                    "nombre" : "Nombre",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true",
                      "idUnidadCampo" : 0,
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
                    "idUnidadCampo" : 2,
                    "nombre" : "Apellido",
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
                      "when" : "true",
                      "idUnidadCampo" : 0,
                      "value": null
                    }
                  },
                  {
                    "idUnidadCampo" : 3,
                    "nombre" : "Edad",
                    "row" : 2,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 5,
                      "when" : "true",
                      "idUnidadCampo" : 1,
                      "value": null
                    },
                    "visible" : {
                      "idCampoCondicion" : 6,
                      "when" : "true",
                      "idUnidadCampo" : 0,
                      "value": null
                    }
                  }
                ]
              },
              {
                "idPasosHasBloques" : 2,
                "nombre" : "Bloque 2",
                "campos" : [
                  {
                    "idUnidadCampo" : 1,
                    "nombre" : "Responsable (cuando edad menor a 18)",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "<",
                      "idUnidadCampo" : 3,
                      "value": 18
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "<",
                      "idUnidadCampo" : 3,
                      "value": 18
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }