const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown Jr.",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "The only way to have a friend is to be one.",
        author: "Ralph Waldo Emerson",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;