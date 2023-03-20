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
    div.querySelector("span[id$='-quantity']").textContent = stock;
    div.querySelector("span[id$='-price']").textContent = price;

    // display confirmation message
    alert("Stock and price updated!");
  });
});


