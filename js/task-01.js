

const items = document.querySelectorAll("li.item");

console.log(`Number Of Categories: ${items.length}`);

items.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
console.log(`Elements: ${item.querySelectorAll("li").length}`);

});

