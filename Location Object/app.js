let url = document.getElementById("url");
let host = document.getElementById("hostname");
let protocol = document.getElementById("protocol");

let reload = document.getElementById("reloadbtn");
let redirect = document.getElementById("redirectbtn");

let urlLink = location.href;
let hostName = location.hostname;
let prot = location.protocol;

url.innerHTML = `<p>Location : ${urlLink} </p>`;
host.innerHTML = `<p>Hostname : ${hostName} </p>`;
protocol.innerHTML = `<p> Protocol : ${prot} </p>`;

reload.addEventListener("click", () => {
  location.reload();
});

redirect.addEventListener("click", () => {
  location.assign("https://www.google.com");
});
