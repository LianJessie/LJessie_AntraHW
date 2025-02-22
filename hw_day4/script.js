const pantry = [
    {name: "apple", quantity: 10, quality: "fresh"},
    {name: "banana", quantity: 7, quality: "stale"},
    {name: "garlic", quantity: 0, quality: "fresh"},
    {name: "pepper", quantity: 2, quality: "fresh"},
    {name: "carrot", quantity: 4, quality: "spoiled"},
    {name: "shallot", quantity: 6, quality: "stale"},
];

// filter
// Extracts from the pantry a list of items whose quantities are below 3.
const toRestock = pantry.filter((item) => item.quantity < 3);
console.log("We are low on:", toRestock);

// map
// If item quantity is low, then add 5.
const groceryRun = pantry.map((item) => {
    if(item.quantity < 3) {
        item.quantity += 5;
    }
    return item;
});
console.log("After-restock:", groceryRun);

// find
// Finds and returns the item for carrots.
const findCarrots = pantry.find((item) => {
    return item.name === "carrot";
})
console.log("Current status of carrots:", findCarrots);

// forEach
// Iterates through the list and prints out the name of each pantry item.
pantry.forEach((item) => console.log(item.name));

// some
// Checks if any of the items have spoiled.
console.log("Have any items spoiled?", pantry.some((item) => item.quality === "spoiled"));

// every
// States whether or not all items are in stock.
console.log("Are all items in stock?", pantry.every((item) => item.quantity >= 0));

// reduce
// Counts the total number of items in the pantry.
const totalQuantity = pantry.reduce((total, item) => {
    return item.quantity + total;
}, 0)
console.log("Total amount of items in pantry:", totalQuantity);

// includes
// Checks if there are bananas in the pantry.
var bananaExists = pantry[1];
console.log("Are there bananas in stock?", pantry.includes(bananaExists));