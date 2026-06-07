'use strict';


export function displayNews(data, newsContainer) {
    newsContainer.innerHTML = '';

    data.forEach(article => {

        if (!article.title || !article.description || !article.url) {
            console.error('Missing required properties in article:', article);
            return;
        }

        const newsCard = document.createElement('div');
        newsCard.classList.add('newsCard');
        newsCard.innerHTML = `
            <h2>${article.title}</h2>
            <h3>${article.description}</h3>
            <p>${article.content}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}