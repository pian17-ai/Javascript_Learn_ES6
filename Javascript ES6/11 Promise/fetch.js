fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers&')
    .then(response => response.json())
    .then(response => console.log(response))