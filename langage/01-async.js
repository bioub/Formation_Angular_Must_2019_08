const fs = require('fs-extra');

// API Synchrone
try {
  const data = fs.readFileSync('./source.txt');
  fs.writeFileSync('./dest.txt', data);
  console.log('DONE');
} catch (err) {
  console.log(err);
}

// ^
// |
// | { readFileSync - writeFileSync - log }
// +--------------------------------------->

// API Asynchrone basé sur des callbacks Node.js
// Callback Hell / Pyramid of Doom
fs.readFile('./source.txt', (err, data) => {
  if (err) {
    return console.log(err);
  }
  fs.writeFile('./source.txt', data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('DONE');
  });
});

// ^
// |                      writeFile            log
// | { readFile } ....... =>        .......... =>
// +--------------------------------------->

// API Asynchrone basé sur des promesses / Promise
fs.readFile('./source.txt')
  .then((data) => fs.writeFile('./source.txt', data))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err));

// API Asynchrone basé sur async/await ES2017
// ESNext (top-level await ES2020)
(async () => {
  try {
    const data = await fs.readFile('./source.txt');
    await fs.writeFile('./dest.txt', data);
    console.log('DONE');
  } catch (err) {
    console.log(err);
  }
})();


// API Asynchrone basé sur async/await ES2017
// ESNext (top-level await ES2020)
(async () => {
  const data = await fs.readFile('./source.txt');
  await fs.writeFile('./dest.txt', data);
  console.log('DONE');
})().catch((err) => console.log(err));