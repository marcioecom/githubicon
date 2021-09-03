console.log("to no github");

const emojisElement = document.querySelectorAll('g-emoji.g-emoji img.emoji')

emojisElement.forEach((emoji) => {
  if (emoji.getAttribute('alt') === "heavy_check_mark") {
    emoji.src = "https://github.githubassets.com/images/icons/emoji/unicode/2714.png"
  }
})
