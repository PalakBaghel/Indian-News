console.log('welcome to console')

//api key
//d47ef77a3a5c49428fec4b57f4890daa
//We store source and api in variable
let source = 'bbc-news';
let apiKey = 'd47ef77a3a5c49428fec4b57f4890daa';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request - xhr request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        //console.log(json);
         //console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            //  console.log(element, index);
            let news = ` <div class="card" >
                         <div class="card-header" id="heading${index}">
                           <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}">
                               <b> Breaking News ${index+1}</b>
                               ${element["title"]};
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsAccordion">
                        <div class="card-body">
                     ${element["content"]}.<a href="${element["url"]}" target = "_blank"> Read more here</a>
                        </div>
                    </div>
                </div > `;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log('Some error occured');
    }
}

xhr.send();


