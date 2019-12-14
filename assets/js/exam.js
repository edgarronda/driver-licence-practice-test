var questions = [
    "Test1?",
    "Test2?",
    "Test3?",
    "Test4?"
];

var answers = [
    ["AnswerC11","ANswer12","Answer13"],
    ["AnswerC21","ANswer22","Answer23"],
    ["AnswerC31","ANswer32","Answer33"],
    ["AnswerC41","ANswer42","Answer43"]
];

var indicie_respuesta_correcta;
jugar();

function jugar(){
    var index = Math.floor(Math.random()*questions.length);
    var respuestas_posibles = answers[index];
    var posiciones = [0,1,2];
    var respuestas_reordenadas = [];
    var ya_se_metio = false;


    for(i in respuestas_posibles){
        var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
        if(posicion_aleatoria==0 && ya_se_metio == false){
            indicie_respuesta_correcta =i;
            ya_se_metio = true;
        }
        respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
        posiciones.splice(posicion_aleatoria, 1);
    }

    var txt_respuestas="";
    for(i in respuestas_reordenadas){
        txt_respuestas += '<input type="radio" name="pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
    }

    document.getElementById("answers").innerHTML = txt_respuestas;
    document.getElementById("questions").innerHTML = questions[index];

}
function comprobar(){
var respuesta = $("input[type=radio]:checked").val();

if(respuesta ==indicie_respuesta_correcta){
    $(".questions-section").notify(
        "BIEN", 
        { 
            position:"bottom center",
            className: 'success'
        }
      );
}else{
    $(".questions-section").notify(
        "MAL", 
        { 
            position:"bottom center",
            className: 'error'
        }
      );
}

jugar();
}
