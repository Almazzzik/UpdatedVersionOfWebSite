var modal = document.getElementById("myModal__cutom-modal");
var img = document.getElementById("myImg__custom-modal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("modal__caption-custom__img");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close__modal-custom__img")[0];
span.onclick = function() {
  modal.style.display = "none";
} 