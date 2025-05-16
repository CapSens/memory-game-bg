class CardsController extends Stimulus.Controller {
  static targets = ["cardsCountInput", "cardsContainer"]

  createGame(event) {
    event.preventDefault()
    this.cardsContainerTarget.innerHTML = ""
    const cardsCount = this.cardsCountInputTarget.value
    console.log(this.cardsCountInputTarget.value);

    const shuffled = [...Array(2)].flatMap(() => Array.from({ length: cardsCount }, (_, i) => i + 1))
      .sort(() => Math.random() - 0.5);
    shuffled.forEach((step) => {
      addCard(step)
    });

  }

  flip(event) {
    event.currentTarget.classList.toggle("flipped")
  }
}
