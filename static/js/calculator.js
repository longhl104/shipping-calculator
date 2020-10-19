function receive_select_event(bring_to_check, pick_up_check, dropdown_suburbs) {
    var val = $("#receive_select").val();
    if (val === null) {
        $("input.pickup-check").attr("disabled", true);
        $("#dropdown_suburbs").hide();
    } else {
        $("input.pickup-check").removeAttr("disabled");
        $("#dropdown_suburbs").text("Chọn suburb");
        $("#dropdown_suburbs").show();
        $('#empty').hide();
        if (val === "Bankstown") {
            // console.log('bankstown')
            $(".dist_bankstown").show();
            $(".dist_cabramatta").hide();
            items = document.getElementsByClassName("dist_bankstown");
        } else if (val === "Cabramatta") {
            $(".dist_bankstown").hide();
            $(".dist_cabramatta").show();
            items = document.getElementsByClassName("dist_cabramatta");
        }
        if (bring_to_check == "true") {
            $('#bring-to-check').trigger('click');
        }
        if (pick_up_check == "true") {
            $('#pick-up-check').trigger('click');
            console.log(dropdown_suburbs);
            $('#dropdown_suburbs').text(dropdown_suburbs);
        }
    }
}

$(document).ready(function () {
    $("#receive_select").change(receive_select_event).change();
});

window.onbeforeunload = function () {
    localStorage.setItem('kg', $('#kg').val());
    localStorage.setItem('special_item', $('#special-item').val());
    localStorage.setItem('total-fee', $('#total-fee').val());
};

window.onload = function () {
    var kg = localStorage.getItem('kg');
    var special_item = localStorage.getItem('special_item');
    var total_fee = localStorage.getItem('total-fee');
    if (kg > 0)
        $('#kg').val(kg);

    if (special_item > 0) $('#special-item').val(special_item);

    if (total_fee.substr(1) > 0) {
        $('#total-fee').val(total_fee);
    }
};