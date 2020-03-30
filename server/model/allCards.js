const cardNames = 'Dolls on Call,Steal Ideas!,Harvey "Brains" Ratcliffe,Ed "Cheesecloth" McGinty,Sandy\'s Snooker \'n\' Schnaps,Smuggling!,Ted "Napolean" Bonham,Insider Trading!,Protection Racket!,Poor House,Junkyard,Jack "Cracker" Thompson,"Friendly" Gus Caspar,"Nothing beats" Rock Benson,Scouting!,"Vicious" Syd Varney,Krazy Kar Club,Pickpocket network!,"Generous" Jenny Jones,Liquidate!,Vandalism!,Inform!,"King" Richard the Third,Jenny\'s Waterfront Dive,Tommy\'s Guns \'n\' Ammo,Zoning Office,Gambit!,Master Plan!,Seance!,Renovate!,Sexy Sadie\'s,Bobby "Corduroy" Brown,Raid!,Shakedown!,Complex Scheme!,Circus of Crime!,Headquarters,Insurance Company,Louie "Savior" O\'Farrell,Paddy\'s Pub,Bookie Joint,"Peeping" Tom "Thumb","Random" Scrub Patterson,Natascha "The Squirrel" Rubin,Lamonte\'s Escort Service,One Last Heist!,Take Care of Business!,Morticia\'s Absinthe Parlor,Honest Work!,Museum Heist!,Trotsky\'s Burlesque,Suicide Mission!,Pete "Repeat" Fell,"Stingy" Stan McDowell,Dickie "Flush" Diamond,Chinatown,Massage Parlor,Loan Shark,Hideout,Estate Heist!,Sting!,Eugune "The Butcher" Midge,"Biscuits" O\'Malley,Theives\' House,Daisy\'s Cookies,Street Walkers!,"Rotten" Johnny Simmons,Insurance Scam!,Arson!,Relocate!,The Ritz,Joe\'s Gin Joint,Six Corners,"Halloween" Jack Paris,Beggars Banquet!,Sucker Con-vention,Micky Istari,Wolfgang Buttercup,"Polycephalus" Patricia Johns,Ed "Rubberface" Teach'  

const createAllCards = (cardNames) => {
    const cardNameArr = cardNames.split(',')
    const cardObj = cardNameArr.map((cardName, i) => {
        let color
        if (cardName.includes('"') || cardName === 'Wolfgang Buttercup' || cardName === 'Mickey Istari') {
            color = 'green'
        } else if (cardName.includes('!')) {
            color = 'gray'
        } else {
            color = 'blue'
        }
        return {name: cardName, id: i, isTaken: false, color}
    })
    return cardObj
}

module.exports = createAllCards(cardNames)