$(document).ready(function() {
  // Para poblar combos sin logica de dependencia, agregar llamado a la funcion aqui. Explicacion en funcion
  populateCbo('cboNac');
  populateCbo('cboGen');
  populateCbo('cboDocType');
  populateCbo('provincia'); 
  $("#provincia").change(function(){
    $("#ciudad").empty();
    populateCbo("ciudad");

  });
  if(isCheckedById("cbox1")){
    $("#matri").show();
  }else{
    $("#matri").hide();
  };
  $("#cbox1").change(function(){
    console.log($("#cbox1").val());
    if(isCheckedById("cbox1")){
      $("#matri").show();
    }else{
      $("#matri").hide();
    };

  });

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
function isCheckedById(id) {
  var checked = $('#' + id).is(":checked");

  if (checked) {
      return true;
  } else {
      return false;
  }
}
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
    case 'provincia':
      arrayList = [
                    {"Id": 1, "Name": "Jujuy"}, 
                    {"Id": 2, "Name": "Buenos Aires"},
                    {"Id": 3, "Name": "Neuquen"}, 
                    {"Id": 4, "Name": "Santa fe"}	
                  ];
    break;
    case 'ciudad':
      let ref=$("#provincia").val(); 
      let ref2=parseInt(ref, 10);   
      switch(ref2){
        case 1:
          console.log(ref2);
          arrayList = [
            {"Id": 1, "Name": "Jujuy1"}, 
            {"Id": 2, "Name": "Jujuy2"},
            {"Id": 3, "Name": "Jujuy3"}, 
            {"Id": 4, "Name": "Jujuy4"}	
          ];
          console.table(arrayList);
          break;
       case 2:
            arrayList = [
                {"Id": 1, "Name": "Baires1"}, 
                {"Id": 2, "Name": "Baires2"},
                {"Id": 3, "Name": "Baires3"}, 
                {"Id": 4, "Name": "Baires4"}	
              ];
              break;
      case 3:
         arrayList = [
              {"Id": 1, "Name": "Neuquen1"}, 
              {"Id": 2, "Name": "Neuquen2"},
              {"Id": 3, "Name": "Neuquen3"}, 
              {"Id": 4, "Name": "Neuquen4"}	
             ];
             break;
      case 4:
       arrayList = [
           {"Id": 1, "Name": "Santafe1"}, 
           {"Id": 2, "Name": "Santafe2"},
           {"Id": 3, "Name": "Santafe3"}, 
           {"Id": 4, "Name": "Santafe4"}	
           ];
           break;       
      }
      break;
  }   

    for (var i = 0; i < arrayList.length; i++) {
        $('#' + cboName).append('<option value="' + arrayList[i].Id + '">' + arrayList[i].Name + '</option>');
    }

}