const textElement = document.getElementById("text2");
const sentences = [
  "I am a Frontend developer",
  "I am a UI and UX designer",
  "I am a digital marketer"
];

let index = 0;

function updateText() {
  textElement.style.opacity = 1; /* reset opacity */
  textElement.style.transform = "translateY(0)"; /* reset transform */
  textElement.innerText = sentences[index]; /* update text */
  index = (index + 1) % sentences.length; /* increment index */
  setTimeout(() => {
    textElement.style.opacity = 0; /* fade out the text */
    textElement.style.transform = "translateY(-100%)"; /* slide up the text */
  }, 3000);
  setTimeout(updateText, 4000); /* wait 4 seconds before updating the text again */
}

textElement.innerText = sentences[index]; /* start with the first sentence visible */
updateText();