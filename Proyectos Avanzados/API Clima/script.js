let weather = {
    "apiKey": "ffb21dc64329c90c7d4349b4b081eb28",
    fetchWeather: function () {
        fetch("https://v1.nocodeapi.com/juacoconte/ow/UpfHRHGqmxdTqfQv/byCityName?q=Cordoba")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
}

const que sea tormenta 