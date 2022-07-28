

function clima () {

 

  let nombreCiudad = document.getElementById ("ciudad").value;


  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + nombreCiudad + "&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17")

  .then(response=>response.json())

  .then(data=> {

  alert ("La temperatura en"+ " " + nombreCiudad + " " + "es de:" + " " + data.main.temp + " " +"grados" + "\n" + "El clima está:"+ " " + data.weather[0].description);


  })


  alert ("Estamos buscando")

  
}

