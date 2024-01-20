function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Nature's first green is gold, Her hardest hue to hold. Her early leaf's a flower; But only so an hour. Then leaf subsides to leaf. So Eden sank to grief, So dawn goes down to day. Nothing gold can stay. Robert Frost.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
