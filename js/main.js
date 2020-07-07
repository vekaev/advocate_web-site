
  document.addEventListener("DOMContentLoaded", function(){
  
  
    const sideBar = ()  => {
      var $openBtn = document.querySelector('#open-btn'),
          $closeBtn = document.querySelector('#close-btn'),
          $sideBar = document.querySelector('#side-bar'),
          $sideBarLink = document.querySelectorAll('.side-bar-link');

      $openBtn.addEventListener('click', function() {
          $sideBar.classList.add('side-bar-active');
      });
      $closeBtn.addEventListener('click', function() {
          $sideBar.classList.remove('side-bar-active');
      });
      for(i = 0; i < 10; i++ ){
        $sideBarLink[i].addEventListener('click', function() {
          $sideBar.classList.remove('side-bar-active');
          console.log(i, $sideBarLink[i])
      });
      }
      
  }
  sideBar()

});



const counter = document.getElementById("counter");
const counterWord = document.getElementById("counter-word");
const textArea = document.getElementById("field");
const sumbitBtn = document.getElementById("submitFF");
let maxLengthArttr =  textArea.getAttribute("maxlength");



const textAreaCounter = (val) => {

    let sampleNumber =  120 - countWords(val.value);
    console.log(maxLengthArttr,val.value.length)
    if(sampleNumber < 0){
      sampleNumber = 0;
      textArea.disabled = true
    }


    let lastDigit = Number.isInteger(sampleNumber) ? sampleNumber % 10
    : sampleNumber.toString().slice(-1);
    counter.innerHTML = sampleNumber;
    
    if(sampleNumber <= 114 && sampleNumber >= 110){
        counterWord.innerHTML = "слов";   
    } else if(sampleNumber === 1 || lastDigit === 1 ){
        counterWord.innerHTML = "слово";  
    } else if (sampleNumber <= 4 && sampleNumber !== 0 || lastDigit <=4 && lastDigit !== 0) {
        counterWord.innerHTML = "слова";  
    } else {
        counterWord.innerHTML = "слов";  
    } 
    

    
    
    function countWords(str) {
        var wordArray = str.split(/(?:,|. )+/);
        str == 0 ? wordArray = [] : "";
        return wordArray ? wordArray.length : 0;
      }
  };


const fileInput = document.getElementById('file__wrapper');

  const getFileInput = (e) => {
    let numOfFiles = e.files.length;
    if(numOfFiles >= 1){
        fileInput.classList.add("notEmpty")
    } 
  }
  



