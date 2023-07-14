const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu.inactive')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart.inactive');
const mainContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartAside);


function toggleDesktopMenu(event) {
    event.preventDefault();
    
    let asideClosed = aside.classList.contains('inactive');
    
    if (!asideClosed) {
        aside.classList.add('inactive');   
    }   
    
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    let asideClosed = aside.classList.contains('inactive');

    if(!asideClosed){ 
       aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    let mobileMenuClosed = mobileMenu.classList.contains('inactive');
    let desktopMenuClosed = desktopMenu.classList.contains('inactive')
    

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');      
    }

    aside.classList.toggle('inactive');
    
 
    
} 

let productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: './bike.jpeg'
})
productList.push({
    name: 'Laptop',
    price: 300,
    image: 'https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/4:3/w_712,h_534,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg'
})
productList.push({
    name: 'Airpods',
    price: 200,
    image: 'https://i.blogs.es/85cc93/auriculares-airpods-1-/1366_2000.jpg'
})
productList.push({
    name: 'Keyboard',
    price: 160,
    image: 'https://www.infinitonline.com.ar/images/000000000000011900733TGA108.jpg'
})


function renderProducts(array) {
    
for (let product of array) {
    //creo elemento contenedor

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //Creamos la etiqueta img + img del producto

    const productImage = document.createElement('img');
    productImage.classList.add('product-img')

    productImage.setAttribute('src', product.image);

    //Creo el contenedor de la información / con clase: product-info

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //Div contenedor

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; //texto

    const productName = document.createElement('p'); //texto
    productName.innerText = product.name;

    //inserto elementos dentro dle contenedor
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    //etiqueta figure + img
    const figureImgAddCart = document.createElement('figure');
    const imgAddCart = document.createElement('img');
    imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg' ); //no es una img dinámica.

    figureImgAddCart.appendChild(imgAddCart); //meto la img dentro de la etiqueta figure.

    
    //insertar elementos hijos en sus contenedores para inyectarlo en el html.

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figureImgAddCart);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    mainContainer.appendChild(productCard);

    
    
}
    
}

renderProducts(productList) //llamo la fx con el array que quiero iterar





