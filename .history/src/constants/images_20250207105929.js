        {[
  images.recipe1,
  images.recipe2,
  images.recipe3,
  images.recipe4,
  images.recipe5,
  images.recipe6,
  images.recipe7,
  images.recipe8
].map((image, index) => (
  <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
    <img src={image} alt={`recipe_image_${index + 1}`} />
    <BsInstagram className="gallery__image-icon" />
  </div>
))}