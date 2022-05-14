
const dataContainer = document.querySelector('.row-cols-1');

const getTVShowDetails=async()=>{
    try {
        const fetchRes= await fetch("https://api.tvmaze.com/shows?page=1");
        const tvshows = await fetchRes.json();
        //console.log(`${tvshows[0].name} || ${tvshows[0].genres[0]} || ${tvshows[0].officialSite}|| ${tvshows[0].image.original}||${tvshows[0].summary}`);
        //console.log(tvshows);
        return tvshows;
    } catch (error) {
        console.log('There is an error during fetching the data and it may due to ' + error);        
    }
}

getTVShowDetails().then(tvshows => {
    tvshows.forEach(tvshow => displayTVShowData(tvshow));
});

const displayTVShowData=(tvshow)=>{    
  dataContainer.innerHTML += `<div class="col" id="${tvshow.id}">
  <div class="card h-100">
    <img src="${tvshow.image.original}" class="card-img-top" alt="${tvshow.name}"/>
    <div class="card-body">
      <h5 class="card-title">${tvshow.name}</h5>              
      <p class="text-muted">${tvshow.genres[0]}</p>              
      <p class="card-text">${tvshow.summary}</p>              
      <a href="${tvshow.officialSite}/">Official link</a> 
    </div>
  </div>
</div>`;

}
