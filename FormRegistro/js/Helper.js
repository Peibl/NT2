$(document).ready(function() {
  // Para poblar combos sin logica de dependencia, agregar llamado a la funcion aqui. Explicacion en funcion
  populateCbo('cboNac');
  populateCbo('cboGen');
  populateCbo('cboDocType');
});

// Funciona para validar los formularios al momento de dar el OK final al formulario.
// En este caso, valida todos los campos que cuenten con la clase form-control, es por esto
// que de no ser necesario que se valide, o se precise realizar una validacion aparte, no hay
// que asignarle esta clase.
function validateForm(){

  var camposVacios = "";

  try 
  {
        $(".form-control").each(function(){
          if($("#" + this.id).val() == "") // Valida tanto combobox como input
          {
            if($("#" + this.id).is(":visible"))
            {
              // es necesario, que al momento de crear un campo a completar, se le complete el label for='XXXX' con el nombre del combo
              camposVacios += "\n" + $('label[for="' + this.id + '"]')[0].innerText; 
            }
          }  
        });

      if(camposVacios != null)
      {
        alert("Completar los siguientes campos: " + camposVacios);
        return null;
      }

      if($("#btnSubmitFinal").is(":visible"))
      {
        if (!$("#"). is(":checked"))
        {
            alert("Debe aceptar los terminos y condiciones.");
            return null;
        }
      }

  } catch (e) {
    console.log(e);
  }
}

// Con esta funcion se completan los combos de manera programatica. Para evitar utilizar JSON
// a fin de hacer esto mas sencillo, seria necesario crea un array list dentro del switch como
// se puede observar. (Se puede mejorar)
// Funcionamiento: Debe invocarse la funcion con el nombre del combo a completar, y esta selecc-
// dentro del switch, como incorporar los campos al combo seleccionado.
// Se utilizo esta logica, para tener en cuenta los combos que se cargan por dependencia, como por
// ejemplo, Pais > Localidad, etc. En cuyo caso, habria que generar un evento dentro del .Ready ^
// y en cambio del combo, triggerear la funcion.

function populateCbo(cboName){

  var arrayList;

  switch(cboName)
  {
    case 'cboNac':
      arrayList = [
                    {"Id": 1, "Name": "Argentino/a"}, 
                    {"Id": 2, "Name": "Boliviano/a"}
                  ];
      break;
    case 'cboGen':
      arrayList = [
                    {"Id": 1, "Name": "Masculino"}, 
                    {"Id": 2, "Name": "Femenino"}
                  ];
    break; 
    case 'cboDocType':
      arrayList = [
                    {"Id": 1, "Name": "DNI"}, 
                    {"Id": 2, "Name": "Libreta Civica"},
                    {"Id": 3, "Name": "Cedula Extranjera"}, 
                    {"Id": 4, "Name": "Libreta de Enrolamiento"}	
                  ];
      break;
  }   

    for (var i = 0; i < arrayList.length; i++) {
        $('#' + cboName).append('<option value="' + arrayList[i].Id + '">' + arrayList[i].Name + '</option>');
    }

}