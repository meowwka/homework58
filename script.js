
'use strict';


  let catPage = document.querySelector(".no-scroll");
  let logIn = document.querySelector(".page-splash");

  // logIn.classList.toggle("page-splash");

  logIn.addEventListener("click", hideSplashScreen);


function showSplashScreen(){
  catPage.hidden = true;
  logIn.hidden = true;
  console.log(catPage);
}

function hideSplashScreen(){
    logIn.classList.toggle("page-splash");
    catPage.classList.toggle("no-scroll");
}

// catPage.addEventListener("click", showSplashScreen);





