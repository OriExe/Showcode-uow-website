let popup = document.getElementsByClassName("Popup");
let button = document.getElementsByClassName("SkipButton")
let Lpopup = document.getElementsByClassName("LanguagePopup")

function removePopup()
{
   console.log(popup);
   popup[0].id = "";
   Lpopup[0].id = "";
}

function LanguagePopup()
{
   if (Lpopup[0].id == "Isactive")
   {
      console.log(Lpopup);
      Lpopup[0].id = "";
   }
   else
   {
      console.log(Lpopup);
      Lpopup[0].id = "Isactive";
   }
   
}

function enterText()
{
   button = "Enter";
}
    