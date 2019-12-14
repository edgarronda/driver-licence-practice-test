var is_right_answer;
Play();

function Play(){
    var index = Math.floor(Math.random()*questions.length);
    var possible_answers = answers[index];
    var positions = [0,1,2];
    var orderer_answers = [];
    var showed = false;


    for(i in possible_answers){
        var random_index = Math.floor(Math.random()*positions.length);
        if(random_index==0 && showed == false){
            is_right_answer =i;
            showed = true;
        }
        orderer_answers[i] = possible_answers[positions[random_index]];
        positions.splice(random_index, 1);
    }

    var write_answers="";
    for(i in orderer_answers){
        write_answers += '<div class="form-check"> <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="'+i+'"> <label class="form-check-label" for="gridRadios1">'+orderer_answers[i]+' </label> </div>';
    }

    document.getElementById("answers").innerHTML = write_answers;
    document.getElementById("questions").innerHTML = questions[index];

}

// Validate
function Validate(){
    var user_answer = $("input[type=radio]:checked").val();

    if(user_answer ==is_right_answer){
        $(".questions-section").notify(
            "BIEN", 
            { 
                position:"bottom center",
                className: 'success',
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

    Play();
}
