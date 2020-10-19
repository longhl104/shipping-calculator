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
    localStorage.setItem('province', $('#province').val());
    localStorage.setItem('receive_select', $('#receive_select').val());
    localStorage.setItem('bring_to_check', $('#bring-to-check').is(':checked'));
    localStorage.setItem('pick_up_check', $('#pick-up-check').is(':checked'));
    localStorage.setItem('special_item', $('#special-item').val());
    localStorage.setItem('dropdown_suburbs', $('#dropdown_suburbs').text());
    localStorage.setItem('total-fee', $('#total-fee').val());
};

window.onload = function () {
    var kg = localStorage.getItem('kg');
    var province = localStorage.getItem('province');
    var receive_select = localStorage.getItem('receive_select');
    var bring_to_check = localStorage.getItem('bring_to_check');
    var pick_up_check = localStorage.getItem('pick_up_check');
    var special_item = localStorage.getItem('special_item');
    var dropdown_suburbs = localStorage.getItem('dropdown_suburbs');
    var total_fee = localStorage.getItem('total-fee');
    if (kg > 0)
        $('#kg').val(kg);
    if (province !== 'null')
        $('#province').val(province);
    else $('#province').val('').trigger('change');
    if (receive_select !== 'null') {
        $('#receive_select').val(receive_select);
        receive_select_event(bring_to_check, pick_up_check, dropdown_suburbs);
    } else {
        $('#receive_select').val('').trigger('change');
    }

    if (special_item > 0) $('#special-item').val(special_item);

    if (total_fee.substr(1) > 0) {
        $('#total-fee').val(total_fee);
    }
};