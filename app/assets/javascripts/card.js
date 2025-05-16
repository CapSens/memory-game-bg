const IMAGES_URL = [
  "ace_of_hearts",
  "2_of_hearts",
  "3_of_hearts",
  "4_of_hearts",
  "5_of_hearts",
  "6_of_hearts",
  "7_of_hearts",
  "8_of_hearts",
  "9_of_hearts",
  "10_of_hearts",
  "jack_of_hearts2",
  "queen_of_hearts2",
  "king_of_hearts2",
];

function addCard(value) {
  const cardContainer = document.querySelector('.cards-container');
  const newCard = document.createElement('button');
  newCard.dataset.action = "click->cards#flip"
  newCard.type = 'button';
  newCard.classList.add('flip-card');
  newCard.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="/assets/card-back.png" alt="Card back">
      </div>
      <div class="flip-card-back">
        <img src="/assets/${IMAGES_URL[value]}.png" alt="Card ${value}">
      </div>
    </div>
  `;
  cardContainer.appendChild(newCard);
}
