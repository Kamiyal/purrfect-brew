const drinkMenu = [
    { name: "Americano", price: 3, description: "Classic espresso with hot water" },
    { name: "Latte", price: 4, description: "Espresso with steamed milk and a small amount of milk foam" },
    { name: "Espresso", price: 2.5, description: "Strong and concentrated coffee brewed by forcing hot water through finely-ground coffee" },
    { name: "Cappuccino", price: 4, description: "Equal parts of espresso, steamed milk, and milk foam" },
    { name: "Mocha", price: 4.5, description: "Espresso with chocolate syrup, steamed milk, and whipped cream" },
    { name: "Black Coffee", price: 2, description: "Freshly brewed black coffee" },
    { name: "Macchiato", price: 3.5, description: "Espresso 'stained' with a small amount of milk" },
    { name: "Flat White", price: 3.5, description: "Espresso with velvety steamed milk and a thin layer of microfoam" },
    { name: "Iced Coffee", price: 2.5, description: "Chilled black coffee over ice" },
    { name: "Cold Brew", price: 3, description: "Smooth and refreshing coffee brewed cold over an extended period" }
  ];
  
  const foodMenu = [
    { name: "Ham Sandwich", price: 5, description: "Sliced ham, fresh vegetables, and mayo on whole wheat bread" },
    { name: "Turkey Wrap", price: 6, description: "Sliced turkey, lettuce, tomato, and honey mustard wrapped in a tortilla" },
    { name: "Veggie Wrap", price: 5, description: "Grilled vegetables, hummus, and mixed greens in a spinach tortilla" },
    { name: "Chicken Sandwich", price: 6, description: "Grilled chicken breast, lettuce, tomato, and chipotle mayo on a ciabatta roll" },
    { name: "BLT", price: 6, description: "Crispy bacon, lettuce, tomato, and mayo on toasted white bread" },
    { name: "Tuna Sandwich", price: 5.5, description: "Tuna salad with celery and onion, lettuce, and tomato on multigrain bread" }
  ];
  
  const dessertMenu = [
    { name: "Chocolate Chip Cookie", price: 2, description: "Classic chocolate chip cookie, freshly baked" },
    { name: "Brownie", price: 2.5, description: "Rich chocolate brownie topped with walnuts" },
    { name: "Croissant", price: 3, description: "Buttery and flaky croissant, perfect with coffee" },
    { name: "Cinnamon Roll", price: 3.5, description: "Sweet and gooey cinnamon roll with cream cheese frosting" },
    { name: "Muffin", price: 2, description: "Freshly baked muffin in assorted flavors" },
    { name: "Scone", price: 2.5, description: "Buttery scone with a hint of sweetness, great for dipping" },
    { name: "Banana Bread", price: 2.5, description: "Moist banana bread slice with a touch of cinnamon" },
    { name: "Macaron", price: 1.5 , description: "Delicate and colorful French macaron" },
    { name: "Cheesecake Slice", price: 4, description: "Creamy cheesecake slice with a graham cracker crust" },
    { name: "Cupcake", price: 2.5, description: "Miniature cupcake in various flavors, topped with frosting."}
  ];
  
  function populateMenu(menuArray, containerID) {
    const menuDiv = document.getElementById(containerID);
    menuArray.forEach(item => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');
      menuItemDiv.innerHTML = `
        <p><strong>${item.name}</strong>: $${item.price}</p>
        <p class="item-description">${item.description}</p>`;
      menuDiv.appendChild(menuItemDiv);
    });
  }
  
  populateMenu(drinkMenu, 'drink-menu');
  populateMenu(foodMenu, 'food-menu');
  populateMenu(dessertMenu, 'dessert-menu');

  //Populate order form

  const itemSelect = document.getElementById('item-select');

drinkMenu.concat(foodMenu, dessertMenu).forEach(item => {
  const option = document.createElement('option');
  option.value = item.name;
  option.textContent = `${item.name} - $${item.price}`;
  itemSelect.appendChild(option);
});

document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const selectedItem = itemSelect.value;
  const quantity = document.getElementById('quantity').value;

  // Code to add the item and quantity to the order
});
