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

    const addCartLink = document.createElement('a');
    addCartLink.setAttribute('href', '#');
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







