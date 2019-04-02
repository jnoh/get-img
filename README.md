# get-img
> Get an image from a url

## Install
```
npm install get-img
```

## Usage
```
const getImg = require('get-img');

(async () => {
  const imgData = await getImg('http://obs.astro.ucla.edu/images/towercam.jpg');
  doSomething(imgData); //imgData is binary
})
```

## License
MIT
