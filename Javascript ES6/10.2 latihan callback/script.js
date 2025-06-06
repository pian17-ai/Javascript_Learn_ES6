$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=fast&',
    success: results => {
        const movies = results.Search
        let cards = ""
        movies.forEach(movie => {
            cards += `<div class="col-md-4 my-5">
                        <div class="card">
                            <img src="${movie.Poster}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show details</a>
                            </div>
                        </div>
                    </div>`
        })

        $('.movie-container').html(cards)
        
        // -----------------------------------------------
        // for(let i = 0; i < movies.length; i++) {
        //     const name = movies[i].Title
        //     console.log(name)
        //     // title.innerHtml(name)
        // }
    },
    error: (e) => {
        console.log(e.responseText)
    }
})