// Values and Variables
// const country = "United States";
// const continent = "North America";
// const population = 331; // population in millions

// console.log("Country:", country);
// console.log("Continent:", continent);
// console.log("Population:", population + " million");


// Data Types
// const isIsland = false; // Assuming the United States is not an island
// let language;

// console.log("Type of 'isIsland':", typeof isIsland);
// console.log("Type of 'population':", typeof population);
// console.log("Type of 'country':", typeof country);
// console.log("Type of 'language':", typeof language);



//Let, const, var
// const isIsland = false; // Assuming the United States is not an island
// const country = "United States";
// const continent = "North America";
// const population = 331; // population in millions
// const language = "English"; // Language spoken in the United States

// console.log("Type of 'isIsland':", typeof isIsland);
// console.log("Type of 'population':", typeof population);
// console.log("Type of 'country':", typeof country);
// console.log("Type of 'language':", typeof language);

// // Attempting to change a const variable will result in an error
// country = ("Canada"); // This will throw an error


// Basic Operator
// const country = "Pakistan";
// const continent = "Asia";
// let population = 25; // population in millions
// const language = "Urdu";

// Calculate population if the country split in half
// const halfPopulation = population / 2;

// console.log("Population of each half if the country splits:", halfPopulation + " million");

// // Increase population by 1
// population += 1;
// console.log("Updated population:", population + " million");

// Check if the country has more people than Finland
// const finlandPopulation = 6;
// const isMoreThanFinland = population > finlandPopulation;
// console.log("Does the country have more people than Finland?", isMoreThanFinland);

// Check if the country has less people than the average country
// const averagePopulation = 33;
// const isLessThanAverage = population < averagePopulation;
// console.log("Does the country have less people than the average country?", isLessThanAverage);

// Create description string
// const description = ${country} is in ${continent}, and its ${population} million people speak ${language}.;
// console.log(description);


// Strings and Template literals
// const averagePopulation = 33;

// if (population > averagePopulation) {
//     console.log(${country}'s population is above average.);
// } else {
//     const belowAverage = averagePopulation - population;
//     console.log(${country}'s population is ${belowAverage} million below average.);
// }

// // Temporary change population to 13
// population = 13;
// if (population > averagePopulation) {
//     console.log(${country}'s population is above average.);
// } else {
//     const belowAverage = averagePopulation - population;
//     console.log(${country}'s population is ${belowAverage} million below average.);
// }

// Temporary change population to 130

// const country = ("Pakistan");
// let population = 13; // Assuming Portugal's population is temporarily 13

// const averagePopulation = 33;

// if (population > averagePopulation) {
//     console.log(${country}'s population is above average.);
// } else {
//     const belowAverage = averagePopulation - population;
//     console.log(${country}'s population is ${belowAverage} million below average.);
// }

// // Change population to 130
// population = 130;

// if (population > averagePopulation) {
//     console.log(${country}'s population is above average.);
// } else {
//     const belowAverage = averagePopulation - population;
//     console.log(${country}'s population is ${belowAverage} million below average.);
// }

// // Set population back to original
// population = 13;

// Equality Operators: == vs. ===
// console.log('9' - '5');           // 4
// console.log('19' - '13' + '17');  // 617
// console.log('19' - '13' + 17);    // 23
// console.log('123' < 57);          // false
// console.log(5 + 6 + '4' + 9 - 4 - 2);  // 1143

// Logical Operators
/*
let numNeighbours = prompt('How many neighbour countries does your country have?');
numNeighbours = Number(numNeighbours);
*/

// const speaksEnglish = true; // Assuming the country speaks English
// const population = 331; // population in millions
// const isIsland = false; // Assuming the country is not an island

// if (speaksEnglish && population < 50 && !isIsland) {
//     console.log('You should live in the United States :)');
// } else {
//     console.log('The United States does not meet your criteria :(');
// }

// Temporarily change variables to make the condition true (just for fun)
/*
const speaksEnglish = true; // Assuming the country speaks English
const population = 10; // population in millions (changed to meet Sarah's criteria)
const isIsland = false; // Assuming the country is not an island

if (speaksEnglish && population < 50 && !isIsland) {
    console.log('You should live in the United States :)');
} else {
    console.log('The United States does not meet your criteria :(');
}
*/


// The switch Statement
// const language = "English";

// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
    
// }


// let arr = ["lion", "cat", "dog", "car"];
// for (let i = 0; i < arr.length; i++)
// console.log(arr[i]);


for (let i = 2; i <= 20; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(` ${i} x ${j} = ${i * j} `);
    }
}