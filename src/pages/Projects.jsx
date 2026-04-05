import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import clients from '@/clients';
import SEO from '@/seo/SEO';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(clients.map((client) => client.category))];

  const filteredClients =
    activeCategory === 'all' ? clients : clients.filter((client) => client.category === activeCategory);

  return (
    <div className="mx-auto py-8 sm:py-12 px-2 sm:px-4 bg-background min-h-screen">
      <SEO page="projects" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <span className="inline-block bg-muted text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Our Portfolio
        </span>
        <h1 className="text-4xl font-bold mb-4 text-primary">Our Clients</h1>
        <p className="text-muted-foreground">
          We've had the pleasure of working with over 100 amazing clients across various industries. Explore our
          portfolio to see the impact we've made together.
        </p>
      </motion.div>

      {/* Pill filter tabs */}
      <div className="w-full flex justify-center items-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-muted rounded-2xl border border-border">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'capitalize px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                activeCategory === category
                  ? 'bg-blue-800 text-white shadow-md'
                  : 'text-muted-foreground hover:bg-secondary hover:text-primary'
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Client grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence>
          {filteredClients.map((client) => (
            <motion.div
              key={client.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm group cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Base image */}
              <img
                src={client.img}
                alt={client.clientName}
                className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-base leading-tight mb-1.5">
                  {client.clientName}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-semibold px-2 py-0.5 rounded-full capitalize">
                    {client.category}
                  </span>
                  {client.hp && client.hp.length > 0 && (
                    <span className="text-blue-200 text-xs">HP/TR: {client.hp}</span>
                  )}
                  {client.sqft && client.sqft.length > 0 && (
                    <span className="text-blue-200 text-xs">SQFT: {client.sqft}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
