'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Info, Star } from 'lucide-react';
import { providers } from './providers';

export default function ProductsPage() {
  const [selectedProvider, setSelectedProvider] = useState('toshiba');
  const [selectedType, setSelectedType] = useState('split');

  const currentProvider = providers.find((p) => p.id === selectedProvider);
  const currentProductType = currentProvider?.productTypes.find((t) => t.id === selectedType);

  return (
    <div className="mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {/* Provider Selection */}
      <Tabs defaultValue={selectedProvider} onValueChange={setSelectedProvider} className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          {providers.map((provider) => (
            <TabsTrigger key={provider.id} value={provider.id} className="flex items-center gap-2">
              <img
                src={provider.logo || '/placeholder.svg'}
                alt={provider.name}
                width={60}
                height={30}
                className="h-6 object-contain"
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {providers.map((provider) => (
          <TabsContent key={provider.id} value={provider.id}>
            <div className="flex flex-col">
              <div className="flex overflow-x-auto pb-4 mb-6 gap-2">
                {provider.productTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? 'default' : 'outline'}
                    onClick={() => setSelectedType(type.id)}
                    className="px-6 py-2 whitespace-nowrap"
                  >
                    {type.name}
                  </Button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    {provider.name} <ChevronRight className="mx-2 h-5 w-5" /> {currentProductType?.name} Units
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentProductType?.subTypes.map((subType) => (
                      <motion.div
                        key={subType.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        className="h-full"
                      >
                        <Card className="">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle>{subType.name}</CardTitle>
                                {subType.type && <CardDescription className="mt-1">{subType.type}</CardDescription>}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col gap-6 items-center mb-4">
                              <img
                                src={subType.image || '/placeholder.svg'}
                                alt={subType.name}
                                width={200}
                                height={200}
                                className="rounded-md object-cover"
                              />
                              <div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-5 w-5 ${
                                        i < Math.floor(subType.rating)
                                          ? 'fill-primary text-primary'
                                          : i < subType.rating
                                            ? 'fill-primary text-primary opacity-50'
                                            : 'text-muted-foreground'
                                      }`}
                                    />
                                  ))}
                                  <span className="ml-2 text-sm text-muted-foreground">
                                    {subType.rating.toFixed(1)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="border-t pt-4">
                            <a href={subType.link} target="_blank" rel="noreferrer" className="w-full">
                              <Button variant="outline" className="w-full">
                                <Info className="mr-2 h-4 w-4" />
                                Details
                              </Button>
                            </a>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
