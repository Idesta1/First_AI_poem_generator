function generatePoem(event){
    event.preventDefault();


new Typewriter('#poems', {
    strings: "La tombe dit a la rose",
    autoStart: true,
    delay: 20,
    cursor: ""
  });

 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);