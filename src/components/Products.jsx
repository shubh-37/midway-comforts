import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Info, Star } from 'lucide-react';
import { providers } from './providers';

export default function ProductsPage() {
  const [selectedProvider, setSelectedProvider] = useState('toshiba');
  const [selectedType, setSelectedType] = useState(() => {
    const initialProvider = providers.find((p) => p.id === 'toshiba');
    return initialProvider?.productTypes[0]?.id || 'split';
  });

  const handleProviderChange = (providerId) => {
    setSelectedProvider(providerId);

    const newProvider = providers.find((p) => p.id === providerId);
    if (newProvider && newProvider.productTypes.length > 0) {
      setSelectedType(newProvider.productTypes[0].id);
    }
  };

  const currentProvider = providers.find((p) => p.id === selectedProvider);
  const currentProductType = currentProvider?.productTypes.find((t) => t.id === selectedType);

  return (
    <div className=" bg-white text-slate-900">
      <div className="mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-600">Our Products</h1>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md mb-10">
          <Tabs defaultValue={selectedProvider} onValueChange={handleProviderChange} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-6 ">
              {providers.map((provider) => (
                <TabsTrigger
                  key={provider.id}
                  value={provider.id}
                  className=" data-[state=active]:bg-slate-100 data-[state=active]:text-white"
                >
                  <img
                    src={provider.logo || '/placeholder.svg'}
                    alt={provider.name}
                    width={100}
                    height={50}
                    className="h-8 object-contain"
                  />
                </TabsTrigger>
              ))}
            </TabsList>

            {providers.map((provider) => (
              <TabsContent key={provider.id} value={provider.id}>
                <div className="flex flex-col">
                  <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-hide">
                    {provider.productTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedType === type.id ? 'default' : 'outline'}
                        onClick={() => setSelectedType(type.id)}
                        className={`px-6 py-2 whitespace-nowrap ${
                          selectedType === type.id
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-500'
                            : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                        }`}
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
                      <h2 className="text-2xl font-semibold mb-8 flex items-center text-blue-700">
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
                          >
                            <Card className="bg-white border border-slate-200 h-[450px] flex flex-col">
                              <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-slate-900">{subType.name}</CardTitle>
                                    {subType.type && (
                                      <CardDescription className="mt-1 text-slate-600">{subType.type}</CardDescription>
                                    )}
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="flex-grow flex flex-col items-center justify-center py-2">
                                {' '}
                                {/* Reduced padding */}
                                <div className="flex flex-col gap-4 items-center">
                                  {' '}
                                  {/* Reduced gap from 6 to 4 */}
                                  <div className="h-[160px] w-[160px] flex items-center justify-center">
                                    {' '}
                                    {/* Reduced from 200px to 160px */}
                                    <img
                                      src={subType.image || '/placeholder.svg'}
                                      alt={subType.name}
                                      className="max-h-full max-w-full object-contain"
                                    />
                                  </div>
                                  <div>
                                    <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-5 w-5 ${
                                            i < Math.floor(subType.rating)
                                              ? 'fill-yellow-400 text-yellow-400'
                                              : i < subType.rating
                                                ? 'fill-yellow-400 text-yellow-400 opacity-50'
                                                : 'text-slate-300'
                                          }`}
                                        />
                                      ))}
                                      <span className="ml-2 text-sm text-slate-600">{subType.rating.toFixed(1)}</span>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                              <CardFooter className="border-t border-slate-200 pt-4 mt-auto">
                                <a href={subType.link} target="_blank" rel="noreferrer" className="w-full">
                                  <Button
                                    variant="outline"
                                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                                  >
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
      </div>
    </div>
  );
}
