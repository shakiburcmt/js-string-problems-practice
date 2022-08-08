const nasheed = 'asbe mohakal ruKHte hobe dajjal';

const doesEt = nasheed.includes('mohakal');
console.log(doesEt);

const abc = 'dajjal';
const abcd = nasheed.includes(abc);
console.log(abcd);
//  ek line ay sob nicher moto search kora jay
const search = 'rukhtE'
const oneLine = nasheed.toLowerCase().includes(search.toLowerCase());
console.log(oneLine);

// indexof diyeo khuja jay same array er moto kaj kore
console.log(nasheed.indexOf('hobe'));
console.log(nasheed.indexOf('hobei'));

if (nasheed.indexOf('mohakala') !== -1) {
    console.log('yes kheje peyechi');
}
else {
    console.log('dhur batti diyeo khuje pelam na');
}

// start with diye string er shurur substring khoja hoy

console.log(nasheed.startsWith('asbe'));

// endwith diye string er shesh check kora hoy,, file er type evabe ber kora hoy normally
console.log(nasheed.endsWith('dajal'));