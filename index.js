function init() {
  initCopyright();
}

function copyToClipboard(element) {
  navigator.clipboard.writeText(element.innerHTML);

  showDialog("Copied!");
}

function createDialog(message) {
  var dialog = document.createElement("div");
  dialog.innerHTML = message;
  dialog.classList.add("dialog");

  return dialog;
}

function showDialog(message) {
  var dialog = createDialog(message);

  document.body.appendChild(dialog);

  setTimeout(function() {
    dialog.classList.add("decay");
  }, 1000);

  setTimeout(function() {
    document.body.removeChild(dialog);
  }, 3000);
}

function initCopyright() {
  document.getElementById("copyright").innerHTML = getYear();
}

function getYear() {
  return (new Date()).getFullYear();
}
