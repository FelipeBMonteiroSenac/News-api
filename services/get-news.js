const API_KEY = "f1d6d1f59d2e4558aa6f8f1a925a6740";
const url = 'https://newsapi.org/v2/everything?' +
    'q=Compostagem&' +
    'pageSize=20&' +
    'sortBy=popularity&' +
    'apiKey=' + API_KEY;

var req = new Request(url);

async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);


//cria cards na tela
        const Cards = document.getElementById('container')
        console.log(json.articles)

//cria conteudo dos cards
        json.articles.forEach(item => {
            const art = document.createElement('div');

                const img = document.createElement('img');
                img.innerHTML = item.urlToImage;
                art.appendChild(img);

                const description = document.createElement('p');
                description.innerHTML = item.description;
                art.appendChild(description);

                const name = document.createElement('p');
                name.innerHTML = item.name;
                art.appendChild(name);

                const url = document.createElement('button');
                url.innerHTML = item.url;
                art.appendChild(url);

            console.log(art)

        Cards.appendChild(art)
        });

    } catch (error) {
        console.error(error.message);
    }
}

getData()





