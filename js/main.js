//registrando a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let reg;
      reg = await navigator.serviceWorker.register('/sw.js', { type: "module" });

      console.log('Service worker registrada! 😎', reg);

      postNews();
    
    } catch (err) {
      console.log('😥 Service worker registro falhou: ', err);
    }
  });
}


  document.getElementById('botao').addEventListener('click', () => {
      const pesquisar = document.getElementById('pesquisar').value;
          buscar(pesquisar);
     
  });
  

//064e991ffc094369adf523ed024ef145
const apiKey = "e531a884462e463aa1ccd0b3178ddcef"
let url = `https://newsapi.org/v2/top-headlines?country=us&apikey=${apiKey}`;
const main = document.querySelector('main')


async function postNews() {
     const res =  await fetch(url)
     const data = await res.json()
     
     main.innerHTML = data.articles.map(createArticle).join("\n")

     function createArticle(article){
      return `
      <div class="article">
      
      <a href="${article.url}" target="_blank">
        <img src="${article.urlToImage}" class="image" alt="${article.content}"/>
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        </a>
      </div>
      `
     }
}

async function buscar(pesquisar) {

  let url = `https://newsapi.org/v2/everything?q=${pesquisar}&apikey=${apiKey}`;

  const res =  await fetch(url)
  const data = await res.json()

  console.log(data.articles);
  main.innerHTML = data.articles.map(nova).join("\n")
           
  function nova(article) {
  //  if (pesquisar === 0) {
  //  return `
  //  <div>
  //   <p>não tem nada aqui</p>
//   </div>
//    `
    

   /// }else{
      
      return `
      <div class="article">
      
      <a href="${article.url}" target="_blank">
        <img src="${article.urlToImage}" class="image" alt="${article.content}"/>
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        </a>
      </div>
      `
 //   }
   
}
}


