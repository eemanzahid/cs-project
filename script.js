let logData = "";

document.getElementById("inputBox").addEventListener("keydown", function(e) {
  logData += e.key;
  document.getElementById("logBox").value = logData;
});

function encryptLog() {
  let encrypted = btoa(logData);
  document.getElementById("encryptedBox").value = encrypted;
}
