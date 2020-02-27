$(function () {
    let productTitle = $('#productTitle')
    let productDescription = $('#productDescription')
    let productCategory = $('#productCategory')
    let productLocation = $('#productLocation')
    let productPrice = $('#productPrice')
    let productDate = $('#productDate')
    let productDelivery = $('#productDelivery')
    let productSeller = $('#productSeller')
    
    $('#btnProductAdd').click(function () {

        addProduct(
            productTitle.val(),
            productDescription.val(),
            productCategory.val(),
            productLocation.val(),
            productPrice.val(),
            productDate.val(),
            productDelivery.val(),
            productSeller.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )


    })

})