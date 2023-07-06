const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <div class="topnav" id="myTopnav">
    <nav>
      <a href="index.html">Islam</a>
    </nav>
     
      <div class="dropdown">
        <button class="dropbtn">Quran</button>
        <div class="dropdown-content">
          <a href="surah-al-fatihah.html">Surah Al Fatihah</a>
        </div>
      </div> 

      <div class="dropdown">
        <button class="dropbtn">Seerah</button>
        <div class="dropdown-content">
          <a href="seerah-makkan-period.html">Makkan Period</a>
        </div>
      </div> 

      <div class="dropdown">
        <button class="dropbtn">Salah</button>
        <div class="dropdown-content">
          <a href="number-of-rakat.html">Number of Rakat</a>
          <a href="traveling-salah.html">Travelling Salah</a>
          <a href="salah-timings.html">Salah Timings</a>
          <a href="salah-meanings.html">Salah Meanings</a>
        </div>
      </div> 

      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
    `;
}

createNav();

