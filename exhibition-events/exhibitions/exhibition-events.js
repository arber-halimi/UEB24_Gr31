$(document).ready(function () {
    try {
        // Image Gallery Functionality
        $(".image-gallery img").click(function () {
            try {
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
            } catch (err) {
                console.error("Error in image gallery functionality:", err);
            }
        });
    } catch (err) {
        console.error("Error in document ready function:", err);
    }

    try {
        // Catalog Filtering
        function filterCatalog(category) {
            sessionStorage.setItem("selectedCategory", category);
        }

        // Dropdown for Other Exhibitions
        $('#other-exhibitions').change(function () {
            const exhibition = $(this).val();
            if (exhibition) {
                window.location.href = `./${exhibition}.html`; // Redirect to selected exhibition page
            }
        });
        
    } catch (err) {
        console.error("Error in other functions:", err);
    }
});
