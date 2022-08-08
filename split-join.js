const nasheed = 'asbe mohakal. ruKHte hobe dajjal';
// split mane vag kore dibe alada alada ongshe
const parts = nasheed.split(' ');
console.log(parts);
const sentences = nasheed.split('.');
console.log(sentences);
const chars = nasheed.split('');
console.log(chars);

// slice mane ekta tukra newa pizza er moto,,, substring slice er motoi kaj kore,, 5 dewa mane index o theke shuru hobe 9 er age porjonto jabe 
const partial = nasheed.slice(5, 9);
console.log(partial);
const partial2 = nasheed.substring(5, 9);
console.log(partial2);


// string concat korte join use hoy

const lines = [
    'kothate vul hole',
    'nirobe jeo vule',
    'khoparo chul khule eso sedin'
];
const romantic = lines.join('. ');//'' er moddhe ja dibo sei anujay jora lagbe
console.log(romantic);