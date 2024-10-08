const API_KEY = "ae941e547f33d3688f2185888d539179";
const topic = 'Compostagem' 

const url = 'https://gnews.io/api/v4/search?q='+
            topic+
            '&apikey='+
            API_KEY;

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





