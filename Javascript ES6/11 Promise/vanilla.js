const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.status === 200) {
        if(xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response))
        }
    } else {
        console.log(xhr.responseText)
    }
}

xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers&');
xhr.send();