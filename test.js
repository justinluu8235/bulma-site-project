fetchResults = fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=8L0mksGfCzIBHcSP1lpQJJO4F9103Hrp');
fetchResults.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
});

let searchInput = document.getElementById("query").value
console.log(searchInput = '  sd');
