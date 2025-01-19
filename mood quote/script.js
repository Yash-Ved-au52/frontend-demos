const moodSelector = document.getElementById("moodSelector");
const generateQuoteBtn = document.getElementById("generateQuoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");
const quoteText = document.getElementById("quoteText");

const quotes = {
  happy: [
    "Happiness is not something ready-made. It comes from your own actions.",
    "The best way to cheer yourself is to try to cheer someone else up."
  ],
  sad: [
    "In the middle of difficulty lies opportunity.",
    "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit."
  ],
  motivated: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going."
  ],
  calm: [
    "Calmness is the cradle of power.",
    "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight."
  ]
};

generateQuoteBtn.addEventListener("click", () => {
  const selectedMood = moodSelector.value;
  const selectedQuotes = quotes[selectedMood];
  const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
  quoteText.textContent = randomQuote;
});
