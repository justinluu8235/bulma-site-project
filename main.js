let titleElement = document.querySelector('#title-element'); /// --> This will be data[i].display_title;
let openingDateElement = document.querySelector('#opening-date'); /// --> data[i].opening_date;
let headlineElement = document.querySelector('#headline');/// --> data[i].headline;
let summaryElement = document.querySelector('#summary-short'); /// data[i].summary_short
let searchForm = document.querySelector('#search-form');
let searchInput = document.getElementById("query");


document.addEventListener("DOMContentLoaded", function () {

    searchForm.addEventListener("submit", fetchFromNYTimes);


    // document.getElementById("stop").addEventListener("click", stopSlides);
});


function fetchFromNYTimes(event) {
    event.preventDefault();
    API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + searchInput.value + '&api-key=8L0mksGfCzIBHcSP1lpQJJO4F9103Hrp';
    fetchResults = fetch(API_URL);
    fetchResults.then(function (response) {
        return response.json();
    }).then(function (data) {


        data = data.results.filter(function (item) {
            // Filter for image posts (remove text posts)
            return item.display_title != '';
          });
          console.log(data[1].link.url);

        for(let i=0; i<cardsData.length || i<data.length; i++){
            cardsData[i].user.title = data[i].display_title;
            cardsData[i].user.handle = data[i].opening_date;
            cardsData[i].user.name = "Article name: " + data[i].headline;
            let summaryShort = data[i].summary_short
            console.log(summaryShort);
            if(summaryShort.length > 150){
                summaryShort = summaryShort.slice(0,150);
            }
            cardsData[i]['content'] = summaryShort;
            //let anchor = '<a href="' + data[i].link.url + '">' +'Read more at NY Times</a>';
            //cardsData[i]['content'] += anchor;
        }


    });
    
}














let cardsData = [{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
    id: 1,
    image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
    avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
    user: {
        name: 'Okinami',
        handle: 'twitterid',
        title: 'Lead Developer'
    },
    content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
]