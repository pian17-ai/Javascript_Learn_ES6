const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKeyword.value)
    updateUI(movies);
    
});


// cara guah
//event Binding
// document.addEventListener('click', function(e) {
//     if(e.target.classList.contains('modal-detail-button')){
//         const imdbid = e.target.dataset.imdbid
//         // const movieDetail = getMovieDetail(imdbid);
//         // updateUIDetail(movieD    )
//         // console.log(imdbid)
//         updateUIDetail(imdbid)
//     }
// })

// function updateUIDetail(imdbid) {
//     fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`)
//         .then(response => response.json())
//         .then(response => {
//             const movieDetail = moreDetails(response)
//             const modalBody = document.querySelector('.modal-body');
//             modalBody.innerHTML = movieDetail;
//         })
// }

// CARA PAK DIKA
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail)
    }
})

function getMovieDetail(imdbid) {
    return fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${imdbid}`)
        .then(response => response.json())
        .then(m => m)
}

function updateUIDetail(m) {
    const movieDetail = moreDetails(m)
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail
}

function getMovies(keyword) {
     return fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI (movies) {
    let cards = '';
    movies.forEach(movie => cards += cardFilms(movie));
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards;
}

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