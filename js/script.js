
// card for category
fetch("../data/category.json")
  .then(res => res.json())
  .then(data => {
    const isHome = document.getElementById("allCategories") ? true : false;
    if (isHome) {
      const wrap = document.getElementById("allCategories");
      data.forEach(cat => {
        wrap.innerHTML += `
        <section class="category">
        <div class= "category-title">
          <h2>${cat.heading}</h2>
        </div>
          <div class="cards"></div>
        </section>
      `;
        const box = wrap.querySelector(".category:last-child .cards");
        cat.items.slice(0,3).forEach(item => {
          box.innerHTML += `
          <div class="card">
            <div class="card-banner">
              <img src="${item.image}" alt="">
            </div>
            <div class="card-content">
              <h4>${item.title}</h4>
              <p>${item.duration}</p>
              <h3>${item.price}</h3>
              <p>${item.quant}</p>
            </div>
            <div class="c-btn">
              <button><a href="./pkg-detail.html?id=${item.id}">View Details</a></button>
            </div>
          </div>
        `;
        });
      });

    }
    else {
      const page = location.pathname.split("/").pop().replace(".html", "");
      const selected = data.find(c => c.category === page);

      document.getElementById("title").innerText = selected.heading;
      const box = document.querySelector(".cards");
      selected.items.forEach(item => {
        box.innerHTML += `
        <div class="card">
          <div class="card-banner">
            <img src="${item.image}" alt="">
          </div>
          <div class="card-content">
             <h4>${item.title}</h4>
              <p>${item.duration}</p>
          <h3>${item.price}</h3>
            <p>${item.quant}</p> 
          </div>
          <div class="c-btn">
            <button><a href="./pkg-detail.html?id=${item.id}">View Details</a></button>
          </div>
        </div>
      `;
      });
    }

  });

// toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click",()=>{
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
// end


//loader
window.addEventListener("load", function () {
  let loadingScreen = document.getElementById("loading-screen");

  setTimeout(function () {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1000);
});




















