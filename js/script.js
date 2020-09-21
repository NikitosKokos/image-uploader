const inputElement = document.querySelector(".card-start__input");
const uloadPopup = document.querySelector(".card-upload");
const successfullyPopup = document.querySelector(".card-successfully");
const startPopup = document.querySelector(".card-start");
const dropbox = document.querySelector(".card-start__drop");
const next = document.querySelector(".next");
const copyBtn = document.querySelector(".card-successfully__btn");

dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
inputElement.addEventListener("change", handleFiles, false);
inputElement.addEventListener("change", displayImage);

function displayImage() {
  if (this.files[0]) {
    let reader = new FileReader();
    let link = document.querySelector(".card-successfully__link");
    link.textContent = `http://image-uploader-master/user_img/${this.files[0].name}`;
    copyBtn.addEventListener("click", function () {
      copyToClipboard(link.textContent);
    });
    reader.onload = function (e) {
      document.querySelector(".user-img").setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(this.files[0]);
  }
}
function displayImageDrop(files) {
  if (files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".user-img").setAttribute("src", e.target.result);
      let link = document.querySelector(".card-successfully__link");
      link.textContent = `http://image-uploader-master/user_img/${files[0].name}`;
      copyBtn.addEventListener("click", function () {
        copyToClipboard(link.textContent);
      });
    };
    reader.readAsDataURL(files[0]);
  }
}

function previewFile(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    let img = document.querySelector(".user-img");
    img.src = reader.result;
  };
}

function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  if (fileList[0].type == "image/jpeg" || fileList[0].type == "image/png") {
    initializeProgress();
    uploadFile(fileList[0]);
  }
}

function uploadFile(file) {
  var oData = new FormData();

  oData.append("file", file);

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "processForm.php", true);
  oReq.onload = function (oEvent) {
    if (oReq.status == 200) {
      progressDone();
    } else {
      // some error
    }
  };

  oReq.send(oData);
}

function initializeProgress() {
  startPopup.classList.add("card-start_hide");
  uloadPopup.classList.add("card-upload_active");
}
function progressDone() {
  uloadPopup.classList.remove("card-upload_active");
  successfullyPopup.classList.add("card-successfully_active");
}

function handleFilesDrop(files) {
  const fileList = files; /* now you can work with the file list */
  console.log(fileList);
  if (fileList[0].type == "image/jpeg" || fileList[0].type == "image/png") {
    initializeProgress();
    uploadFile(files[0]);
  }
}

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  let dt = e.dataTransfer;
  let files = dt.files;
  displayImageDrop(files);
  handleFilesDrop(files);
}

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
