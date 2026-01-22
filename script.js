document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     SCREEN NAVIGATION
  ====================== */
  const screens = document.querySelectorAll(".screen");

  function show(id){
    screens.forEach(s => s.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  }

  const eyeImg  = document.getElementById("eye-img");
  const eyeText = document.getElementById("eye-text");

  eyeText.addEventListener("click", () => {
    eyeImg.style.transform = "scale(2.5)";
    eyeImg.addEventListener("transitionend", () => {
      show("brain-screen");
    }, { once:true });
  });

  document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", () => {
      show(folder.dataset.target);
    });
  });

  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      show("brain-screen");
    });
  });

  /* ======================
     FILMS DATA
  ====================== */
  const films = {
    tmifm:{
      title:"The Moon Is a Father of Mine",
      text:`First project I have ever worked on.<br><br>
      Directed by George Ovashvili.<br>
      Feature-length film.<br>
      Working period: Sept 2023 – Mar 2024`
    },
    home:{
      title:"This Is Your Home",
      text:`Directed by George Ovashvili.<br>
      Social short film about plastic pollution.`
    },
    cov:{
      title:"Call of the Void",
      text:`American feature film shot in Georgia.<br>
      Directed by Simon Ross.<br>
      Not released yet.`
    },
    klifhaus:{
      title:"Klifhaus",
      text:`Feature-length horror film with Soviet elements.<br>
      Directed by Tomer Almagor.<br>
      Not released yet.`
    }
  };

  const filmPopup = document.getElementById("film-popup");
  const filmTitle = document.getElementById("film-title");
  const filmText  = document.getElementById("film-text");
  const closeFilm = document.getElementById("close-film");

  /* ======================
     COMMERCIALS DATA
  ====================== */
  const commercials = {
    c03:{title:"ALMA",text:"Commercial shoot for billboard company Alma. Position: Casting.",link:"https://www.instagram.com/reel/DPOvE8dCbIJ/"},
    c04:{title:"AVERSI",text:"Valentine’s Day commercial for Aversi Pharmacy Market. Position: Casting Assistant.",link:"https://www.facebook.com/AversiPharma/videos/2328201994215753/"},
    c05:{title:"BAKURIANI",text:"Commercial for Bakuriani water featuring footballer George Mikautadze.",link:"https://www.instagram.com/reel/DLC88TzMe8d/"},
    c06:{title:"BarM",text:"Commercial for sweets company BarM. Position: Casting.",link:"https://www.instagram.com/reel/DQEnujECL87/"},
    c07:{title:"BOG – New Year",text:"New Year commercial for Bank of Georgia.",link:"https://www.instagram.com/reel/DSsDqekAoR0/"},
    c08:{title:"BOG – Independence Day",text:"Historical Independence Day commercial.",link:"https://www.instagram.com/reel/DKFTczai2D5/"},
    c09:{title:"Caucasus Auto",text:"Commercial for Georgian car import service. Position: Casting.",link:"https://www.instagram.com/reel/DSAJjdVjgC2/"},
    c10:{title:"FLORYN",text:"Commercial shot in Georgia and Germany.",link:"https://www.instagram.com/reel/DJ0pgAwKPVy/"},
    c11:{title:"ALDAGI",text:"Humorous insurance commercial.",link:"https://www.instagram.com/reel/DGTe-ekIo5s/"},
    c12:{title:"KFC",text:"Very challenging KFC commercial casting Asians in Georgia.",link:"https://www.instagram.com/reel/DRw-VZXiLMc/"},
    c13:{title:"KIA",text:"Three-part commercial about free time with a car.",link:"https://www.instagram.com/reel/DJoUgmfIn-V/"},
    c14:{title:"McDonald’s App",text:"Three-part app campaign.",link:"https://www.instagram.com/reel/DJrDeWCIKvS/"},
    c15:{title:"NBD",text:"Arabic commercial for UAE bank.",link:"https://www.instagram.com/reel/DQMlTSAiEJj/"},
    c16:{title:"NFL – DAZN",text:"DAZN NFL commercial. I appear in it.",link:"https://www.instagram.com/reel/DOJIzbqkZz5/"},
    c17:{title:"Procredit Bank",text:"Family casting + dog.",link:"https://www.instagram.com/reel/DFqJQDToIaL/"},
    c18:{title:"RAID",text:"Live-action game commercial. Twins + stunts.",link:"https://www.instagram.com/reel/DHlb2AwIR50/"},
    c19:{title:"SALOMON",text:"Colorful commercial with dancer lead.",link:"https://www.instagram.com/reel/DNLcKDAIYfq/"},
    c20:{title:"SNIPES",text:"Actors and parkour performers.",link:"https://www.instagram.com/reel/DQ35PtijfDH/"},
    c21:{title:"TBC Bank – Students",text:"Students preparing for university.",link:"https://www.facebook.com/tbcbank/videos/2489110984800372/"},
    c22:{title:"TBC Bank – Band",text:"Band preparing to go on stage.",link:"https://www.instagram.com/reel/DN7w7LhCFXi/"},
    c23:{title:"WAADA",text:"Multicultural casting.",link:"https://www.instagram.com/reel/DL-ArMHzw3J/"},
    c24:{title:"ZOOMER – Women’s Day",text:"Women’s Independence Day commercial.",link:"https://www.instagram.com/reel/DG6DKGmIwI_/"},
    c25:{title:"ZOOMER – Birthday",text:"Birthday commercial with dancers.",link:"https://www.instagram.com/reel/DQEHWPeDFNK/"}
  };

  const commercialPopup = document.getElementById("commercial-popup");
  const commercialTitle = document.getElementById("commercial-title");
  const commercialText  = document.getElementById("commercial-text");
  const commercialLink  = document.getElementById("commercial-link");
  const closeCommercial = document.getElementById("close-commercial");

  /* ======================
     GLOBAL CLICK HANDLER
  ====================== */
  document.addEventListener("click", e => {

    const filmCard = e.target.closest(".film-card");
    if (filmCard) {
      const film = films[filmCard.dataset.film];
      if (film) {
        filmTitle.innerHTML = film.title;
        filmText.innerHTML  = film.text;
        filmPopup.classList.add("active");
      }
    }

    const commercialItem = e.target.closest(".commercial-item");
    if (commercialItem) {
      const c = commercials[commercialItem.dataset.commercial];
      if (c) {
        commercialTitle.innerHTML = c.title;
        commercialText.innerHTML  = c.text;
        commercialLink.href       = c.link;
        commercialPopup.classList.add("active");
      }
    }

  });

  closeFilm.onclick = () => filmPopup.classList.remove("active");
  closeCommercial.onclick = () => commercialPopup.classList.remove("active");

});

