const changeBackground = document.getElementById("background");
changeBackground.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
    let colorList = ["#F08080", "#FFA07A", "#FAEBD7", "#FFFFE0", "#FFB6C1", "#ADD8E6", "#E6E6FA", "#FFDAB9"];

    if (event.target.tagName == 'BUTTON' || event.target.tagName == 'A') {
        return;
    }
    const randomIndex = Math.floor(Math.random() * colorList.length);
    background.style.backgroundColor = colorList[randomIndex];
}

function myFunction() {
    var less = document.getElementsByClassName("less")[2];
    var moreText = document.getElementsByClassName("more")[2];
    var btnText = document.getElementsByClassName("myBtn")[2];
  
    if (less.style.display === "none") {
      less.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      less.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}