const readline = require('readline-sync');
const UserInput = require('./classes/UserInput');
const TextBot = require('./bots/text_bot');

const prefixes = ['Who is', 'What is', 'The History of'];

const searchTerm = readline.question('Type a Wikipedia search term: ');

const prefix = readline.keyInSelect(prefixes, 'Choose a option');

console.log(prefix);

const input = new UserInput(searchTerm, prefix);
const cst = input.getCompleteSearchTerm();

const tb = new TextBot(cst);



