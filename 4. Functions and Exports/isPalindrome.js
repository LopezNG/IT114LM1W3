// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

// Todo 4.6b Set the isPalindrome function as the default export of the module
export default isPalindrome;
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx