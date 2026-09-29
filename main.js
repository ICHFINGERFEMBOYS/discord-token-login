const f = document.createElement("iframe");
document.body.appendChild(f);
const ls = f.contentWindow.localStorage;

function settoken(token) {
  ls.setItem("token", '"' + token + '"');
  return 0;
}

console.log("IF U LAND ON THE DISCORD LOGIN THE TOKEN WAS INVALID")
console.log("Tab in discord again there is a prompt")
const input = prompt("TOKEN: ");

settoken(input);
console.log("Successfully set token...");
location.reload();