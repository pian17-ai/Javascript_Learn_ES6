// $('.search-button').on('click', function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search
//             let cards = ""
//             movies.forEach(movie => {
//                 cards += cardFilms(movie)
//             })
    
//             $('.movie-container').html(cards)
    
//             // KETIKA TOMBOL di btn KLIK
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: `http://www.omdbapi.com/?apikey=dca61bcc&i=${$(this).data('imdbid')}`,
//                     success: movie => {
//                         const movieDetail = moreDetails(movie)
    
//                         $('.modal-body').html(movieDetail)
//                     },
//                 error: (e) => {
//                     console.log(e.responseText)
//                 }
//                 });
//             })
            
//             // -----------------------------------------------
//             // for(let i = 0; i < movies.length; i++) {
//             //     const name = movies[i].Title
//             //     console.log(name)
//             //     // title.innerHtml(name)
//             // }
//         },
//         error: (e) => {
//             console.log(e.responseText)
//         }
//     })
// })

// fetch
const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function() {

    const inputText = document.querySelector('.input-keyword')
    fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${inputText.value}`)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = ''
            movies.forEach(movies => cards += cardFilms(movies))
            const movieContainer = document.querySelector('.movie-container')
            movieContainer.innerHTML = cards

            // when click a button details
            const modalDetailButton = document.querySelectorAll('.modal-detail-button')
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbid = this.dataset.imdbid;
                    fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`)
                        .then(response => response.json())
                        .then(response => {
                            const movieDetail = moreDetails(response)
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        })
                })
            })
        })
        .catch()
})

function cardFilms (movie) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}" >Show details</a>
                     </div>
                </div>
            </div>`
}

function moreDetails (movie) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${movie.Poster}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${movie.Genre}</li>
                            <li class="list-group-item"><strong>Rating : </strong>${movie.imdbRating}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${movie.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
                                        
}