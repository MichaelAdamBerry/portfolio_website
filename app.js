function imgToggle (imgId, codeImg, previewImg) {
  var imgToToggle = document.querySelector(imgId);
  imgToToggle.addEventListener('mouseover', function (event) {
    imgToToggle.src = previewImg;
  });
  imgToToggle.addEventListener('mouseout', function (event){
    imgToToggle.src = codeImg;
  });
};

imgToggle('#movie', 'img/movie_code.png', 'img/movie_preview.png');
imgToggle('#geo', 'img/geo_code.png', 'img/geo_preview.png');
imgToggle('#site', 'img/site_code.png', 'img/adam_dance_small.png');
