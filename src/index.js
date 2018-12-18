require('./css/app.css');
require('./index.html');

const jimp = require('jimp');

function upload() {
  const reader  = new FileReader();
  const file = this.file.files[0];
  const image = this.preview;

  reader.onloadend = function () {
    image.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    image.src = "";
  }
}

window.setupWM = (file, preview) => {
  file.addEventListener('change', upload.bind({ file: file, preview: preview }));
}
