//Retrieve a card from a stack
export function getItem(cards, position) {
  return cards[ position ]
}

//Exchange a card in the stack
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard
  return cards
}

//Insert a card at the top of the stack
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard)
  return cards
}

//Remove a card from the stack
export function removeItem(cards, position) {
  cards.splice(position, 1)
  return cards
}

//Remove the top card from the stack
export function removeItemFromTop(cards) {
  cards.pop()
  return cards
}

//Insert a card at the bottom of the stack
export function insertItemAtBottom(cards, newCard) {
  //cards.splice(0,0,newCard)
  cards.unshift(newCard);
  return cards
}

//Remove a card from the bottom of the stack
export function removeItemAtBottom(cards) {
  cards.shift()
  return cards
}

//Check the size of the stack
export function checkSizeOfStack(cards, stackSize) {
  return stackSize === cards.length
}
