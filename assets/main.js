const options = [
    Cat1 = {
        question: "Who is the protagonist of Final Fantasy 8?",
        options: [
            option1 = {
                text: "Sora",
                value: -1,
            },
            option2 = {
                text: "Donald Duck",
                value: -1,
            },
            option3 = {
                text: "Zelda",
                value: -1,
            },
            option4 = {
                text: "Squall",
                value: 1,
            }
        ]
    },
    Cat2 = {
        question: "True or False: Final Fantasy XIV is an MMO",
        options: [
            option1 = {
                text: "False",
                value: -1,
            },
            option2 = {
                text: "True",
                value: 1,
            }
        ]
    },
    Cat3 = {
        question: "This Final Fantasy character had a terrible shooter spinoff game based around them:",
        options: [
            option1 = {
                text: "Doomguy",
                value: -1,
            },
            option2 = {
                text: "Vincent Valentine",
                value: 1,
            },
            option3 = {
                text: "Yuna",
                value: -1,
            }
        ]
    },
    Cat4 = {
        question: "Whats the best healer job in FFXIV",
        options: [
            option1 = {
                text: "White Mage, obviously.",
                value: 1,
            },
            option2 = {
                text: "Astrologian, if you're into tarot or whatever I guess",
                value: -1,
            },
            option3 = {
                text: "Scholar, the nerd class for nerds",
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
    $('#container').append(`<p>${options[i].question}</p>`)
 
    for(k=0; k<options[i].options.length; k++){
        let current = options[i]
        $('#container').append(`<button class="button" value="${current.options[k].value}">${current.options[k].text}</button>`)
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