const params = new URLSearchParams(window.location.search);
const pkgId = params.get('id');

fetch("../data/detail.json")
  .then((response) => response.json())
  .then((data) => {
    const selectedpkg = data.find(pkg => pkg.id == pkgId);
    console.log(selectedpkg);
    if (selectedpkg) {
      document.getElementById("pkg-detail").innerHTML = `
        <div class="header">
        <div class="package-banner">
            <img src="${selectedpkg.img}" alt="">
        </div>
    </div>
    <div class="package-detail-container">

        <div class="col-1">
            <div class="header-section">
                <h1 class="heading">${selectedpkg.head}</h1>
                <p>${selectedpkg.content}</p>
            </div>

            <div class="details-section">
                <div>
                    <i class="ri-calendar-fill" style="color: #b9a50e"></i>
                    <p>${selectedpkg.duration_title}</p>
                    <p>${selectedpkg.time}</p>
                </div>
                <div>
                    <i class="ri-group-fill" style="color: #b9a50e"></i>
                    <p>${selectedpkg.grp_title}</p>
                    <p>${selectedpkg.people}</p>
                </div>
                <div>
                    <i class="ri-map-pin-fill" style="color: #b9a50e"></i>
                    <p>${selectedpkg.Type_title}</p>
                    <p>${selectedpkg.type}</p>
                </div>
            </div><br><br>

            <div class="tour-highlights">
                <h1>${selectedpkg.Tour_title}</h1>
                <p>${selectedpkg.tour_content_1}</p>
                <p>${selectedpkg.tour_content_2}</p>
                <p>${selectedpkg.tour_content_3}</p>
                <p>${selectedpkg.tour_content_4}</p>
                <p>${selectedpkg.tour_content_5}</p>
            </div><br><br>


            <div class="quick-itenerary">
                <h1>${selectedpkg.itenirary_title}</h1>
                <p>${selectedpkg.itenirary_content_1}</p>
                <p>${selectedpkg.itenirary_content_2}</p>
                <p>${selectedpkg.itenirary_content_3}</p>
                <p>${selectedpkg.itenirary_content_4}</p>
            </div><br><br>

            <div class="download-box">
                <h1>${selectedpkg.download_title}</h1>
                <p>${selectedpkg.download_content}.</p>

                <button><a href="${selectedpkg.download_btn_link}">${selectedpkg.download_btn}</a></button>
            </div>
        </div>
        <div class="col-2">
            <div>
                <p>${selectedpkg.price_title}</p>
                <p class="price">${selectedpkg.price}</p>

                <button>${selectedpkg.booknow_btn}</button>

            </div>

            <div class="download-documents">
                <h1>${selectedpkg.download_documents_title}</h1>

                <button><a href="${selectedpkg.download_documents_btn_link}">${selectedpkg.download_documents_btn}</a></button>
            </div>
        </div>

    </div>
      `;
    } else {
      document.getElementById("pkg-detail").innerHTML = `<p>Package not found.</p>`;
    }
  });