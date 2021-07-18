import React from "react";
import "../styles.css";

import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src:
      "https://i.pinimg.com/564x/b8/f1/2a/b8f12ac57ac7be8c0db12843c9a97b48.jpg",
    thumbnail:
      "https://i.pinimg.com/564x/b8/f1/2a/b8f12ac57ac7be8c0db12843c9a97b48.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 574,
    thumbnailBorderRaduis: 20,
    caption: "We heart it."
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Colors", title: "Ocean" },

      { value: "Life", title: "Differences" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src:
      "hhttps://i.pinimg.com/236x/4f/25/9a/4f259a6047cb83a875f001314be27177.jpg",
    thumbnail:
      "https://i.pinimg.com/236x/4f/25/9a/4f259a6047cb83a875f001314be27177.jpg",
    thumbnailWidth: 720,
    thumbnailHeight: 602
  },
  {
    src:
      "https://i.pinimg.com/236x/86/82/ce/8682ceb449ce0226edbc8d7a67d83643.jpg",
    thumbnail:
      "https://i.pinimg.com/236x/86/82/ce/8682ceb449ce0226edbc8d7a67d83643.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Diverse", title: "People" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src:
      "https://i.pinimg.com/236x/be/c7/9c/bec79c79d942d02038ab817d83b72c75.jpg",
    thumbnail:
      "https://i.pinimg.com/236x/be/c7/9c/bec79c79d942d02038ab817d83b72c75.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412
  },
  {
    src:
      "https://i.pinimg.com/236x/9e/22/5a/9e225a3ab33d8dd29f3ba040cc5794b5.jpg",
    thumbnail:
      "https://i.pinimg.com/236x/9e/22/5a/9e225a3ab33d8dd29f3ba040cc5794b5.jpg",
    thumbnailWidth: 520,
    thumbnailHeight: 574,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    styles: [{ border: 2, borderWidth: 2, borderRadius: 20, margin: 20 }],

    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Diverse", title: "People" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src:
      "https://i.pinimg.com/236x/17/92/ae/1792aee61df141a59d3e9b7d4466e299.jpg",
    thumbnail:
      "https://i.pinimg.com/236x/17/92/ae/1792aee61df141a59d3e9b7d4466e299.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 512,
    borderRadius: 20
  }
];

export default function Usersimages() {
  return (
    <Gallery
      images={IMAGES}
      className="Gallery101"
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Usersimages />, rootElement);
