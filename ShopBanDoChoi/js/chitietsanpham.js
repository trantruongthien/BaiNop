$(document).ready(function () {

    
})

$(document).ready(function () {

    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp)
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)
    $("#soluong").html(temp.soluong)
    function napSP(sp) {
        let temp = "<img src='" + sp.hinhanh + "' alt='' class='v-100' style='height: 500px;'>"
        $("#ha").html(temp)
    }
    $(document).ready(function () {
        dssp.forEach(sp => {
            napSP(temp)
        });
    })

    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        if(quantity < temp.soluong)
        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 1) {
            $('#quantity').val(quantity - 1);
        }
    });

});