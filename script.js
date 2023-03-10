var products = [
    {
        "product_name" : "bag" ,
        "product_price" : "$45.00" ,
        "product_image" : "img/bag.jpg" ,
        "added_to_cart" : false ,
    },
    {
        "product_name" : "cap" ,
        "product_price" : "$25.00" ,
        "product_image" : "img/cap.jpg" ,
        "added_to_cart" : false ,
    },
    {
        "product_name" : "phone" ,
        "product_price" : "$145.00" ,
        "product_image" : "img/phone.jpg" ,
        "added_to_cart" : false ,
    },
    {
        "product_name" : "shoes" ,
        "product_price" : "$55.00" ,
        "product_image" : "img/shoes.jpg" ,
        "added_to_cart" : false ,
    },
    {
        "product_name" : "tshirt" ,
        "product_price" : "$35.00" ,
        "product_image" : "img/tshirt.jpg" ,
        "added_to_cart" : false ,
    },
    {
        "product_name" : "watch" ,
        "product_price" : "$75.00" ,
        "product_image" : "img/watch.jpg" ,
        "added_to_cart" : false ,
    },
];
//modal box
var modalContainer = document.querySelector('.modals-container');
var modal = modalContainer.querySelectorAll('.modal');
var close = modalContainer.querySelectorAll('.close');
var add = modalContainer.querySelectorAll('.btnAdd');
//counter
var countDisplay = document.getElementById("count-display");
var menu = document.getElementById("menu");
var cartIcon = document.getElementById("cartIcon");
var counter = 0;
// drop down menu content
var cont1 = document.getElementById("cont1");
var cont2 = document.getElementById("cont2");
var cont3 = document.getElementById("cont3");
var cont4 = document.getElementById("cont4");
var cont5 = document.getElementById("cont5");
var cont6 = document.getElementById("cont6");
//open the modal
document.querySelectorAll('.cards-container .card .btnView').forEach( btnView => { 
    btnView.onclick = () => {
    var name = btnView.getAttribute('data-name');
    modal.forEach(modal => {
        var target = modal.getAttribute('data-target');
        if (name == target){
            modal.style.display = "block";
        }
    });
  };
});
//close the modal
document.querySelectorAll('.modals-container .modal .modal-content .close').forEach( close => { 
    close.onclick = () => {
    var name = close.getAttribute('data-name');
    modal.forEach(modal => {
        var target = modal.getAttribute('data-target');
        if (name == target){
            modal.style.display = "none";
        }
    });
  };
});
// adding item and removing item
document.querySelectorAll('.cards-container .card .btnAdd').forEach( btnAdd => { 
    btnAdd.onclick = () => {
        if (btnAdd.innerHTML == "ADD TO CART") {
            btnAdd.style.backgroundColor = "#E74C3C";
            btnAdd.innerHTML = "REMOVE ITEM";
            countDisplay.innerHTML = ++ counter;
            if (btnAdd.getAttribute('data-name') == "add1")
            {
                cont1.innerHTML = products[0].product_name +"<br>";
            }
           else if (btnAdd.getAttribute('data-name') == "add2")
            {
                cont2.innerHTML += products[1].product_name +"<br>";
            }
           else if (btnAdd.getAttribute('data-name') == "add3")
            {
                cont3.innerHTML += products[2].product_name +"<br>";
            }
           else if (btnAdd.getAttribute('data-name') == "add4")
            {
                cont4.innerHTML += products[3].product_name +"<br>";
            }
           else if (btnAdd.getAttribute('data-name') == "add5")
            {
                cont5.innerHTML += products[4].product_name +"<br>";
            }
           else if (btnAdd.getAttribute('data-name') == "add6")
            {
                cont6.innerHTML += products[5].product_name +"<br>";
            }
           
        }
        else {
            btnAdd.style.backgroundColor = "#28B463";
            btnAdd.innerHTML = "ADD TO CART";
            countDisplay.innerHTML = -- counter;
            if (btnAdd.getAttribute('data-name') == "add1")
            {
               cont1.innerHTML = "";
            }
            else if (btnAdd.getAttribute('data-name') == "add2")
            {
                cont2.innerHTML = "";
            }
           else if (btnAdd.getAttribute('data-name') == "add3")
            {
                cont3.innerHTML = "";
            }
           else if (btnAdd.getAttribute('data-name') == "add4")
            {
                cont4.innerHTML = "";
            }
           else if (btnAdd.getAttribute('data-name') == "add5")
            {
                cont5.innerHTML = "";
            }
           else if (btnAdd.getAttribute('data-name') == "add6")
            {
                cont6.innerHTML = "";
            }
        }
  };
});
//open and close the dropdown menu
var flag = 0;
cartIcon.onclick = () => {
    if (flag == 0){
        menu.style.display = "block" ;
        flag = 1 ;
    }
    else{
        menu.style.display = "none" ;
        flag = 0;
    }};
    












 

