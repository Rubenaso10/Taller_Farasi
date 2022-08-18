function mostrarDatos(){
    inputnombre= document.getElementById("idnombre").value;
    inputcorreo = document.getElementById("idemail").value;
    inputmensaje = document.getElementById("idmensaje").value;
    
    const datos = [];
    datos [0] = "Mi nombre es: " + inputnombre;
    datos [1] = "Me puedes escribir al correo: " + inputcorreo;
    datos [2] = "Te dejo el siguiente mensaje: " + inputmensaje;
    //if (inputnombre!= "" || inputcorreo ){}
    if(inputnombre==""||inputcorreo ==""||inputmensaje == ""){
        alert("Llenar campos vacios")

    }
    else {
        let text = "<ul>";
        for (let i = 0; i< datos.length ; i++ ){
            text +="<li>" + datos [i] + "</li>";
    
        }
    
        text += "</ul>";
    
        document.getElementById("secundario").innerHTML = text;

    }
   
    
}

function limpiar(){
    inputnombre= document.getElementById("idnombre").value="";
    inputcorreo = document.getElementById("idemail").value="";
    inputmensaje = document.getElementById("idmensaje").value="";
    document.getElementById("secundario").innerHTML ="";

}