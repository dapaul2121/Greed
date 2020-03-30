const cardNames = 'Dolls on Call,Steal Ideas!,Harvey "Brains" Ratcliffe,Ed "Cheesecloth" McGinty,Sandy\'s Snooker \'n\' Schnaps,Smuggling!,Ted "Napolean" Bonham,Insider Trading!,Protection Racket!,Poor House,Junkyard,Jack "Cracker" Thompson,"Friendly" Gus Caspar,"Nothing beats" Rock Benson,Scouting!,"Vicious" Syd Varney,Krazy Kar Club,Pickpocket network!'  

const createAllCards = (cardNames) => {
    const cardNameArr = cardNames.split(',')
    const cardObj = cardNameArr.map((cardName, i) => {
        return {name: cardName, id: i}
    })
    return cardObj
}

module.exports = createAllCards(cardNames)