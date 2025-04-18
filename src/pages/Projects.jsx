import { useState } from 'react';
import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import clients from '@/clients';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(clients.map((client) => client.category))];

  const filteredClients =
    activeCategory === 'all' ? clients : clients.filter((client) => client.category === activeCategory);

  return (
    <div className="mx-auto py-8 sm:py-12 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Our Clients</h1>
        <p className="text-blue-700/80 max-w-2xl mx-auto">
          We've had the pleasure of working with over 100 amazing clients across various industries. Explore our
          portfolio to see the impact we've made together.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="mb-12">
        <div className="w-full flex justify-center items-center mb-8">
          <TabsList className="flex flex-wrap justify-center h-auto p-1 bg-blue-700/10">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize text-xs sm:text-sm m-1 flex-shrink-0 data-[state=active]:bg-blue-800 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeCategory} className="mt-0">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  borderColor: '#FBBF24'
                }}
                className="bg-white rounded-lg border border-blue-800/20 overflow-hidden flex flex-col"
              >
                {/* Fixed image height */}
                <div className="w-full h-48 overflow-hidden">
                  <img src={client.img} alt={client.clientName} className="w-full h-full object-cover" />
                </div>

                {/* Header with fixed height - truncates long text */}
                <div className="bg-blue-800 text-white p-4 h-24 flex flex-col justify-center">
                  <h3 className="font-medium text-lg line-clamp-1 overflow-hidden text-ellipsis">
                    {client.clientName}
                  </h3>
                  <p className="text-blue-100 text-sm overflow-hidden text-ellipsis">
                    Category: <span className="capitalize">{client.category}</span>
                  </p>
                </div>

                {/* Info section with fixed height */}
                <div className="p-4 h-24 flex flex-col justify-center">
                  <div className="space-y-2">
                    <p className="text-blue-700/80 text-sm">
                      <span className="font-medium">HP/TR:</span> {client.hp.length > 0 ? client.hp : 'NA'}
                    </p>
                    <p className="text-blue-700/80 text-sm">
                      <span className="font-medium">SQFT:</span> {client.sqft.length > 0 ? client.sqft : 'NA'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
