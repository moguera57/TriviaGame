const options = [
    Cat1 = {
        question: "This is a test question",
        options: [
            option1 = {
                text: "Test Option 1",
                cost: 200,
            },
            option2 = {
                text: "Test Option 2",
                cost: 500,
            },
            option3 = {
                text: "Test Option 3",
                cost: 600,
            },
            option4 = {
                text: "Test Option 4",
                cost: 800,
            }
        ]
    },
    Cat2 = {
        question: "This is a test question 2",
        options: [
            option1 = {
                text: "Test Option 1",
                cost: 2000,
            },
            option2 = {
                text: "Test Option 2",
                cost: 5000,
            }
        ]
    },
    Cat3 = {
        question: "This is a test question 3",
        options: [
            option1 = {
                text: "Test Option 1",
                cost: 500,
            },
            option2 = {
                text: "Test Option 2",
                cost: 700,
            },
            option3 = {
                text: "Test Option 3",
                cost: 2000,
            }
        ]
    },
    Cat4 = {
        question: "This is a test question 4",
        options: [
            option1 = {
                text: "Test Option 1",
                cost: 500,
            },
            option2 = {
                text: "Test Option 2",
                cost: 700,
            },
            option3 = {
                text: "Test Option 3",
                cost: 2000,
            },
            option4 = {
                text: "Test Option 4",
                cost: 4000,
            }
        ]
    },
 ]
 
 let i = 0
 let totalCost = 0
 
 populatecurrent(i)
 
 function populatecurrent(i){
    $('#container').append(`<div><h2>${options[i].question}</h2></div>`)
 
    for(k=0; k<options[i].options.length; k++){
        let current = options[i]
        $('#container').append(`<div>${current.options[k].text} <button class="button" value="${current.options[k].cost}">Click</button></div`)
    }
 
    $('.button').click(function(){questionAdvance(this)})
 }

 function questionAdvance(x){
    totalCost+=parseInt(x.value)
    $('#container').empty()
    i++

    if(i==options.length){
        i=0
        $('#container').append(`<div>Estimated cost: $${totalCost}</div`)
        $('#container').append(`<button id="reset">Reset</button>`)
        $('#reset').click(function(){
            totalCost = 0
            $('#container').empty()
            populatecurrent(i)
        });
    }

    else
        populatecurrent(i)
  }