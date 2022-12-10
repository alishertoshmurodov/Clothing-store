{/* 
<div class="grid-item">
    <div class="item-img">
        <div class="add-cart">
            <a href="#"><embed src="/img/Vector.svg" type="" width="26px" height="24px">
            Add to Cart</a>
        </div>
        <img src="/img/new.png" alt="">
    </div>
    <div class="item-text-block">
        <p class="item-name">ELLERY X M'O CAPSULE</p>
        <p class="item-des">Known for her sculptural takes on traditional tailoring, Australian arbiter of
            cool Kym Ellery teams up with Moda Operandi.</p>
        <p class="price-tag">$52.00</p>
    </div>
</div> 
*/}

const products = productData;
const productsGridBox = document.querySelector('.featured-grid');

products.forEach(element => {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');

    const gridItemImg = document.createElement('div');
    gridItemImg.setAttribute('class', 'item-img');

    const addCart = document.createElement('div');
    addCart.setAttribute('class', 'add-cart');

    const addCartLink = document.createElement('p');
    addCartLink.textContent = 'Add to Cart';

    const cartImg = document.createElement('embed');
    cartImg.src = '/img/Vector.svg';
    cartImg.setAttribute('width', '26px');
    cartImg.setAttribute('height', '24px');

    const itemImg = document.createElement('img');
    itemImg.src = element.imgUrl;

    const itemTextBlock = document.createElement('div');
    itemTextBlock.setAttribute('class', 'item-text-block');

    const itemName = document.createElement('p');
    itemName.setAttribute('class', 'item-name');
    itemName.textContent = element.name;

    const itemDes = document.createElement('p');
    itemDes.setAttribute('class', 'item-des');
    itemDes.textContent = element.description;

    const priceTag = document.createElement('p');
    priceTag.setAttribute('class', 'price-tag');
    priceTag.textContent = '$' + element.price;


    itemTextBlock.appendChild(itemName);
    itemTextBlock.appendChild(itemDes);
    itemTextBlock.appendChild(priceTag);

    addCartLink.appendChild(cartImg);
    addCart.appendChild(addCartLink);

    gridItemImg.appendChild(addCart);
    gridItemImg.appendChild(itemImg);

    gridItem.appendChild(gridItemImg);
    gridItem.appendChild(itemTextBlock);

    productsGridBox.appendChild(gridItem);
});


const cartContainerEl = document.querySelector('.cart-container');
const addCartEls = document.querySelectorAll('.add-cart');

const cartItemsEl = document.querySelector('.cart-items');




cartItemsEl.style = 'display: flex; flex-direction: column; gap: 40px; width: fit-content; margin-left: 20%; margin-top: 50px;';


const deleteItemButtons = [];



addCartEls.forEach(element => {
    element.addEventListener('click', function (e) {
        cartContainerEl.style = 'display: block';
        const imgUrl = element.nextElementSibling.getAttribute('src');

        const priceItem = element.parentElement.nextElementSibling.querySelector('.price-tag');
    
        
        const cartItem = document.createElement('div');
        cartItem.setAttribute('class', 'cart-items__item');

        const cartItemImg = document.createElement('div');
        cartItemImg.setAttribute('class', 'cart-items__item__img');

        const cartImg = document.createElement('img');
        cartImg.src = imgUrl;

        const cartItemText = document.createElement('div');
        cartItemText.setAttribute('class', 'cart-items__item__text');

        const cartItemName = document.createElement('h4');
        cartItemName.textContent = products[0].name;

        const cartItemPrice = document.createElement('p');
        cartItemPrice.textContent = 'Price: ' + priceItem.textContent;

        const cartItemColor = document.createElement('p');
        cartItemColor.textContent = 'Color: ' + products[0].color;

        const cartItemSize = document.createElement('p');
        cartItemSize.textContent = 'Size: ' + products[0].size;

        const cartItemQuantity = document.createElement('p');
        cartItemQuantity.textContent = 'Quantity: ' + '1';

        const deleteItemIconBlock = document.createElement('div');
        deleteItemIconBlock.setAttribute('class', 'delete-item-block');

        const deleteItem = document.createElement('i');
        deleteItem.setAttribute('class', 'fa-solid fa-x delete-button');
        
        deleteItemButtons.push(deleteItemIconBlock);
        

        cartItemImg.appendChild(cartImg);
        cartItemText.appendChild(cartItemName);
        cartItemText.appendChild(cartItemPrice);
        cartItemText.appendChild(cartItemColor);
        cartItemText.appendChild(cartItemSize);
        cartItemText.appendChild(cartItemQuantity);
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(cartItemText);
        deleteItemIconBlock.appendChild(deleteItem);
        cartItem.appendChild(deleteItemIconBlock);
        cartItemsEl.appendChild(cartItem);

    });

    
});


for (let i = 0; i < deleteItemButtons.length; i++) {
    deleteItemButtons[i].addEventListener('click', function (e) {
        console.log(deleteItemButtons[i]);
    });
}











