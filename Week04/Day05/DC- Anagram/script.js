function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("Astronomer", "Moon starer"));     
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("Hello", "World"));                
