const API_KEY = '99614c58-74e8-4336-9a38-86fa5b641bae';
const API_URL_POPULAR_100 = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

getPopular100Films(API_URL_POPULAR_100)

//функция по обработке запроса
async function getPopular100Films(url){
    const response = await fetch(url,{
        method: 'GET',
        headers:{
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    })
    const responseData = await response.json()
    console.log(responseData)
    showMovies(responseData)
}

function getColorByRating(rating){
    if(rating >= 7){
        return 'green'
    }else if(rating >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

function showMovies(data){
    const moviesElement = document.querySelector('main')

    //очищаем фильмы при поиске
    document.querySelector('main').innerHTML = ''

    data.films.forEach((elem) =>{
        const movieElement = document.createElement('div')
        movieElement.innerHTML= `
        <div class="card" style="width: 18rem;">
            <img src=${elem.posterUrl} class="card-img-top" alt=${elem.nameRu}>
            <div class="card-body">
                <h5 class="card-title">${elem.nameRu}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" style='color:${getColorByRating(elem.rating)}'>${elem.rating}</li>
                <li class="list-group-item">${elem.year}</li>
                <li class="list-group-item">${elem.genres.map(genre =>`${genre.genre}`)}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Подробнее</a>
            </div>
        </div>
        `;
        moviesElement.appendChild(movieElement)
    })
}

const formSearch = document.querySelector('.d-flex')
const inputSearch = document.querySelector('#input-search')

formSearch.addEventListener('submit',(event)=>{
    event.preventDefault()

    const apiSearchUrl = `${API_URL_SEARCH}${inputSearch.value}`
    if (inputSearch.value){
        getPopular100Films(apiSearchUrl)
        inputSearch.value = ''
    }
})