import './style.scss'

async function fetchDataFromNotion() {
    const cards = await fetch('/api/handler')
        .then((response) => response.json()
            .then((data) => data.body.results))
    console.log(cards);
    document.querySelector('.container').innerHTML =
        cards.map(
            (card) => `
            <article class="card">
                <img src="${card.properties['Image link'].url}" alt="doodle">
                <h2 class="card__heading">${card.properties.Name.title[0].text.content}</h2>
                <div class="card__content">
                    ${card.properties.Content.rich_text[0].text.content}
                </div>
                <a href="${card.properties['Button Link'].url}" class="card__btn">${card.properties['Button Text'].rich_text[0].text.content}</a>
            </article >
    `
        ).join('')
}
fetchDataFromNotion()