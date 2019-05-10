var formtest3 = {
      "formulario" : { 
        "idFormulario" : 3,
        "nombre" : "Big Form",
        "pasos" : [
          {
            "idFormulariosHasPasos" : 1,
            "nombre" : "Rows and Columns",
            "position" : 1,
            "bloques" : [
              {
                "idPasosHasBloques" : 1,
                "nombre" : "1. Colors",
                "campos" : [
                  {
                    "idUnidadCampo" : 1,
                    "nombre" : "Color",
                    "type" : "radios",
                    "row" : 1,
                    "column" : 1,
                    "options" : [
                      { value : "1", label : 'Red'},
                      { value : "2", label : 'Blue'},
                      { value : "3", label : 'Green'},
                      { value : "4", label : 'Oranje'},
                      { value : "5", label : 'White'}
                    ],
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true", "idUnidadCampo" : 1,
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true", "idUnidadCampo" : 1,
                    }
                  }
                 ]
              },
              
              {
                "idPasosHasBloques" : 2,
                "nombre" : "Selects",
                "campos" : [
                  {
                    "idUnidadCampo" : 2,
                    "nombre" : "Select 1",
                    "type" : "select",
                    "row" : 1,
                    "column" : 1,
                    "options" : [
                      { value : "-1", label : 'Pick One'},
                      { value : "2", label : 'option 1'},
                      { value : "3", label : 'option 2'},
                      { value : "4", label : 'option 3'},
                      { value : "5", label : 'option 4'}
                    ],
                    "required" : {
                      "idCampoCondicion" : 3,
                      "when" : "true", "idUnidadCampo" : 2,
                    },
                    "visible" : {
                      "idCampoCondicion" : 4,
                      "when" : "true", "idUnidadCampo" : 2,
                    }
                  },
                  {
                    "idUnidadCampo" : 3,
                    "nombre" : "Select 2 (show select 4)",
                    "type" : "select",
                    "row" : 1,
                    "column" : 1,
                    "options" : [
                      { value : "-1", label : 'Pick other One'},
                      { value : "2", label : 'option 5'},
                      { value : "3", label : 'option 6'},
                      { value : "4", label : 'option 7'},
                      { value : "5", label : 'option 8'}
                    ],
                    "required" : {
                      "idCampoCondicion" : 5,
                      "when" : "true", "idUnidadCampo" : 3,
                    },
                    "visible" : {
                      "idCampoCondicion" : 6,
                      "when" : "true", "idUnidadCampo" : 3,
                    }
                  },
                  
                  {
                    "idUnidadCampo" : 4,
                    "nombre" : "Select 3",
                    "type" : "select",
                    "row" : 2,
                    "column" : 1,
                    "options" : [
                      { value : "-1", label : 'More options'},
                      { value : "2", label : 'option 9'},
                      { value : "3", label : 'option 10'},
                      { value : "4", label : 'option 11'},
                      { value : "5", label : 'option 12'}
                    ],
                    "required" : {
                      "idCampoCondicion" : 7,
                      "when" : "true", "idUnidadCampo" : 4,
                    },
                    "visible" : {
                      "idCampoCondicion" : 8,
                      "when" : "true", "idUnidadCampo" : 4,
                    }
                  },
                  {
                    "idUnidadCampo" : 5,
                    "nombre" : "Numeric Field (required if select 3)",
                    "type" : "number",
                    "row" : 2,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 9,
                      "when" : "notnull",
                      "idUnidadCampo" : 4,
                    },
                    "visible" : {
                      "idCampoCondicion" : 10,
                      "when" : "true", "idUnidadCampo" : 5,
                    }
                  },
                  
                  {
                    "idUnidadCampo" : 6,
                    "nombre" : "Select 4",
                    "type" : "select",
                    "row" : 3,
                    "column" : 1,
                    "options" : [
                      { value : "-1", label : 'hi!'},
                      { value : "2", label : ' 1 '},
                      { value : "3", label : ' 2 '},
                      { value : "4", label : ' 3 '},
                      { value : "5", label : ' 4 '}
                    ],
                    "required" : {
                      "idCampoCondicion" : 11,
                      "when" : "notnull",
                      "idUnidadCampo" : 3,
                    },
                    "visible" : {
                      "idCampoCondicion" : 12,
                      "when" : "notnull",
                      "idUnidadCampo" : 3,
                    }
                  },
                  {
                    "idUnidadCampo" : 7,
                    "nombre" : "Number (Optional)",
                    "type" : "number",
                    "row" : 3,
                    "column" : 1,
                    "required" : {
                      "__idCampoCondicion" : 13,
                      "__when" : "notnull",
                      "__idUnidadCampo" : 4,
                    },
                    "visible" : {
                      "idCampoCondicion" : 14,
                      "when" : "notnull",
                      "idUnidadCampo" : 3,
                    }
                  }

                 ]
              },
              
              {
                "idPasosHasBloques" : 3,
                "nombre" : "More Text fields",
                "campos" : [
                  {
                    "idUnidadCampo" : 8,
                    "nombre" : "Text 1",
                    "type" : "date",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 15,
                      "when" : "true", "idUnidadCampo" : 8,
                    },
                    "invalidFeedback": "Seleccione una fecha",
                    "visible" : {
                      "idCampoCondicion" : 16,
                      "when" : "true", "idUnidadCampo" : 8,
                    }
                  },
                  {
                    "idUnidadCampo" : 9,
                    "nombre" : "Text 2",
                    "type" : "hora",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 17,
                      "when" : "true", "idUnidadCampo" : 9,
                    },
                    "visible" : {
                      "idCampoCondicion" : 18,
                      "when" : "true", "idUnidadCampo" : 9,
                    }
                  },
                  {
                    "idUnidadCampo" : 10,
                    "nombre" : "Text 3",
                    "type" : "text",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 19,
                      "when" : "true", "idUnidadCampo" : 10,
                    },
                    "visible" : {
                      "idCampoCondicion" : 20,
                      "when" : "true", "idUnidadCampo" : 10,
                    }
                  }
                ]
              },
              
              {
                "idPasosHasBloques" : 4,
                "nombre" : "Textarea",
                "campos" : [
                  {
                    "idUnidadCampo" : 11,
                    "nombre" : "Description",
                    "type" : "textarea",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true", "idUnidadCampo" : 11,
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true", "idUnidadCampo" : 11,
                    }
                  }
                ]
              },
             
              {
                "idPasosHasBloques" : 5,
                "nombre" : "large alone field",
                "campos" : [
                  {
                    "idUnidadCampo" : 12,
                    "nombre" : "",
                    "type" : "text",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true", "idUnidadCampo" : 12,
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true", "idUnidadCampo" : 12,
                    }
                  }
                ]
              },
              
              {
                "idPasosHasBloques" : 6,
                "nombre" : "File",
                "campos" : [
                  {
                    "idUnidadCampo" : 13,
                    "nombre" : "",
                    "type" : "file",
                    "row" : 1,
                    "column" : 1,
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true", "idUnidadCampo" : 13,
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true", "idUnidadCampo" : 13,
                    }
                  }
                ]
              },
              
              {
                "idPasosHasBloques" : 7,
                "nombre" : "Levels 3, 4 and 5 activate step 2",
                "campos" : [
                  {
                    "idUnidadCampo" : 14,
                    "nombre" : "level",
                    "type" : "radios",
                    "row" : 1,
                    "column" : 1,
                    "options" : [
                      { value : "1", label : 'Level 1'},
                      { value : "2", label : 'Level 2'},
                      { value : "3", label : 'Level 3'},
                      { value : "4", label : 'Level 4'},
                      { value : "5", label : 'Level 5'}
                    ],
                    "required" : {
                      "idCampoCondicion" : 1,
                      "when" : "true", "idUnidadCampo" : 14,
                    },
                    "visible" : {
                      "idCampoCondicion" : 2,
                      "when" : "true", "idUnidadCampo" : 14,
                    }
                  }
                ]
              }
            ]
          },
          {
            "idFormulariosHasPasos" : 2,
            "nombre" : "",
            "position" : 2,
            "visible" : {
              "idCampoCondicion" : 9,
              "when" : "in",
              "idUnidadCampo" : 14,
              "value": "3,4,5"
            },
            "bloques" : []
          }
        ]
      }
    }