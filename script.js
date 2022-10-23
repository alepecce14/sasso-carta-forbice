const options = document.querySelectorAll(".options");
let pscore = 0;
let cscore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;

    const cOptions = ["SASSO", "CARTA", "FORBICE"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();
    if (vittoria()) {
        pscore = cscore = 0;
        updateScore();
    }
  });
});

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  // pareggio
  if (pInput === cInput) {
    result = `${currentMatch}: Pareggio!`;

    document.getElementById("res").textContent = result;
    return true;
  }

  // sasso
  if (pInput === "SASSO") {
    if (cInput === "FORBICE") {
      result = `${currentMatch}: Hai vinto il round!`;
      pscore++;
      document.getElementById("res").textContent = result;
    } else {
      result = `${currentMatch}: Il computer vince il round!`;
      cscore++;
      document.getElementById("res").textContent = result;
    }
  }
  // carta
  else if (pInput === "CARTA") {
    if (cInput === "SASSO") {
      result = `${currentMatch}: Hai vinto il round!`;
      pscore++;
      document.getElementById("res").textContent = result;
    } else {
      result = `${currentMatch}: Il computer vince il round!`;
      cscore++;
      document.getElementById("res").textContent = result;
    }
  }
  //forbice
  else if (pInput === "FORBICE") {
    if (cInput === "CARTA") {
      result = `${currentMatch}: Hai vinto il round!`;
      pscore++;
      document.getElementById("res").textContent = result;
    } else {
      result = `${currentMatch}: Il computer vince il round!`;
      cscore++;

      document.getElementById("res").textContent = result;
      

    }
  }
}

function updateScore() {
  document.getElementById("pscore").textContent = pscore;
  document.getElementById("cscore").textContent = cscore;
}

function vittoria() {
  if (pscore === 5 || cscore === 5) {
    const vincitore =
      pscore === 5

      ? "Hai vinto la partita!" 
      : "Il computer vince! Riprova!";
    
    document.getElementById("res").textContent = vincitore;

    return true;
  } 
  return false;
}
