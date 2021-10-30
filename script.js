

const getWeather = () => {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(showWeather)

        .catch(function () {
            //catch any errors
        })

}

const showWeather = (data)=>{
    console.log(data)
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.disclaimer').innerHTML = data.weather[0].description;
    document.querySelector('.features').innerHTML =  `Wind ${data.wind.speed}`//`<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

}


const param = {
    url: 'http://api.openweathermap.org/data/2.5/',
    appid: '6541e5917bb549371205cdc61da9ae6b'
};



getWeather()
document.querySelector('#city').onchange = getWeather







