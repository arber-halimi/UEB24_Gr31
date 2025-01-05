$(document).ready(function () {
    $(".image-gallery img").click(function () {
        if ($("#image-modal").length === 0) {
            $("body").append(`
                <div id="image-modal" class="image-modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="modal-image">
                </div>
            `);
        }

        const modal = $("#image-modal");
        const modalImage = $("#modal-image");

        modalImage.attr("src", $(this).attr("src"));
        modal.fadeIn();

        $(".close").click(function () {
            modal.fadeOut();
        });

        modal.click(function (e) {
            if (!$(e.target).is(".modal-content")) {
                modal.fadeOut();
            }
        });
    });
});

function executeWithCallback(data, callback) {
    console.log(`Processing data: ${data}`);
    callback(data);
}


function processData(data) {
    console.log(`Data processed: ${data}`);
}


executeWithCallback("Sample Data", processData);

const myButton = document.createElement("button");
myButton.innerText = "Click Me";
document.body.appendChild(myButton);

myButton.addEventListener("click", function () {
    console.log("Button clicked! ");
});

function filterCatalog(category) {
    sessionStorage.setItem("selectedCategory", category);
}
