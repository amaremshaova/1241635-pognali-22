const showListCountries =
 document.querySelector(".step-2__counties-select-new");

 console.log(showListCountries);

const countryList = document.querySelector(".choose-country");
const closeButton = document.querySelector(".choose-country__exit");

console.log(countryList);
console.log(closeButton);

showListCountries.addEventListener("click", function (evt) {
    evt.preventDefault();
    countryList.classList.add("choose-country--show");
});

closeButton.addEventListener("click", function () {
  countryList.classList.remove("choose-country--show");
});
