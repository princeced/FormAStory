$(document).ready(function() {
    $("form").submit(function() {
        submission();
    });
});

function submission() {

    let animalName1 = $('#i1').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a1", animalName1);
    }
    let animalName2 = $('#i2').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a2", animalName2);
    }

    let animalName3 = $('#i3').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a3", animalName3);
    }
    let adjective_input = $('#i4').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a4", adjective_input);
    }
    let verbs_input = $('#i5').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a5", verbs_input);
    }
    let number_input = $('#i6').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a6", number_input);
    }

    let yesorno = $('input[name=answer]:checked', '#detail_form').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a7", yesorno);
    }

    let relativeSpeed = $("#i9 option:selected").text();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a8", relativeSpeed);
    }

    let motivationalQutes = $("#i10 option:selected").text();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a9", motivationalQutes);
    }
    let meaningfulmsg = $('#i11').val();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("a10", meaningfulmsg);
    }




}