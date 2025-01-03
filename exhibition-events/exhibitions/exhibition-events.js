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