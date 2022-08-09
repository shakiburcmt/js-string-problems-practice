function reverseString(text) {
    // ekhane loop reverse korar somoy text.length er sathe -1 kora hoyeche karon array er index 0 theke shuru hoy, mot number 4 ta hole index hobe 0-3 porjonto,, length hobe 4 , tai jokhon i=text.length shuru hocche tokhon length er soman dewa ache mane 4 theke shuru hobe kintu 4 e to keu nai tai -1 korte hobe 
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const loop = text[i];
        reversed = reversed + loop;
        console.log(loop, reversed);
    }
    return reversed;
}
const string = 'I love you';
const reversed = reverseString(string);
console.log(reversed)
