// Seal settings are measured against the reference document size below.
// Edit this file to change the available images, base position, size, or random movement.
window.SEAL_CONFIG = {
  referenceDocument: {
    width: 1024,
    height: 1448,
  },

  images: [
    "assets/images/seal-1.png",
    "assets/images/seal-2.png",
    "assets/images/seal-3.png",
    "assets/images/seal-4.png",
  ],

  // Top-left corner of the seal box in reference-document pixels.
  position: {
    left: 392,
    top: 1031,
  },

  // A random integer offset is selected from 0 up to each maximum on every page load.
  randomOffset: {
    maxRight: 100,
    maxDown: 70,
  },

  // Seal container size in reference-document pixels. The image keeps its own aspect ratio.
  size: {
    width: 190,
    height: 190,
  },
};
