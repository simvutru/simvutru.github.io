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
   const textArea = document.getElementById("textBox");
   let text = textArea.value.toUpperCase();
   text = text.replace(/\b(\w+)(?=\.)/g, "$1-MOO");
   textArea.value = text;
}