var btnTranslate=document.querySelector('#btn-translate');

var numInput=document.querySelector('#num-input');

var outputDiv=document.querySelector('#output');

var serverURL="https://api.funtranslations.com/translate/roman-numerals.json"

function getTranslationURL(num){
    return serverURL + "?" + "text=" + num
}

function errorHandler(error){
    console.log("Error Caught", error)
    alert("Oops! Something wrong with server, try again later.")
}

function clickHandler(){
    
    var inputNumber = Number(numInput.value);

    //calling server for processing
    fetch(getTranslationURL(inputNumber))
        .then(response => response.json())
        .then(json =>{ 
            var translatedText = json.contents.translated;
            console.log(translatedText);
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener('click', clickHandler);
