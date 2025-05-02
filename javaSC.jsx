// Select elements
const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('#navbar ul');

// Toggle the navbar menu on hamburger click
hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close the menu when a link is clicked (optional)
navbarMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navbarMenu.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

// Get all food item checkboxes and the total price element
const foodItems = document.querySelectorAll('.food-item');
const totalPriceElement = document.getElementById('total-price');
const calculateTotalButton = document.getElementById('calculate-total');

// Function to calculate the total price
function calculateTotalPrice() {
    let total = 0;
    foodItems.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value); // Add the value of the checked item
        }
    });
    totalPriceElement.textContent = total.toFixed(2); // Update the total price display
}

// Add event listeners to all checkboxes
foodItems.forEach(item => {
    item.addEventListener('change', calculateTotalPrice);
});

// Add event listener to the "Calculate Total Price" button
calculateTotalButton.addEventListener('click', calculateTotalPrice);

// Get the "Place Order" button and food items
const placeOrderBtn = document.getElementById('place-order-btn');

// Add event listener to the button
placeOrderBtn.addEventListener('click', () => {
    let total = 0;
    let selectedItems = [];

    // Calculate total price and collect selected items
    foodItems.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value);
            selectedItems.push(item.parentElement.textContent.trim());
        }
    });

    // Save total price and selected items to localStorage
    localStorage.setItem('totalPrice', total.toFixed(2));
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    // Redirect to the total.html page
    window.location.href = 'total.html';
});
