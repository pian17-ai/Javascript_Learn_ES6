$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers&',
    success: movies => console.log(movies)
})