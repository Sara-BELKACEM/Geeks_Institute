function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all elements are strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is not greater than 4.");
    }
  });
}


