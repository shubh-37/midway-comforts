import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ImageComparison({
  images = [
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 1', label: 'STAGE 1' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 2', label: 'STAGE 2' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 3', label: 'STAGE 3' },
    { src: '/placeholder.svg?height=400&width=600', alt: 'Image 4', label: 'STAGE 4' }
  ],
  title = 'Modern HVAC System Upgrade',
  description = 'Replacement of an outdated furnace and AC system with a high-efficiency heat pump system, improving energy efficiency by 40%.',
  location = 'Seattle, WA',
  completionDate = '2022',
  category = 'Residential'
}) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([25, 50, 75]);
  const [isDragging, setIsDragging] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    setIsDragging(index);
  };

  const handleTouchStart = (index) => (e) => {
    setIsDragging(index);
  };

  const handleMouseMove = (e) => {
    if (isDragging === null || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    updatePosition(isDragging, newPosition);
  };

  const handleTouchMove = (e) => {
    if (isDragging === null || !containerRef.current) return;
    e.preventDefault();

    const containerRect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const newPosition = ((touch.clientX - containerRect.left) / containerRect.width) * 100;

    updatePosition(isDragging, newPosition);
  };

  const updatePosition = (index, newPosition) => {
    setPositions((prev) => {
      const updated = [...prev];

      // Ensure the position stays within bounds
      let constrainedPosition = Math.max(5, Math.min(95, newPosition));

      // Ensure sliders don't cross each other
      if (index > 0) {
        constrainedPosition = Math.max(constrainedPosition, positions[index - 1] + 5);
      }
      if (index < positions.length - 1) {
        constrainedPosition = Math.min(constrainedPosition, positions[index + 1] - 5);
      }

      updated[index] = constrainedPosition;
      return updated;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  const handleTouchEnd = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Calculate segment widths
  const segments = [
    { start: 0, end: positions[0] },
    { start: positions[0], end: positions[1] },
    { start: positions[1], end: positions[2] },
    { start: positions[2], end: 100 }
  ];

  return (
    <div className="max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
      <div
        ref={containerRef}
        className="relative h-[300px] sm:h-[400px] select-none touch-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {category && (
          <div className="absolute top-4 left-4 z-50">
            <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">{category}</div>
          </div>
        )}

        {/* Each image in its own segment */}
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 overflow-hidden"
            style={{
              left: `${segments[index].start}%`,
              width: `${segments[index].end - segments[index].start}%`,
              zIndex: 10 + index
            }}
          >
            <div className="absolute inset-0">
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  // Position the image correctly relative to this segment
                  objectPosition: `${(-segments[index].start / (segments[index].end - segments[index].start)) * 100}% 0%`,
                  width: `${100 / ((segments[index].end - segments[index].start) / 100)}%`
                }}
              />
            </div>

            {/* Label for each image
            {index < 3 ? (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {image.label}
              </div>
            ) : (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {image.label}
              </div>
            )} */}
          </div>
        ))}

        {/* Slider handles */}
        {positions.map((position, index) => (
          <div
            key={index}
            className={cn(
              'absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-40',
              isDragging === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
            )}
            style={{ left: `${position}%` }}
            onMouseDown={handleMouseDown(index)}
            onTouchStart={handleTouchStart(index)}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
              <div className="flex">
                <ChevronLeft className="h-4 w-4" />
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>Completed: {completionDate}</span>
        </div>
      </div>
    </div>
  );
}
