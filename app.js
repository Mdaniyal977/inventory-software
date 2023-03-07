function printDiv() {
//   var divContents = document.getElementsById("myDiv").innerHTML;
  var divContents = document.getElementById("myDiv").innerHTML
  var printContents = "<html><head><title></title></head><body>" + divContents + "</body></html>";
  var printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write(printContents);
  printWindow.document.close();
  printWindow.print();
}
  var quantity =document.getElementById("horn-quantity").innerText
  var price=document.getElementById("horn-price")
  var popup=document.getElementsByClassName(".popuphorn")
  var l=document.getElementsByClassName(".newvalueofhorn").value

  console.log(quantity)
  console.log(l)
  console.log(popup)