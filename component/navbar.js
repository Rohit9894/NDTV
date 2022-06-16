function navbar(){
    return` <div id="up">
    <p>NDTV</p>
    <p>हिंदी न्यूज़</p>
    <p>BUSINESS</p>
    <p>MOVIES</p>
    <p>CRICKET</p>
    <p>TECH</p>
    <p>FOOD</p>
    <p>CRYPTO</p>
    <p>WEB STORIES</p>
    <p>EDUCATION</p>
    <p>AUTO</p>
    <p>SWASTH</p>
    <p>LIFESTYLE</p>
    <p>HEALTH</p>
    <p>SHOPPING</p>
    <p>ART</p>
</div>
<div id="down">
  <a id="india" href="index.html">  <img id="img"
  src="data:image/png;base64,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" /></a>
    <p>LIVE TV</p>
 <p><a href="latest.html">LATEST</a></p>
    <p>COVID</p>
    <p><a href="india.html">INDIA</a></p>
    <p><a href="opinion.html">OPINION</a></p>

    <p>VIDEO</p>
    <p><a href="city.html">CITIES</a></p>
    <p><a href="world.html">WORLD</a></p>
    <p><a href="offbeat.html">OFFBEAT</a></p>
    <p><a href="trends.html">TRENDS</a></p>
    <p><a href="photo.html">PHOTOS</a></p>
    <span class="material-symbols-outlined">
        more_horiz
        </span>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-solid fa-bell"></i>

    <button id="button1" onclick="myFunction()"> <i  id="super" class="fa-solid fa-magnifying-glass" ></i></button>

    
</div>
`
}

export default navbar;