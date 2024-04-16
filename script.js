const tree = document.getElementById("tree")
const ul = tree.querySelector('ul');
const lis = ul.querySelectorAll('li');
const a = document.querySelectorAll('li a');
const imgs = document.querySelectorAll('li a img');
const pair = tree.querySelector("ul li .pair");
const rows = document.querySelector('#row2')
// Get the number of <ul> elements on a webpage using the JavaScript querySelectorAll() method.
const numOfUls = document.querySelectorAll("ul").length;



const ul1 = tree.querySelector('ul li ul');
const lis1 = rows.querySelectorAll('li');
const totalLis = lis.length;

console.log(totalLis);

if (document.getElementById('row2').getElementsByTagName('li').length >= 1) {
    console.log("got");
}


// Print the number of <ul> elements to the console.
console.log(numOfUls);


console.log(rows);

const maxSize = 5500; // Maximum size in pixels
const newSize = maxSize / lis.length;
console.log(newSize);
lis.forEach(li => {
  li.style.width = `${newSize}%`;
});


const aSize = tree.clientWidth;
const newASize = aSize / a.length;
console.log(newASize);
a.forEach(name =>{
    name.style.fontSize = `${newASize}%`;
    name.style.padding = `.5% 1%`
});


const imgSize = 90;
const newImgSize = imgSize - imgs.length;
console.log(newImgSize);
for (const img of imgs) {
    img.style.width = `${newImgSize}%`
}

// pair.style.width = `1800px`