const showCountryFilter = document.querySelector(".country-filter__exit-button");
const showCountryFilterMobile =  document.querySelector(".country-filter__open-filter-button");

const countryFilter = document.querySelector(".country-filter__form");
const rollUpButton = document.querySelector(".country-filter__roll-up-button");

showCountryFilterMobile.addEventListener("click", function (evt) {
    evt.preventDefault();

    countryFilter.classList.remove("country-filter__form--close");
    countryFilter.classList.add("country-filter__form--open");
    showCountryFilter.classList.add("country-filter__exit-button--show");
});

showCountryFilter.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (countryFilter.classList.contains("country-filter__form--open")){
    countryFilter.classList.remove("country-filter__form--open");
    countryFilter.classList.add("country-filter__form--close");
    showCountryFilter.classList.remove("country-filter__exit-button--show");
  }
  else{
    countryFilter.classList.remove("country-filter__form--close");
    showCountryFilter.classList.add("country-filter__form-open");
    showCountryFilter.classList.add("country-filter__exit-button--show");
  }

});

rollUpButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryFilter.classList.remove("country-filter__form--open");
  countryFilter.classList.add("country-filter__form--close");
  showCountryFilter.classList.remove("country-filter__exit-button--show")
});

