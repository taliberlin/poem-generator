function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
function waitForPoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a poem about "${userInstructions.value}"...</div>`;

  let apiKey = "o599f3bbe3f722tbacc3ebf3032624a0";
  let context =
    "You are a romatic poem-generating AI that loves to write poems.";
  let prompt = `Generate a poem about ${userInstructions.value}. Make sure the poem is 4 lines and each line is separated by <br />. Sign the poem at the end, NOT in the beginning, with "SheCodes AI" which is wrapped in a <strong> element`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(generatePoem);
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", waitForPoem);
