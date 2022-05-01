const url = "https://api.openweathermap.org/data/2.5/";
const appid = "ef8eba10b007fd446e11775ff5f1e58d";



const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
    searchBar.value = "";
  }
}

const getResult = (cityName) => {
  let query = url+"weather?q="+cityName+"&appid="+appid+"&units=metric&lang=tr";
  console.log(query)
  fetch(query)
  .then(response => response.json())
  .then(displayResult)
}

const displayResult = (result) => {
  let city = document.querySelector(".sehir");
  city.innerText = result.name +", "+result.sys.country;

  let temp = document.querySelector(".temp");
  temp.innerText = Math.round(result.main.temp)+"°C" ;

//  let minmax = document.querySelector(".minmax");
//  minmax.innerText = result.main.temp_min+ "/" +result.main.temp_max;

  let desc = document.querySelector(".desc");
  desc.innerHTML = result.weather[0].description;
}

const searchBar = document.querySelector(".inp");
  searchBar.addEventListener("keypress", setQuery);
