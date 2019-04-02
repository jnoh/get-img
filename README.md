# got-img
> Get an image from a url

## Install
```
npm install got-img
```

## Usage
```
const gotImg = require('got-img');

(async () => {
  const imgData = await gotImg('http://obs.astro.ucla.edu/images/towercam.jpg');
  doSomething(imgData); //imgData is binary
})
```

## License
MIT
