import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://i.postimg.cc/FKQBZy35/pt1.png",
      shape: "wide" // wide rectangle
    },
    {
      id: 2,
      url: "https://i.postimg.cc/BvcwwjB8/pt2.png",
      shape: "square" // square
    },
    {
      id: 3,
      url: "https://i.postimg.cc/XND1hSdg/pt3.png",
      shape: "circle" // circle
    },
    {
      id: 4,
      url: "https://i.postimg.cc/0y7tbz3t/pt5.png",
      category: "Events",
      shape: "square" // square
    },
    {
      id: 5,
      url: "https://i.postimg.cc/G2674vc5/pt4.png",
      shape: "wide" // wide rectangle
    },
    {
      id: 6,
      url: "https://i.postimg.cc/MK23x03c/pt6.png",
      shape: "circle" // circle
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  // Function to determine container class based on shape and screen size
  const getContainerClass = (shape: string) => {
    switch(shape) {
      case 'wide':
        return 'col-span-2 md:col-span-2 aspect-[2/1]'; // Wider aspect ratio (2 columns)
      case 'circle':
        return 'aspect-square rounded-full overflow-hidden'; // Perfect circle
      case 'square':
      default:
        return 'aspect-square'; // Square
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    }
  };

  return (
    <section id="gallery" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Best Moments</h2>
          <div className="w-16 sm:w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
            Capturing the journey of learning, growth, and achievement at Padma Tutorials.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${getContainerClass(image.shape)}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={`Gallery image ${image.id}`}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  image.shape === 'circle' ? 'rounded-full' : 'rounded-md sm:rounded-lg'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3">
                <div className="text-white">
                  {/* Optional: Add captions here */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative w-full max-w-4xl mx-2 sm:mx-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-1 sm:p-2"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-1 sm:p-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-1 sm:p-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
              </button>

              <div className="flex items-center justify-center h-full">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={`Selected gallery image ${galleryImages[selectedImage].id}`}
                  className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-md sm:rounded-lg"
                />
              </div>
              
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 text-white text-sm sm:text-base">
                {/* Optional: Add image counter or caption */}
                <span>{selectedImage + 1} / {galleryImages.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;