
const api_key = "d1d88748c1ae0055c9e697d23277f09b"

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getData(lat, lon){
    let city = document.getElementById("city").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
       
    let res = await fetch(url);
    let data = await res.json()
    append(data)
    console.log(data);

}
    function append(data){

        let box =  document.getElementById("box")
        box.innerHTML = null;
        let h3 = document.createElement("h3");
        h3.innerText = data.name;

        let p = document.createElement("p")
        p.innerText = `Current Temp: ${data.main.temp}`;

        let p2 = document.createElement("p")
        p2.innerText = `Max temp: ${data.main.temp_max}`

        let p3 = document.createElement("p")
        p3.innerText = `Min temp: ${data.main.temp_min}`

        let p6 = document.createElement("p")
        p6.innerText = `Humidity: ${data.main.humidity}`

        let p4 = document.createElement("p")
        p4.innerText = `Wind Speed: ${data.wind.speed}`

        let p5 = document.createElement("p")
        p5.innerText = `Clouds: ${data.clouds.all}`

        let p7 = document.createElement("p")
        p7.innerText = `Sunrise: ${data.sys.sunrise}`

        let p8 = document.createElement("p")
        p8.innerText = `Sunset: ${data.sys.sunset}`

       box.append(h3,p,p2,p3,p6,p4,p5,p7,p8)

       let iframe = document.getElementById("gmap_canvas");
       iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed` 

    }
//  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 

