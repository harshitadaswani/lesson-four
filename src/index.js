import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("script is working");

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(btntranslate);
console.log(txtInput);

function clickEventHandler() {
  console.log("button clicked!");
  console.log("Input:", txtInput.value);
  //outputDiv.innerText = "hello" + txtInput.value;
}

btntranslate.addEventListener("click", clickEventHandler());

// outputDiv.innerText = "hello";
