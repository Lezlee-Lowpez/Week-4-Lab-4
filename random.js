// Ciphers 
//  - for my cipher I will use numbers the numbers 1-26 to represent each number but assign them backwards. For example A will now be equal to 26 and Z = 1.Seperated by .





// A=26., B=25., C=24., D=23., E=22., F=21., G=20., H=19.,I=18.,J=17., K=16., L=15., M=14, N=13, O=12., P=11., Q=10., R=9., S=8., T=7., U=6, V=5., W=4., X=3., Y=2., Z=1., spaces = 111.


//  new phrase = 19.111.15.12.5.22.111.24.9.2.11.7.12.10.9.26.11.19.2.

const alpha = {
    A:'26.', B:'25.', C:'24.', D:'23.', E:'22.', F:'21.', G:'20.', H:'19.' ,I: '18.',J:'17.', K:'16.', L:'15.', M:'14.', N:'13.', O:'12.', P:'11.', Q:'10.', R:'9.', S:'8.', T:'7.', U:'6.', V:'5.', W: '4.', X: '3.', Y:'2.', Z:'1.', " " : '111.'}

console.log(alpha.A)

function mySuperSecretCipher(somePhrase) {
    const newSecret = [];
    const newWord = somePhrase.toUpperCase(); // Convert to uppercase once, outside the loop

    for (let i = 0; i < somePhrase.length; i++) {
        let theIterator = newWord[i]; // Current character to encode
        if (alpha[theIterator]) { // Check if the character exists in the cipher
            newSecret.push(alpha[theIterator]); // Push the encoded value
        } else {
            newSecret.push(theIterator + '.'); // Optionally handle undefined characters
        }
    }

    return newSecret.join(''); // Join the array into a string
}

const phrase = "I love cryptography!";
console.log(mySuperSecretCipher(phrase));





