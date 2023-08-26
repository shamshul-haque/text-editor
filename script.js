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

const left = document.getElementById("left");
left.addEventListener("click", function () {
  field.classList.toggle("text-left");
  field.classList.remove("text-center", "text-right", "text-justify");

  left.classList.toggle("text-red-400");
  center.classList.remove("text-red-400");
  right.classList.remove("text-red-400");
  justify.classList.remove("text-red-400");
});

const center = document.getElementById("center");
field.classList.remove("text-right");
center.addEventListener("click", function () {
  field.classList.toggle("text-center");
  field.classList.remove("text-left", "text-right", "text-justify");

  center.classList.toggle("text-red-400");
  left.classList.remove("text-red-400");
  right.classList.remove("text-red-400");
  justify.classList.remove("text-red-400");
});

const right = document.getElementById("right");
right.addEventListener("click", function () {
  field.classList.toggle("text-right");
  field.classList.remove("text-left", "text-center", "text-justify");

  right.classList.toggle("text-red-400");
  left.classList.remove("text-red-400");
  center.classList.remove("text-red-400");
  justify.classList.remove("text-red-400");
});

const justify = document.getElementById("justify");
justify.addEventListener("click", function () {
  field.classList.toggle("text-justify");
  field.classList.remove("text-left", "text-right", "text-center");

  justify.classList.toggle("text-red-400");
  left.classList.remove("text-red-400");
  right.classList.remove("text-red-400");
  center.classList.remove("text-red-400");
});

const selectSize = document.getElementById("select-size");
selectSize.addEventListener("change", function () {
  const size12 = document.getElementById("size-12");
});
