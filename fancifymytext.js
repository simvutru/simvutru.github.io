function alertTrigger(){
    alert("Hello, world!");
    document.getElementById("textBox").style.fontSize = "2em";
}
function styleChanges() {
    const textArea = document.getElementById("textBox");
    const fancy = document.getElementById("fancyShmancy");
    const boring = document.getElementById("boringBetty");

    if (fancy.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      alert("Style changed to Fancy!");
    }
     if(boring.checked) {
      textArea.style.fontWeight = "normal";
      alert("Style changed to Boring...");
    }
}
function mooText() {
  var textArea = document.getElementById("textBox");
  var text = textArea.value.toUpperCase();
  var sentences = text.split(".");
  for (var i = 0; i < sentences.length - 1; i++) { // last element may be empty if text ends with "."
      var words = sentences[i].trim().split(" ");
      if (words.length > 0) {
          words[words.length - 1] += "-MOO";
      }
      sentences[i] = words.join(" ");
  }

  text = sentences.join(". ");
  textArea.value = text;
}
