class CardsController extends Stimulus.Controller {
  connect() {
    for (let step = 0; step <= 13; step++) {
      addCard(step)
      addCard(step)
    }
  }

  flip(event) {
    event.currentTarget.classList.toggle("flipped")
  }
}
