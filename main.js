const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const hamburguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu.inactive')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const aside = document.querySelector('.shopping-cart.inactive');
const mainContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


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

    closeProductDetailAside();
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

    let isProductDetailClosed = productDetailContainer.classList.contains('inactive');    

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }


    aside.classList.toggle('inactive');
    
 
    
}

function openProductDetailAside() {
    aside.classList.add('inactive')

    productDetailContainer.classList.remove('inactive');
    
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

let productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/2256137/pexels-photo-2256137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
    name: 'turntable',
    price: 299,
    image: 'https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Buda',
    price: 100,
    image: 'https://images.pexels.com/photos/7373005/pexels-photo-7373005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

productList.push({
    name: 'turntable',
    price: 299,
    image: 'https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Bike',
    price: 150,
    image: 'bike.jpeg'
})

productList.push({
    name: 'Keyboard',
    price: 160,
    image: 'https://www.infinitonline.com.ar/images/000000000000011900733TGA108.jpg'
})
productList.push({
    name: 'Buda',
    price: 100,
    image: 'https://images.pexels.com/photos/7373005/pexels-photo-7373005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

    productImage.addEventListener('click', openProductDetailAside)

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





