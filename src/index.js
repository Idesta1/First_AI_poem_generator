function displayPoem(response) {

new Typewriter('#poems', {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: ""
  });
}
function generatePoem(event){
    event.preventDefault();
  
  
  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "8e95b71ct703a6fac0458b466ebo4b0b";
  let prompt =`What is a nice poem about ${instructionInput.value}`;
  let context ="Make sure to provide a nice romantic short poems and separtate each line with a <br/>. Your mission is to generate only a 4 line poem. Make sure to follow the instructions input.Sign the poem at the with'SheCode AI' inside a <strong> element at the end on a diffrent line";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poems");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> ⏳Generating a poem for you ....${instructionInput.value}</div>`;
  
  
  axios.get(apiUrl).then(displayPoem);
 }

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);