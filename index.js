function insertNumber(number){
    
    var existingNumbers= $("#result").val();
    $("#result").val(existingNumbers + number)
}

function clearResult(){
    $("#result").val('')
}

function calculate(){
    var result= eval($("#result").val())
    $("#result").val(result)
}

function deleteNumber(){
  var presentValue =  $("#result").val()

  if(presentValue !='' ){
    $("#result").val(presentValue.slice(0,-1));
  }

}

