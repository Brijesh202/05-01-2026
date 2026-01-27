let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"> <!--we are multiplying by 10 bcoz in actual image koi bi image na name ma floating point nathi so that's why we need to do multiply-->
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed('2')}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-name = "${product.name}">
            Add to Cart
          </button>
    </div>
  `;

})


console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    console.log('product added');
    console.log(button.dataset.productName);//aapde je button ni andar ek feature add karyu chhe data attribute ke jema badho j data hase ke kai item chhe name and all and aapde .dataset.productName no use karine productName get kari laisu and aa je .productName chhe a property chhe dataset ni.
    const productName = button.dataset.productName
    cart.push({
      productName: productName,
      quantity: 1
    });
    console.log(cart);
  });
})