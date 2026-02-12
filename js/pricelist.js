fetch("../data/list.json")
    .then((response => response.json()))
    .then(data => {
        var product = "";
        data.forEach(element => {
            product += `
        <div class="pcard">
                <div class="card-img">
                    <img src="${element.img}" alt="">
                </div>
                <div class="card-text">
                    <h1>${element.title}</h1>
                    <h4>${element.price}</h4>
                    <p>${element.description}</p>
                </div>
                <div class="card-button">
                   <button><a href=${element.link}>${element.btn}</a></button>
                </div>
            </div>
        `
            document.getElementsByClassName("price-cards")[0].innerHTML = product;
        })
    });