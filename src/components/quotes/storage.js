var quotes = [
    {
        id: 1,
        text: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    },
    {
        id: 2,
        text: 'So many books, so little time.',
        author: 'Frank Zappa'
    },
    {
        id: 3,
        text: 'If a black cat crosses your path, it signifies that the animal is going somewhere.',
        author: 'Groucho marx'
    },
    {
        id: 4,
        text: `In three words I can sum up everything I've learned about life: it goes on.`,
        author: 'Robert Frost'
    },
    {
        id: 5,
        text: `A friend is someone who knows all about you and still loves you.`,
        author: `Elbert Hubbard`
    },
    {
        id: 6,
        text: `Always forgive your enemies; nothing annoys them so much.`,
        author: `Oscar Wilde`
    },
]

const getRandomQuote = function() {
    const rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
}

const addQuoute = function(text, author) {
    const quote = {
        id: quotes.length,
        text,
        author
    }
    quotes.push(quote);
}

export { getRandomQuote, addQuoute };