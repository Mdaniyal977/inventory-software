function printDiv() {
  //   var divContents = document.getElementsById("myDiv").innerHTML;
    var divContents = document.getElementById("myDiv").innerHTML
    var printContents = "<html><head><title></title></head><body>" + divContents + "</body></html>";
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(printContents);
    printWindow.document.close();
    printWindow.print();
  }
  
  // Get all the divs with class "myDiv" and store them in an array
  var divs = document.querySelectorAll('.myDiv');
  
  // Get the search input and button
  var searchInput = document.getElementById('search-input');
  var searchBtn = document.getElementById('search-btn');
  var clearBtn = document.getElementById('clear-btn');
  
  // Get the pagination buttons
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  
  // Set the default page number and number of items per page
  var currentPage = 1;
  var itemsPerPage = 8;
  
  // Set event listeners for the search and clear buttons
  searchBtn.addEventListener('click', searchDivs);
  clearBtn.addEventListener('click', clearSearch);
  
  // Set event listeners for the pagination buttons
  prevBtn.addEventListener('click', prevPage);
  nextBtn.addEventListener('click', nextPage);
  
  // Function to search the divs
  function searchDivs() {
    var searchTerm = searchInput.value.toLowerCase();
    divs.forEach(function(div) {
      var text = div.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
    currentPage = 1;
  }
  
  // Function to clear the search and show all divs
  function clearSearch() {
    searchInput.value = '';
    divs.forEach(function(div) {
      div.style.display = 'block';
    });
    currentPage = 1;
    showDivs();
  }
  
  // Function to go to the previous page
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      showDivs();
    }
  }
  
  // Function to go to the next page
  function nextPage() {
    if (currentPage < Math.ceil(divs.length / itemsPerPage)) {
      currentPage++;
      showDivs();
    }
  }
  
  // Function to show the divs for the current page
  function showDivs() {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    divs.forEach(function(div, index) {
      if (startIndex <= index && index < endIndex) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });
  }
  
  // Show the first 10 divs on page load
  showDivs();
  
  
  
  
  
  
  // Get the current date and time
  const now = new Date();
  
  // Get the date and time strings
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  
  // Get the date and time span elements
  const dateSpan = document.querySelector('#date');
  const timeSpan = document.querySelector('#time');
  
  // Set the text content of the span elements to the date and time strings
  dateSpan.textContent = dateString;
  timeSpan.textContent = timeString;
  
// get all update buttons
const updateButtons = document.querySelectorAll(".update-button");

// add event listener to each update button
updateButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // get the corresponding div element
    const div = event.target.parentElement;

    // prompt user for stock and price
    const stock = prompt("Enter new stock:");
    const price = prompt("Enter new price:");

    // update the stock and price spans
    div.querySelector("span[id$='-stock-cart']").textContent = stock;
    div.querySelector("span[id$='-price-cart']").textContent = price;

    // display confirmation message
    alert("Stock and price updated!");
  });
});


// Define an array to store the cart items
let cart = [];
  
// Define a function to add a product to the cart
function addToCart(productId) {
  let qtyInput = document.getElementById(productId + '-qty');
  let qty = parseInt(qtyInput.value);
  let product = document.getElementById(productId);
  let productName = document.getElementById(productId + '-name').innerHTML;
  let productPrice = parseFloat(document.getElementById(productId + '-price-cart').innerHTML);
  let productStock = parseInt(document.getElementById(productId + '-stock-cart').innerHTML);
console.log(product)
  
  if (productStock === 0) {
    alert('Sorry, this product is out of stock.');
    return;
  }

  if (qty > 0 && qty <= productStock) {
    cart.push({name: productName, price: productPrice, qty: qty});

    // Update the product stock
    productStock -= qty;
    document.getElementById(productId + '-stock-cart').innerHTML = productStock;

    // Clear the quantity input
    qtyInput.value = '';

    // Update the cart display
    updateCartDisplay();
  } else {
    alert('Please enter a valid quantity.');
  }
}

function updateCartDisplay() {
  let cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  let totalPrice = 0;
  let totalQty = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let listItem = document.createElement('li');

    // Create span tags for the product name, price, quantity, and total price
    let nameSpan = document.createElement('span');
    nameSpan.className = 'cart-item-name';
    nameSpan.appendChild(document.createTextNode(item.name));

    let priceSpan = document.createElement('span');
    priceSpan.className = 'cart-item-price';
    priceSpan.appendChild(document.createTextNode('Rs' + item.price.toFixed(2)));

    let qtySpan = document.createElement('span');
    qtySpan.className = 'cart-item-qty';
    qtySpan.appendChild(document.createTextNode(item.qty));

    let totalSpan = document.createElement('span');
    totalSpan.className = 'cart-item-total';
    totalSpan.appendChild(document.createTextNode('Rs' + (item.price * item.qty).toFixed(2)));


    let itemText = document.createTextNode(' ');
    listItem.appendChild(nameSpan);
    listItem.appendChild(itemText);
    listItem.appendChild(priceSpan);
    listItem.appendChild(itemText);
    listItem.appendChild(document.createTextNode('x'));
    listItem.appendChild(itemText);
    listItem.appendChild(qtySpan);
    listItem.appendChild(itemText);
    listItem.appendChild(document.createTextNode('='));
    listItem.appendChild(itemText);
    listItem.appendChild(totalSpan);

    cartList.appendChild(listItem);
    totalPrice += item.price * item.qty;
    totalQty += item.qty;
  }

  // Update the total price and total items display
  document.getElementById('total-price').innerHTML = 'Total Price: Rs' + totalPrice.toFixed(2);
  document.getElementById('total-items').innerHTML = 'Total Items: ' + totalQty + ' items';
}