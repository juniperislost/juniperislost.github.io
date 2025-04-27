const text = "Hi, I'm Juniper!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("intro").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.getElementById("intro").innerHTML = "";
typeWriter();
