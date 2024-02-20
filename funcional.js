function calacularNotaNecessaria(){
    var media = document.getElementById("media").value;
    var resultado = document.getElementById("resultado")
    var necessita = 15 - parseFloat(media)*2;
    if(media != ''){
        if(necessita <= 1){
            resultado.innerHTML = "Você não está na final."
        }
        else{
            resultado.innerHTML = "Você precisa tirar: "+necessita.toFixed(2);
            console.log(necessita)
        }
    }


}