$(document).ready(function(){
    $('form#search').submit(function(event){
        //prevent default behavior when form is submitted
        event.preventDefault()
        var search_word=$('input#input-text').val()//get the user input
        if(search_word == ""){
            //check if user entered any word
            //if they have not entered anything this will happen
            alert("ENTER WORD TO SEARCH")
        }
        else{
            //if they entered some input the alert will contain the input word
            alert(search_word)
        }
        
    })
})