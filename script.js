document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll("#education details");

    detailsElements.forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                detailsElements.forEach((otherDetail) => {
                    if (otherDetail !== this) {
                        otherDetail.removeAttribute("open");
                    }
                });
            }
        });
    });
});
