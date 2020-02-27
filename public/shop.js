
function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (title, desc, ctgr, loc, price, date, del, seller, done) {
    $.post('/api/products', {
        title: title,
        description: desc,
        category: ctgr,
        location: loc,
        price: price,
        date: date,
        delivery: del,
        seller: seller
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-title">${product.title}</h4>
        <div class="product-description">${product.description}</div>
        <div class="product-category">Category: ${product.category}</div>
        <div class="product-location">Location: ${product.location}</div>
        <div class="product-date">Date of posting: ${product.date}</div>
        <div class="product-delivery">Delivery: ${product.delivery}</div>
        <div class="product-seller">Seller information: ${product.seller}</div>
        <div class="col m-3 p-3">
            <b> Price: ${product.price} eur</b>
        </div>
    </div>
    `)
}