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
          <a href="#">Divine Speech</a>
          <a href="#">A Thematic Overview</a>
          <a href="#">A Concise Summary</a>
          <a href="#">A Deeper Look</a>
        </div>
      </div> 

      <div class="dropdown">
          <button class="dropbtn">Seerah</button>
          <div class="dropdown-content">
            <a href="#">Makkan Period</a>
            <a href="#">Madani Period</a>
          </div>
        </div> 

        <div class="dropdown">
          <button class="dropbtn">History</button>
          <div class="dropdown-content">
            <a href="#">Mothers of the Believers</a>
            <a href="#">Five Abdullahs</a>
            <a href="#">Abu Huraira</a>
            <a href="#">The Firsts</a>
            <a href="#">Four Imams</a>
            <a href="#">Imam Bukhari</a>
          </div>
        </div> 

        <div class="dropdown">
          <button class="dropbtn">Salah</button>
          <div class="dropdown-content">
            <a href="#">Timings</a>
            <a href="#">Number of Rakat</a>
            <a href="#">Meanings</a>
          </div>
        </div> 

      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
    `;
}

createNav();

