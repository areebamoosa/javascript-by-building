let browserDiv = document.getElementById("browser");
let statusDiv = document.getElementById("status");
let languageDiv = document.getElementById("language");

let browserInfo = navigator.userAgent;
let isOnline = navigator.onLine;
let language = navigator.language;

browserDiv.innerHTML += `<p>${browserInfo}</p>`;
statusDiv.innerHTML += `<p>${isOnline ? "Online" : "Offline"}</p>`;
languageDiv.innerHTML += `<p>${language}</p>`;
