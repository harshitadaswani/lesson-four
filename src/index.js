import "./styles.css";

/*document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;*/

console.log("script is working");

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var surl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslatedURL(text) {
  var a = `${surl}?text=${text}`;
  return a;
}

function clickEventHandler() {
  /*console.log("button clicked!");
  console.log("Input:", txtInput.value);
  outputDiv.innerText = "hello" + txtInput.value;*/

  var input = txtInput.value; //taking input

  //calling server for processing
  fetch(getTranslatedURL(input))
    .then(newFunction())
    .then((json) => console.log(json));
  newFunction1();

  function newFunction1() {
    try {
    } catch (errorHandler) {}
  }

  function newFunction() {
    return (response) => response.json();
  }
}

btntranslate.addEventListener("click", clickEventHandler());
console.log(btntranslate);
console.log(txtInput);
console.log(outputDiv);
// outputDiv.innerText = "hello";
