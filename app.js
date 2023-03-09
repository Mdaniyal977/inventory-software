function printDiv() {
//   var divContents = document.getElementsById("myDiv").innerHTML;
  var divContents = document.getElementById("myDiv").innerHTML
  var printContents = "<html><head><title></title></head><body>" + divContents + "</body></html>";
  var printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write(printContents);
  printWindow.document.close();
  printWindow.print();
}

const container = document.querySelector('.container');
const divs = container.querySelectorAll('div');
const numDivs = divs.length;
const divsPerPage = 6; // Set the number of divs to show per page
let currentPage = 1;

function showDivs(page) {
  const startIndex = (page - 1) * divsPerPage;
  const endIndex = startIndex + divsPerPage;
  
  for (let i = 0; i < numDivs; i++) {
    if (i >= startIndex && i < endIndex) {
      divs[i].classList.remove('hidden');
    } else {
      divs[i].classList.add('hidden');
    }
  }
}

showDivs(currentPage);

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showDivs(currentPage);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(numDivs / divsPerPage)) {
    currentPage++;
    showDivs(currentPage);
  }
});


  var quantity =document.getElementById("horn-quantity").innerText
  var price=document.getElementById("horn-price")
  var popup=document.getElementsByClassName(".popuphorn")
  var l=document.getElementsByClassName(".newvalueofhorn").value

  console.log(quantity)
  console.log(l)
  console.log(popup)