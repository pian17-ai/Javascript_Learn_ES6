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
                                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}" >Show details</a>
                            </div>
                        </div>
                    </div>`
        })

        $('.movie-container').html(cards)

        // KETIKA TOMBOL di btn KLIK
        $('.modal-detail-button').on('click', function() {
            $.ajax({
                url: `http://www.omdbapi.com/?apikey=dca61bcc&i=${$(this).data('imdbid')}`,
                success: result => {
                    const movieDetail = `<div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="${result.Poster}" class="img-fluid" alt="">
                                                </div>
                                                <div class="col-md">
                                                    <ul class="list-group">
                                                        <li class="list-group-item"><h4>${result.Title} (${result.Year})</h4></li>
                                                        <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                                                        <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                                                        <li class="list-group-item"><strong>Genre : </strong>${result.Genre}</li>
                                                        <li class="list-group-item"><strong>Rating : </strong>${result.imdbRating}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>`;

                    $('.modal-body').html(movieDetail)
                },
            error: (e) => {
                console.log(e.responseText)
            }
            });
        })
        
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