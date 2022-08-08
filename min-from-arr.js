function minArray(number) {
    let smallest = number[0];
    for (let i = 0; i < number.length; i++) {
        var element = number[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;

}
const arr = [252, 133, 144, 150, 9, 19, 56, 250];
const small = minArray(arr);
// console.log(small);