//product-images

function changeImage(num){
    const mainImage = document.getElementById("main-product-img-0");

    if(num==1){
       mainImage.src = "./../images/lehenga-choli-1.png";
    }
    else if(num==2){
        mainImage.src = "./../images/lehenga-choli-2.png";
    }
    else if(num==3){
        mainImage.src = "./../images/lehenga-choli-3.png";
    }
    else if(num==4){
        mainImage.src = "./../images/lehenga-choli-4.png";
    }
    else if(num==5){
        mainImage.src = "./../images/lehenga-choli-5.png";
    }
}


function changeImage1(num){
    const mainImage = document.getElementById("main-product-img-1");

    if(num==6){
       mainImage.src = "./../images/kurti-1.png";
    }
    else if(num==7){
        mainImage.src = "./../images/kurti-2.png";
    }
    else if(num==8){
        mainImage.src = "./../images/kurti-3.png";
    }
    else if(num==9){
        mainImage.src = "./../images/kurti-4.png";
    }
    else if(num==10){
        mainImage.src = "./../images/kurti-5.png";
    }
}

function changeImage2(num){
    const mainImage = document.getElementById("main-product-img-2");

    if(num==11){
       mainImage.src = "./../images/sari-1.png"  
    }
    else if(num==12){
        mainImage.src = "./../images/sari-2.png";
    }
    else if(num==13){
        mainImage.src = "./../images/sari-3.png";
    }
    else if(num==14){
        mainImage.src = "./../images/sari-4.png";
    }
    else if(num==15){
        mainImage.src = "./../images/sari-5.png";
    }
}





 // increament - decriment

  // card-1
  function inc(){
    const quantityText = document.getElementById("quantity-text");

    const showQuantity = document.getElementById("show-quantity");

    const showTotal = document.getElementById("show-total");

  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*5460`;
          showTotal.innerText = `Total : ${quantity*5460}`;
      }
      
      function dec(){
        const quantityText = document.getElementById("quantity-text");

        const showQuantity = document.getElementById("show-quantity");

        const showTotal = document.getElementById("show-total");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*5460`;
          showTotal.innerText = `Total : ${quantity*5460}`;
  }


  function inc1(){
    const quantityText = document.getElementById("quantity-text-1");

    const showQuantity = document.getElementById("show-quantity-1");

    const showTotal = document.getElementById("show-total-1");

  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*6460`;
          showTotal.innerText = `Total : ${quantity*6460}`;
      }
      
      function dec1(){
        const quantityText = document.getElementById("quantity-text-1");

        const showQuantity = document.getElementById("show-quantity-1");

        const showTotal = document.getElementById("show-total-1");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*6460`;
          showTotal.innerText = `Total : ${quantity*6460}`;
  }




  function inc2(){
    const quantityText = document.getElementById("quantity-text-2");

    const showQuantity = document.getElementById("show-quantity-2");

    const showTotal = document.getElementById("show-total-2");

  let quantity = parseInt(quantityText.innerText);
          
          if(quantity<=5)
          {
              quantityText.innerText = ++quantity
          }
          else
          {
              alert("you can't add more than 6 items....")
          }
  
          showQuantity.innerText = `${quantity}*7460`;
          showTotal.innerText = `Total : ${quantity*7660}`;
      }
      
      function dec2(){
        const quantityText = document.getElementById("quantity-text-2");

        const showQuantity = document.getElementById("show-quantity-2");

        const showTotal = document.getElementById("show-total-2");

        let quantity = parseInt(quantityText.innerText);

  
          if(quantity>1)
          {
              quantityText.innerText = --quantity
          }
          else
          {
              alert("you can't add less than 1 items....")
      }
  
          showQuantity.innerText = `${quantity}*7460`;
          showTotal.innerText = `Total : ${quantity*7460}`;
  }






// button
function msg(){
    alert("Thank you for your order! ");
  }
  