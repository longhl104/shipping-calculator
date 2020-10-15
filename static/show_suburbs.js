var items;

$(document).ready(function () {
    $("#receive_select").change(function () {
        if ($(this).val() === "Bankstown") {
            console.log('bankstown')
            $(".dist_bankstown").show();
            $(".dist_cabramatta").hide();
            items = document.getElementsByClassName("dist_bankstown");
                     $("#dropdown_suburbs").text("Chọn suburb");

        } else {
            $(".dist_bankstown").hide();
            $(".dist_cabramatta").show();
            items = document.getElementsByClassName("dist_cabramatta");
                     $("#dropdown_suburbs").text("Chọn suburb");

        }
    }).change();

});


//Find the input search box
let search = document.getElementById("searchSuburb");

//Find every item inside the dropdown

//Capture the event when user types into the search box
window.addEventListener("input", function () {
    filter(search.value.trim().toLowerCase());
});

//For every word entered by the user, check if the symbol starts with that word
//If it does show the symbol, else hide it
function filter(word) {
    let length = items.length;
    let collection = [];
    let hidden = 0;
    for (let i = 0; i < length; i++) {
        if (items[i].value.toLowerCase().startsWith(word)) {
            $(items[i]).show();
        } else {
            $(items[i]).hide();
            hidden++;
        }
    }

    //If all items are hidden, show the empty view
    if (hidden === length) {
        $("#empty").show();
    } else {
        $("#empty").hide();
    }
}

//If the user clicks on any item, set the title of the button as the text of the item
$("#menuItems").on("click", ".dropdown-item", function () {
    $("#dropdown_suburbs").text($(this)[0].value);
    $("#dropdown_suburbs").dropdown("toggle");
});