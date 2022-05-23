import fs, { createWriteStream } from 'node:fs';
import axios from 'axios';

// test location of known file for testing code
// const testUrl = 'https://api.memegen.link/images/ll/_/hhhehehe.png';

let dataArray;
let dataImgUrl;
let locationInArray = 0;
let imageFile;
let testArrayInFunction;
let result;
const number = 0;

// function that gets the url from array location 0
function altJpeg() {
  axios({
    method: 'get',
    url: testArrayInFunction[number].url,
    responseType: 'stream',
  })
    /*     .catch() => {
      console.log(error.message);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 1}.jpg`));
    });
}
4;

function altJpeg2() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 1].url,
    responseType: 'stream',
  })
    /*  .catch() => {
    console.log(error.message);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 2}.jpg`));
    });
}

function altJpeg3() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 2].url,
    responseType: 'stream',
  })
    /*   .catch() => {
    console.log(error.message);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 3}.jpg`));
    });
}

function altJpeg4() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 3].url,
    responseType: 'stream',
  })
    /*   .catch() => {
    console.log(error.message);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 4}.jpg`));
    });
}

function altJpeg5() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 4].url,
    responseType: 'stream',
  })
    /*   .catch() => {
    console.log(error.message);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 5}.jpg`));
    });
}

function altJpeg6() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 5].url,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(`images/0${number + 6}.jpg`));
  });
}

function altJpeg7() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 6].url,
    responseType: 'stream',
  })
    /*     .catch(function (error) {
      console.log(error);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 7}.jpg`));
    });
}

function altJpeg8() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 7].url,
    responseType: 'stream',
  })
    /*     .catch(function (error) {
      console.log(error);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 8}.jpg`));
    });
}

function altJpeg9() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 8].url,
    responseType: 'stream',
  })
    /*     .catch(function (error) {
      console.log(error);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 9}.jpg`));
    });
}

function altJpeg10() {
  axios({
    method: 'get',
    url: testArrayInFunction[number + 9].url,
    responseType: 'stream',
  })
    /*     .catch(function (error) {
      console.log(error);
    }) */
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`images/0${number + 10}.jpg`));
    });
}

// funtion that creates a txt file with the url as a string inside

function createTxtFile() {
  fs.writeFile(
    `images/0${locationInArray + 1}.txt`,
    testArrayInFunction[locationInArray].url,
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
}

// function increments the array location by one, and writes this to a new txt file upto image number 10 (array location 9)

function incrementArrayLocation() {
  for (locationInArray; locationInArray < 10; locationInArray++) {
    console.log(`image number ${locationInArray + 1}`);
    createTxtFile();
    console.log('text file created');
    locationInArray = locationInArray++;
  }
}

// function that sets delay of 1 second

function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(imageFile);
    }, 1000);
  });
}

// function that uses the delay of one second so that there is data in imageFile so that it can be inspected
// then calls the function to get the text files in

async function collectMemes() {
  console.log('collection img url');
  result = await resolveAfter1Second();
  console.log(dataArray);
  console.log(`url of file location: ${result}`);
  incrementArrayLocation();
  altJpeg();
  altJpeg2();
  altJpeg3();
  altJpeg4();
  altJpeg5();
  altJpeg6();
  altJpeg7();
  altJpeg8();
  altJpeg9();
  altJpeg10();
}
try {
} catch (error) {
  console.log(error);
}

collectMemes();

// axios get command looks up the data from the given url
axios
  .get('https://api.memegen.link/images')
  .then(function (response) {
    dataImgUrl = response.data;
    console.log(`location in array: ${locationInArray}`);
    testArrayInFunction = dataImgUrl;
    console.log(`image url: ${imageFile}`);
    console.log(Array.isArray(imageFile));

    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
