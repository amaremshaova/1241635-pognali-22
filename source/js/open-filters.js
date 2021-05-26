const hobbyFilter = document.querySelector(".selecting-travel-companion__hobby-filter");
const musicFilter = document.querySelector(".selecting-travel-companion__music-filter");
const foodFilter =  document.querySelector(".selecting-travel-companion__food-filter");
const transportFilter = document.querySelector(".selecting-travel-companion__transport-filter");
const levelFilter =  document.querySelector(".selecting-travel-companion__level-filter");

const openHobbyButton = document.querySelector(".selecting-travel-companion__open-hobby-filter-button");
const openMusicButton = document.querySelector(".selecting-travel-companion__open-music-filter-button");
const openFoodButton = document.querySelector(".selecting-travel-companion__open-food-filter-button");
const openTransportButton = document.querySelector(".selecting-travel-companion__open-transport-filter-button");
const openLevelButton = document.querySelector(".selecting-travel-companion__open-level-filter-button");

openHobbyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    hobbyFilter.classList.contains('selecting-travel-companion__filter--show')
      ?   hobbyFilter.classList.remove("selecting-travel-companion__filter--show")
      :   hobbyFilter.classList.add("selecting-travel-companion__filter--show");

     if (openHobbyButton.classList.contains('selecting-travel-companion__filter--open'))
      {
        openHobbyButton.classList.remove("selecting-travel-companion__filter--open");
        openHobbyButton.classList.add("selecting-travel-companion__filter--close");
      }
      else{
        openHobbyButton.classList.remove("selecting-travel-companion__filter--close");
        openHobbyButton.classList.add("selecting-travel-companion__filter--open");
      }
});

openMusicButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  musicFilter.classList.contains('selecting-travel-companion__filter--show')
    ?   musicFilter.classList.remove("selecting-travel-companion__filter--show")
    :   musicFilter.classList.add("selecting-travel-companion__filter--show");

    if (openMusicButton.classList.contains('selecting-travel-companion__filter--open'))
      {
        openMusicButton.classList.remove("selecting-travel-companion__filter--open");
        openMusicButton.classList.add("selecting-travel-companion__filter--close");
      }
      else{
        openMusicButton.classList.remove("selecting-travel-companion__filter--close");
        openMusicButton.classList.add("selecting-travel-companion__filter--open");
      }
});

openFoodButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  foodFilter.classList.contains('selecting-travel-companion__filter--show')
    ?   foodFilter.classList.remove("selecting-travel-companion__filter--show")
    :   foodFilter.classList.add("selecting-travel-companion__filter--show");

    if (openFoodButton.classList.contains('selecting-travel-companion__filter--open'))
    {
      openFoodButton.classList.remove("selecting-travel-companion__filter--open");
      openFoodButton.classList.add("selecting-travel-companion__filter--close");
    }
    else{
      openFoodButton.classList.remove("selecting-travel-companion__filter--close");
      openFoodButton.classList.add("selecting-travel-companion__filter--open");
    }
});

openTransportButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  transportFilter.classList.contains('selecting-travel-companion__filter--show')
  ?   transportFilter.classList.remove("selecting-travel-companion__filter--show")
  :   transportFilter.classList.add("selecting-travel-companion__filter--show");

  if (openTransportButton.classList.contains('selecting-travel-companion__filter--open'))
  {
    openTransportButton.classList.remove("selecting-travel-companion__filter--open");
    openTransportButton.classList.add("selecting-travel-companion__filter--close");
  }
  else{
    openTransportButton.classList.remove("selecting-travel-companion__filter--close");
    openTransportButton.classList.add("selecting-travel-companion__filter--open");
  }
});

openLevelButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  levelFilter.classList.contains('selecting-travel-companion__filter--show')
  ?   levelFilter.classList.remove("selecting-travel-companion__filter--show")
  :   levelFilter.classList.add("selecting-travel-companion__filter--show");


  if (openLevelButton.classList.contains('selecting-travel-companion__filter--open'))
  {
    openLevelButton.classList.remove("selecting-travel-companion__filter--open");
    openLevelButton.classList.add("selecting-travel-companion__filter--close");
  }
  else{
    openLevelButton.classList.remove("selecting-travel-companion__filter--close");
    openLevelButton.classList.add("selecting-travel-companion__filter--open");
  }
});
