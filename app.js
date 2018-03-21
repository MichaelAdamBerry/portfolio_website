function imgToggle (imgId, codeImg, previewImg) {
  var imgToToggle = document.querySelector(imgId);
  imgToToggle.addEventListener('mouseover', function (event) {
    imgToToggle.src = previewImg;
  });
  imgToToggle.addEventListener('mouseout', function (event){
    imgToToggle.src = codeImg;
  });
};

imgToggle('#movie', 'img/movie_code.png', 'test.png');
