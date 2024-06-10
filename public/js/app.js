// script.js

// Função para ler o JSON e criar os cards
function createCardsFromJSON(jsonData) {
    const cardsContainer = document.getElementById('cardsContainer');
    jsonData.forEach(item => {
        const cardHTML = `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                <div style="margin: 20px">
                    <img src="${item.imgLink}" class="card-img-top" alt="${item.productName}" style="max-height:200px">
                </div>
                    <div class="card-body">
                        <h5 class="card-title">${item.productName}</h5>
                        <a href="${item.urlLink}" class="btn btn-primary custom-width" style="width:250px" target="_blank">Ver oferta</a>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });
}


fetch('./public/json/topLinks.json')
    .then(response => response.json())
    .then(jsonData => createCardsFromJSON(jsonData))
    .catch(error => console.error('Erro ao carregar o JSON:', error));
