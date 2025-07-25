const categoriesQuantity = document.querySelectorAll('#categories > li').length;
console.log(`Number of categories: ${categoriesQuantity}`);

const categories = [...document.querySelectorAll('#categories .item')];

categories.forEach(element => {
  const textHeading = element.querySelector('h2').textContent;
  const liElems = element.querySelectorAll('.elements li');

  console.log(
    `Category: ${textHeading}\nElements: ${liElems.length}`
  );
});
