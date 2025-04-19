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

// Sample gallery items - replace with actual HVAC project images
const galleryItems = [
  {
    id: 1,
    title: 'Commercial HVAC Installation',
    category: 'installations',
    description: 'Complete HVAC system installation for a 10,000 sq ft office building',
    imageUrl: tanshiq
  },
  {
    id: 2,
    title: 'Residential AC Repair',
    category: 'repairs',
    description: 'Emergency AC repair service for a family home during summer',
    imageUrl: tanshiq1
  },
  {
    id: 3,
    title: 'Ductwork Replacement',
    category: 'installations',
    description: 'Complete ductwork replacement for improved air quality and efficiency',
    imageUrl: rustom
  },
  {
    id: 4,
    title: 'Annual Maintenance',
    category: 'maintenance',
    description: 'Scheduled maintenance service for a retail store HVAC system',
    imageUrl: rustom1
  },
  {
    id: 5,
    title: 'Heat Pump Installation',
    category: 'installations',
    description: 'Energy-efficient heat pump installation for a modern home',
    imageUrl: adfactor
  },
  {
    id: 6,
    title: 'Commercial Maintenance',
    category: 'maintenance',
    description: 'Quarterly maintenance for a restaurant ventilation system',
    imageUrl: adfactor1
  },
  {
    id: 7,
    title: 'Emergency Repair',
    category: 'repairs',
    description: '24-hour emergency repair service for a broken heating system',
    imageUrl: yashwant
  },
  {
    id: 8,
    title: 'New Construction Installation',
    category: 'installations',
    description: 'Complete HVAC system design and installation for new construction',
    imageUrl: yashwant1
  }
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => setSelectedImage(id);
  const closeModal = () => setSelectedImage(null);

  const currentIndex = selectedImage !== null ? galleryItems.findIndex((item) => item.id === selectedImage) : -1;

  const navigateImage = (direction) => {
    if (currentIndex === -1) return;

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setSelectedImage(galleryItems[newIndex].id);
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
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="cursor-pointer" onClick={() => openModal(item.id)}>
              <div className="w-full aspect-square relative overflow-hidden">
                <img
                  src={item.imageUrl || '/placeholder.svg'}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text bar below the image */}
              <div className="p-3 bg-white border-t border-gray-100">
                <h3 className="font-semibold text-lg text-blue-700 truncate">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
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
                <img
                  src={galleryItems[currentIndex].imageUrl || '/placeholder.svg'}
                  alt={galleryItems[currentIndex].title}
                  className="w-full h-full object-contain"
                />
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

              <div className="p-4 bg-primary text-black">
                <h2 className="text-xl font-semibold text-secondary">{galleryItems[currentIndex].title}</h2>
                <p className="mt-1">{galleryItems[currentIndex].description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
