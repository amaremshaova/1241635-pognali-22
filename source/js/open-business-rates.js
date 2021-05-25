const showBusinessRatesLink =
 document.querySelector(".adding-personal-profile__show-business-rates-button");

 console.log(showBusinessRatesLink);

const businessSection = document.querySelector(".business-rates");
const closeButton = document.querySelector(".business-rates__exit-button");


showBusinessRatesLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    businessSection.classList.add("business-rates--show");
});

closeButton.addEventListener("click", function () {
  businessSection.classList.remove("business-rates--show");
});
