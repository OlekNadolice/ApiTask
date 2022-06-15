import API_KEY from "./apiKey.js";

const container = document.querySelector(".container");
const url = `https://api.unsplash.com/photos?page=1&per_page=20&` + API_KEY;

window.addEventListener("DOMContentLoaded", () => {
  fetch(url)
    .then(data => data.json())
    .then(result => {
      result.forEach(element => {
        const date = new Date(element.created_at).toDateString();
        const card = `<section class="card" >
         <img class="card__img" src="${element.urls.regular}/>"
         <div class="card__content" >
         <h3 class="content__title" >${element.description || "No description"}</h3>
         <div class="content__data">
         <sup>by</sup>
         <a href="${element.user.links.html}">${element.user.first_name}</a>
         <sup>on</sup>
         <span>${date}<span>
         
         </div>
         </div>
        </section>`;
        container.innerHTML += card;
      });
    })
    .catch(error => {
      const errorMessage = `<div class="error__message">{${error}}</div>`;
      container.innerHTML += errorMessage;
    });
});
