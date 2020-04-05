
'use strict';


  let catPage = document.querySelector(".no-scroll");
  let logIn = document.querySelector(".page-splash");
    console.log(catPage);


  // logIn.classList.toggle("page-splash");

  // logIn.addEventListener("click", hideSplashScreen);

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

// catPage.addEventListener("click", showSplashScreen);





