 var divTag = document.querySelector(".about");

 function replaceTheReplaced(){
  let h1Tag = document.QuerySelector(".container h1");
  let h1Txt = h1Tag.innerText;
  let replaceH1 = h1Txt.replace("The", "Replaced");
  h1Tag.innerText = replaceH1;
  divTag.innerText = divTag.innerText.replace(/ the /g, " replace ");
  divTag.innerText = divTag.innerText.replace(/ the /g, " Replace ");
 }

 setTimeout(replaceTheReplaced, 4000);
