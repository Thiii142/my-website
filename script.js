function previewImages(event) {
    const preview = document.getElementById("photoPreview");
    preview.innerHTML = ""; // xoá ảnh cũ

    const files = event.target.files;

    for (let file of files) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            preview.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}
function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
}
const galleryImages = document.querySelectorAll(".photo-preview img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

function closeLightbox() {
    lightbox.style.display = "none";
}
