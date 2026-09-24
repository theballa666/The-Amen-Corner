//gallery_expand.js - makes .galleryItem boxes expandable to reveal a description.
//Clicking a box expands it to full width (pushing later boxes down onto new rows);
//clicking it again, or clicking a different box in the same section, collapses it.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".galleryGrid").forEach(function (grid) {
        grid.querySelectorAll(".galleryItem").forEach(function (item) {
            item.addEventListener("click", function () {
                const wasExpanded = item.classList.contains("expanded");

                //collapse any other expanded item in this same grid section
                grid.querySelectorAll(".galleryItem.expanded").forEach(function (other) {
                    other.classList.remove("expanded");
                });

                //re-open this one only if it wasn't already open (so clicking an open box closes it)
                if (!wasExpanded) {
                    item.classList.add("expanded");
                }
            });
        });
    });
});