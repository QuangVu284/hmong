document.addEventListener("DOMContentLoaded", function () {
  const galleryModal = document.getElementById("galleryModal");
  if (!galleryModal) return;

  const modalImg = galleryModal.querySelector(".modal-img");
  const modalCaption = galleryModal.querySelector(".modal-caption");

  galleryModal.addEventListener("show.bs.modal", function (event) {
    const trigger = event.relatedTarget;
    const imgSrc = trigger.getAttribute("data-img-src");
    const caption = trigger.getAttribute("data-caption") || "";
    modalImg.src = imgSrc;
    modalCaption.textContent = caption;
  });
});
