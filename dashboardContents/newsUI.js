'use strict';

export function displayNews(data, newsContainer) {
    newsContainer.innerHTML = '';

    // Guardian nests the article array under response.results.
    // This line works whether you pass the whole response or the array itself.
    const articles = Array.isArray(data) ? data : (data?.response?.results ?? []);

    articles.forEach(article => {
        const fields = article.fields ?? {};

        // Only webTitle + webUrl are truly required to build a clickable card.
        // Description/headline/thumbnail are "nice to have" and handled below.
        if (!article.webTitle || !article.webUrl) {
            console.error('Missing required properties in article:', article);
            return;
        }

        const newsCard = document.createElement('div');
        newsCard.classList.add('newsCard');
        newsCard.innerHTML = `
            ${fields.thumbnail ? `<img class="news-thumbnail" src="${fields.thumbnail}" alt="${article.webTitle}">` : ''}
            <div class="news-content">
            <h2 class="news-webTitle">${article.webTitle}</h2>
            
            <p class="web-desc">${fields.trailText ?? 'No description available.'}</p>
            </div>
            <a href="${article.webUrl}" target="_blank" rel="noopener">Read More</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}