function onSearch() {
let searchTag = document.getElementById("tag").value;
console.log(searchTag);


fetch('https://api.giphy.com/v1/gifs/search?api_key=fRrQ0kSYUF12fwHq1xsGoHTbgxDHOV4W&limit=5&offset=0&rating=g&lang=en&q=' + searchTag)
    .then(response => response.json())
    .then(findGif => {
        for (let i = 0; i < 5; i++){
       document.getElementById(`gif${i}`).src = findGif.data[i].images.original.url;
    }
    })
    .catch(error => console.log(error));

   
    }