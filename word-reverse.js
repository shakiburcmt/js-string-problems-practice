function reverseWords(string) {
    const words = string.split(' ');
    const empty = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        empty.push(element);
    }
    const reversed = empty.join(' ');
    console.log(reversed);
    // return reversed;
}
const myString = 'I am a boy';
reverseWords(myString);

