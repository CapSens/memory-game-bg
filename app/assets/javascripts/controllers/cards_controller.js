class CardsController extends Stimulus.Controller {
  static targets = ["cardsCountInput", "cardsContainer"]

  connect(){
    this.flippedCard = null
  }

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

    if (event.currentTarget.classList.contains("flipped")){
      setTimeout(()=>{
        this.checkPair(event.currentTarget)
      }, 1000
      )
      
    } else {
      this.flippedCard = null
    }
  }

  checkPair(currentTarget){
    console.log("checkPair")
    if(!this.flippedCard) {
      console.log("no flippedCard");
      this.flippedCard = currentTarget
      console.log(this.flippedCard)
    } else if (this.flippedCard.dataset.value != currentTarget.dataset.value) {
      console.log("cards differents");      
      currentTarget.classList.toggle("flipped");
      this.flippedCard.classList.toggle("flipped");
      this.flippedCard = null
    }
  }
}
