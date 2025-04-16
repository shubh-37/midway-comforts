'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import clients from '@/clients';

export default function ProjectsPage() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(clients.map((client) => client.category))];

  const filteredClients =
    activeCategory === 'all' ? clients : clients.filter((client) => client.category === activeCategory);

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setIsOpen(true);
  };

  return (
    <div className="mx-auto py-8 sm:py-12 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Our Clients</h1>
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
                className="capitalize text-xs sm:text-sm m-1 flex-shrink-0 data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeCategory} className="mt-0">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  borderColor: '#FBBF24' // Yellow border on hover
                }}
                className="bg-white rounded-lg p-2 border border-blue-700/20 cursor-pointer flex flex-col items-center justify-center h-40"
                onClick={() => handleClientClick(client)}
              >
                <div className="flex items-center justify-center mb-4">
                  <img src={client.img} alt={client.name} className="max-h-20 object-containx" />
                </div>
                <h3 className="text-sm font-medium text-center line-clamp-2 text-blue-700">{client.clientName}</h3>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <DialogHeader className="bg-blue-700 text-white p-4 -m-6 mb-4 rounded-t-lg">
            <DialogTitle>{selectedClient?.clientName}</DialogTitle>
            <DialogDescription className="text-blue-100">
              Category: <span className="capitalize">{selectedClient?.category}</span>
            </DialogDescription>
          </DialogHeader>
          <div>
            <div className="relative w-full mb-4 overflow-hidden rounded-md border-2 border-yellow-400 p-1 flex items-center justify-center">
              {selectedClient && (
                <img
                  src={selectedClient.img}
                  alt={`Work for ${selectedClient.clientName}`}
                  className="object-contain"
                />
              )}
            </div>
            <p className="text-blue-700/80">HP/TR: {selectedClient?.hp.length > 0 ? selectedClient?.hp : 'NA'}</p>
            <p className="text-blue-700/80">SQFT: {selectedClient?.sqft.length > 0 ? selectedClient?.sqft : 'NA'}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
