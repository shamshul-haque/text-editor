const field = document.getElementById("field");

const bold = document.getElementById("bold");
bold.addEventListener("click", function () {
  field.classList.toggle("font-bold");
  bold.classList.toggle("text-red-400");
});

const italic = document.getElementById("italic");
italic.addEventListener("click", function () {
  field.classList.toggle("italic");
  italic.classList.toggle("text-red-400");
});

const underline = document.getElementById("underline");
underline.addEventListener("click", function () {
  field.classList.toggle("underline");
  underline.classList.toggle("text-red-400");
});
