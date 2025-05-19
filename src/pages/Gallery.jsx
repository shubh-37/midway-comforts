import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tanshiq from '@/assets/tanshiq.jpeg';
import tanshiq1 from '@/assets/tanshiq1.jpeg';
import rustom from '@/assets/rustom.jpeg';
import rustom1 from '@/assets/rustom1.jpeg';
import adfactor from '@/assets/adfactor.jpeg';
import adfactor1 from '@/assets/adfactor1.jpeg';
import yashwant from '@/assets/yashwant.jpeg';
import yashwant1 from '@/assets/yashwant1.jpeg';
import gal1 from '@/assets/gal1.jpg';
import gal2 from '@/assets/gal2.jpg';
import gal3 from '@/assets/gal3.jpg';
import gal4 from '@/assets/gal4.jpg';
import gal5 from '@/assets/gal5.jpg';
import gal6 from '@/assets/gal6.jpg';
import gal7 from '@/assets/gal7.jpg';
import gal8 from '@/assets/gal8.jpg';
import gal9 from '@/assets/gal9.jpg';
import gal10 from '@/assets/gal10.jpg';
import gal11 from '@/assets/gal11.jpg';
import gal12 from '@/assets/gal12.jpg';
import gal13 from '@/assets/gal13.jpg';
import gal14 from '@/assets/gal14.jpg';
import gal15 from '@/assets/gal15.jpg';
import gal16 from '@/assets/gal16.jpg';
import gal18 from '@/assets/gal18.jpg';
import gal19 from '@/assets/gal19.jpg';
import gal20 from '@/assets/gal20.jpg';
import gal21 from '@/assets/gal21.jpg';
import gal22 from '@/assets/gal22.jpg';
import gal23 from '@/assets/gal23.jpg';
import gal24 from '@/assets/gal24.jpg';
import gal25 from '@/assets/gal25.jpg';
import gal26 from '@/assets/gal26.jpg';
import gal27 from '@/assets/gal27.jpg';
import gal28 from '@/assets/gal28.jpg';
import gal29 from '@/assets/gal29.jpg';
import gal30 from '@/assets/gal30.jpg';
import gal31 from '@/assets/gal31.jpg';
import gal32 from '@/assets/gal32.jpg';
import gal33 from '@/assets/gal33.jpg';
import gal34 from '@/assets/gal34.jpg';
import gal35 from '@/assets/gal35.jpg';
import gal36 from '@/assets/gal36.jpg';
import gal37 from '@/assets/gal37.jpg';
import gal38 from '@/assets/gal38.jpg';
import gal39 from '@/assets/gal39.jpg';
import gal40 from '@/assets/gal40.jpg';
import gal41 from '@/assets/gal41.jpg';
import gal42 from '@/assets/gal42.jpg';
import gal43 from '@/assets/gal43.jpg';
import gal44 from '@/assets/gal44.jpg';
// Sample gallery items - replace with actual HVAC project images
const galleryItems = [
  tanshiq,
  tanshiq1,
  rustom,
  rustom1,
  adfactor,
  adfactor1,
  yashwant,
  yashwant1,
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
  gal7,
  gal8,
  gal9,
  gal10,
  gal11,
  gal12,
  gal13,
  gal14,
  gal15,
  gal16,
  gal18,
  gal19,
  gal20,
  gal21,
  gal22,
  gal23,
  gal24,
  gal25,
  gal26,
  gal27,
  gal28,
  gal29,
  gal30,
  gal31,
  gal32,
  gal33,
  gal34,
  gal35,
  gal36,
  gal37,
  gal38,
  gal39,
  gal40,
  gal41,
  gal42,
  gal43,
  gal44
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const currentIndex = selectedImage !== null ? selectedImage : -1;

  const navigateImage = (direction) => {
    if (currentIndex === -1) return;

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setSelectedImage(newIndex);
  };

  return (
    <div className="mx-auto px-4 py-12">
      <div className="mb-12 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold sm:text-4xl md:text-5xl text-blue-700 text-center">Our Work</h1>
          <p className="text-gray-600 md:text-xl text-center">
            Browse through our portfolio of completed HVAC installations, repairs, and maintenance projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="cursor-pointer" onClick={() => openModal(index)}>
              <div className="w-full aspect-square relative overflow-hidden">
                <img src={item} alt="Gallery Image" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
          {selectedImage !== null && currentIndex !== -1 && (
            <div className="relative">
              <div className="relative aspect-video w-full">
                <img src={galleryItems[currentIndex]} alt="Gallery Image" className="w-full h-full object-contain" />
              </div>

              <div className="absolute left-2 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage('prev')}
                  className="rounded-full bg-background/80 hover:bg-background"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage('next')}
                  className="rounded-full bg-background/80 hover:bg-background"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
