const buttonAccordion = document.getElementsByClassName("accordion");
console.log(buttonAccordion);

for (let val of ratingNum.length) {
  val.addEventListener("click", (item) => {
    for (let val1 of ratingNum.length) {
      val1.classList.contains("isChecked");
      val1.classList.remove("isChecked");
    }
    val.classList.add("isChecked");
  });
}

thankButton.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});
