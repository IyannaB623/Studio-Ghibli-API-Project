fetch("https://ghibliapi.vercel.app/api/films")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayFilm(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  


function displayFilm(data){

    for(let i=0; i<data.length; i++){

    const film = data[i]
    const filmSection = document.getElementById("films");
    const heading = document.createElement('h1');
    const theBoxSection = document.createElement('section')
    

  

    theBoxSection.className = "filmBox"

    const filmName = film.title
    heading.innerHTML = filmName
    filmSection.appendChild(heading);

    const filmImg = document.createElement("img");
    filmImg.src = film.image
    filmSection.appendChild(filmImg);
    //document.body.style.backgroundImage = "url('" + film.movie_banner + "')";

    const filmId = film.id
    theBoxSection.setAttribute('id',`${filmId}`)
    
    filmSection.appendChild(theBoxSection)
    theBoxSection.appendChild(heading)
    theBoxSection.appendChild(filmImg)

 


    //banner section with slideshow
    const bannerSection = document.getElementById("banner")
    const createImage = document.createElement("img");
    const bannerimages = data[i].movie_banner
    createImage.src = bannerimages
    createImage.className = "bannerImage"
    bannerSection.appendChild(createImage)

    //CONTINUE HERE THIS WORKED AS FAR AS CLICKING ON BOX AND GETTING FUNCTION TO OCCUR NOW WORK ON EXPAND WORK
    let hey = document.getElementById(`${film.id}`);
    hey.addEventListener('click', doThis)

    let closeButton = document.getElementById("close-button")
    closeButton.addEventListener('click', closeDetails)

    function closeDetails(){
    document.getElementById("expand").style.display = "none"; 
    }
    
    const bigFilmName = film.title
    const bigDirector = film.director
    const bigImg = film.movie_banner
    const bigDescription = film.description
    const release = film.release_date
    const runTime = film.running_time

    function doThis(){
        document.getElementById("expand").style.display = "flex";
        document.getElementById("title").innerHTML = `${bigFilmName}`
        document.getElementById("director").innerHTML = `Director: ${bigDirector}`
        document.getElementById("picture").src = `${bigImg}`
        document.getElementById("description").innerHTML = `${bigDescription}`
        document.getElementById("moreDetails").innerHTML = `Runtime: ${runTime} minutes Release Date: ${release}`
        console.log(film.id)
        console.log('the click is working still?')
    }



    }
    //////
    const images = document.querySelectorAll(".bannerImage");
    let i=0
  
    setInterval(function(){ 
      if(i == 0) {
        images[i].style.display = 'block';
      } else if(i == images.length ) {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
      } else {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
      }
      
     i++;
     
  }, 3500);
 
  

}

//fetch("https://ghibliapi.herokuapp.com/films")


/*
getDetails.addEventListener('click', pleaseWork)
const getDetails = document.getElementsByClassName('detailsButton');

//event Listener



function pleaseWork(){
    console.log('woah now it worked now')
}



function showfield() {
    document.getElementsByClassName("eSection").style.display="block";
}








//un comment out the description once I figure out to do an on click to expand to see more. 



/*
let i=0

setInterval(function(){

    if(i == 0) {
        data[i].movie_banner.style.display = 'block';
      } else if(i == data.length ) {
        data[i - 1].movie_banner.style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
      } else {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
      }
      
     i++;
}, 3500)
*/

/*
    //expand section code

    theBoxSection.appendChild(expandSection)
    expandSection.className = "eSection"
    const expandheading = document.createElement('h2')
    const theDescription = document.createElement('p')

    const expandTitle = film.title
    expandheading.innerHTML = expandTitle
    expandSection.appendChild(expandheading)

    const filmDescription = film.description 
    theDescription.innerHTML = filmDescription
    expandSection.appendChild(theDescription)
*/
