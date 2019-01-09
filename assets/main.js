const options = [
    Cat1 = {
        question: "This is a test question",
        options: [
            option1 = {
                text: "Test Option 1",
                value: -1,
            },
            option2 = {
                text: "Test Option 2",
                value: -1,
            },
            option3 = {
                text: "Test Option 3",
                value: -1,
            },
            option4 = {
                text: "Test Option 4",
                value: 1,
            }
        ]
    },
    Cat2 = {
        question: "This is a test question 2",
        options: [
            option1 = {
                text: "Test Option 1",
                value: -1,
            },
            option2 = {
                text: "Test Option 2",
                value: 1,
            }
        ]
    },
    Cat3 = {
        question: "This is a test question 3",
        options: [
            option1 = {
                text: "Test Option 1",
                value: -1,
            },
            option2 = {
                text: "Test Option 2",
                value: 1,
            },
            option3 = {
                text: "Test Option 3",
                value: -1,
            }
        ]
    },
    Cat4 = {
        question: "This is a test question 4",
        options: [
            option1 = {
                text: "Test Option 1",
                value: 1,
            },
            option2 = {
                text: "Test Option 2",
                value: -1,
            },
            option3 = {
                text: "Test Option 3",
                value: -1,
            },
            option4 = {
                text: "Test Option 4",
                value: -1,
            }
        ]
    },
 ]
 
 let i = 0
 let total = []
 let count = 30
 let timeOut
 
 populatecurrent(i)
 
 function populatecurrent(i){
    advanceClock()
    $('#container').append(`<div><h2>${options[i].question}</h2></div>`)
 
    for(k=0; k<options[i].options.length; k++){
        let current = options[i]
        $('#container').append(`<div>${current.options[k].text} <button class="button" value="${current.options[k].value}">Select</button></div`)
    }
 


    $('.button').click(function(){questionAdvance(this, false)})
 }

 function questionAdvance(x, time){
    count = 30;

    $("#timer").text(count)

    console.log(x.value)
    
    if(time != true && x.value == 1){
        total.push("Correct!")
    }
    else{
        total.push("Incorrect")
    }

    $('#container').empty()
    i++

    if(i==options.length){
        i=0
        let answerq = 0
        total.forEach(function(e){
            answerq++
            $('#container').append(`<div>${answerq} : ${e}</div>`)
        })
        $('#container').append(`<button id="reset">Reset</button>`)
        $('#reset').click(function(){
            total = []
            answerq = 0
            $('#container').empty()
            populatecurrent(i)
        });
    }

    else
        populatecurrent(i)
  }

  function advanceClock(){
            if(count > 0){
                clearTimeout(timeOut)
                timeOut = setTimeout(function(){
                    count--
                    $("#timer").text(count)
                    advanceClock()
                }, 1000);
           }
            else{
                questionAdvance(options[i], true)
            }
        }