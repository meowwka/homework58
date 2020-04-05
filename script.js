
'use strict';


  let catPage = document.querySelector(".no-scroll");
  let logIn = document.querySelector(".page-splash");
    console.log(catPage);


  let logHide = document.querySelector(".page-splash").hidden = false;
  console.log(logHide);

  if(!logHide){
      logIn.addEventListener("click", hideSplashScreen);
  } else {
    logIn.addEventListener("click", showSplashScreen);
  }




function showSplashScreen(){
  logIn.classList.add("page-slash");
  catPage.classList.add("no-scroll");

  console.log(catPage);
}

function hideSplashScreen(){
    logIn.classList.remove("page-splash");
    catPage.classList.remove("no-scroll");
}


let comment = document.querySelector(".comment");


function createCommentElement(comment){
  let elem = document.createElement('div');
  elem.innerHTML = comment;
  elem.style.fontStyle = 'italic';
  document.getElementById('comment')[2].append(elem);

}




