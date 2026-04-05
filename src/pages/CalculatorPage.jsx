import { useState } from 'react';
import SEO from '@/seo/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap, Check, Info, MessageCircle, Calculator } from 'lucide-react';

function CalculatorPage() {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    ceilingHeight: '8'
  });
  const [location, setLocation] = useState({
    climateZone: '',
    sunExposure: ''
  });
  const [building, setBuilding] = useState({
    insulation: '',
    windows: ''
  });
  const [usage, setUsage] = useState({
    roomType: '',
    occupants: '1'
  });
  const [result, setResult] = useState(null);

  const calculateSquareFootage = () => {
    const length = Number.parseFloat(dimensions.length) || 0;
    const width = Number.parseFloat(dimensions.width) || 0;
    return length * width;
  };

  const calculateTonnage = () => {
    const squareFootage = calculateSquareFootage();
    let baseTonnage = squareFootage / 125;

    const climateFactor = getClimateFactor(location.climateZone);
    baseTonnage *= climateFactor;

    const exposureFactor = getExposureFactor(location.sunExposure);
    baseTonnage *= exposureFactor;

    const insulationFactor = getInsulationFactor(building.insulation);
    baseTonnage *= insulationFactor;

    const windowCount = Number.parseInt(building.windows) || 0;
    const windowFactor = 1 + windowCount * 0.005;
    baseTonnage *= windowFactor;

    const roomTypeFactor = getRoomTypeFactor(usage.roomType);
    baseTonnage *= roomTypeFactor;

    const occupantCount = Number.parseInt(usage.occupants) || 1;
    const occupancyFactor = 1 + (occupantCount - 1) * 0.003;
    baseTonnage *= occupancyFactor;

    const roundedTonnage = Math.round(baseTonnage * 2) / 2;

    let recommendation = '';
    if (roundedTonnage <= 1.5) {
      recommendation = 'Mini-split or window unit recommended for small spaces.';
    } else if (roundedTonnage <= 2.5) {
      recommendation = 'Central air conditioning system with proper ductwork recommended.';
    } else if (roundedTonnage <= 4) {
      recommendation = 'High-capacity central air system recommended. Consider zoning for efficiency.';
    } else {
      recommendation = 'Multiple units or a commercial-grade system recommended for this large space.';
    }

    return {
      tonnage: roundedTonnage,
      squareFootage,
      recommendation
    };
  };

  const getClimateFactor = (climate) => {
    switch (climate) {
      case 'hot':
        return 1.02;
      case 'warm':
        return 1.01;
      case 'moderate':
        return 1.0;
      case 'cool':
        return 0.98;
      default:
        return 1.0;
    }
  };

  const getExposureFactor = (exposure) => {
    switch (exposure) {
      case 'high':
        return 1.03;
      case 'moderate':
        return 1.01;
      case 'low':
        return 1.0;
      case 'none':
        return 0.98;
      default:
        return 1.0;
    }
  };

  const getInsulationFactor = (insulation) => {
    switch (insulation) {
      case 'poor':
        return 1.02;
      case 'average':
        return 1.01;
      case 'good':
        return 1.0;
      case 'excellent':
        return 0.98;
      default:
        return 1.0;
    }
  };

  const getRoomTypeFactor = (roomType) => {
    switch (roomType) {
      case 'kitchen':
        return 1.03;
      case 'living':
        return 1.02;
      case 'bedroom':
        return 1.0;
      case 'office':
        return 1.01;
      case 'basement':
        return 0.98;
      default:
        return 1.0;
    }
  };

  const handleCalculate = () => {
    const result = calculateTonnage();
    setResult(result);
  };

  return (
    <div className="bg-background py-8 px-4">
      <SEO page="calculator" />
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-4 py-1 rounded-full mb-4">
          <Calculator className="h-4 w-4" />
          <span>HVAC TOOLS</span>
        </div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">AC Tonnage Calculator</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Determine the right size air conditioning system for your space. Our calculator provides an estimate based on
          your room dimensions and other factors. For a professional assessment, contact our team with 26 years of HVAC
          expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2 bg-card border border-border shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 text-primary flex items-center">
            <span className="bg-blue-600 text-white p-1 rounded mr-2 text-xs">01</span>
            Enter Your Space Details
          </h2>

          {/* Room Dimensions */}
          <div className="mb-6 bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-medium mb-3 text-primary">Room Dimensions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length" className="text-foreground">
                  Length (feet)
                </Label>
                <Input
                  id="length"
                  type="number"
                  placeholder="0"
                  value={dimensions.length}
                  onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width" className="text-foreground">
                  Width (feet)
                </Label>
                <Input
                  id="width"
                  type="number"
                  placeholder="0"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ceiling-height" className="text-foreground">
                  Ceiling Height (feet)
                </Label>
                <Input
                  id="ceiling-height"
                  type="number"
                  placeholder="8"
                  value={dimensions.ceilingHeight}
                  onChange={(e) => setDimensions({ ...dimensions, ceilingHeight: e.target.value })}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Location Factors */}
          <div className="mb-6 bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-medium mb-3 text-primary">Location Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="climate-zone" className="text-foreground">
                  Climate Zone
                </Label>
                <Select
                  value={location.climateZone}
                  onValueChange={(value) => setLocation({ ...location, climateZone: value })}
                >
                  <SelectTrigger id="climate-zone" className="border-blue-200">
                    <SelectValue placeholder="Select your climate" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="hot">Hot (32°C+ summers)</SelectItem>
                    <SelectItem value="warm">Warm (26-32°C summers)</SelectItem>
                    <SelectItem value="moderate">Moderate (21-26°C summers)</SelectItem>
                    <SelectItem value="cool">Cool (below 21°C summers)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sun-exposure" className="text-foreground">
                  Sun Exposure
                </Label>
                <Select
                  value={location.sunExposure}
                  onValueChange={(value) => setLocation({ ...location, sunExposure: value })}
                >
                  <SelectTrigger id="sun-exposure" className="border-blue-200">
                    <SelectValue placeholder="Select exposure level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="high">High (direct sun most of the day)</SelectItem>
                    <SelectItem value="moderate">Moderate (partial sun exposure)</SelectItem>
                    <SelectItem value="low">Low (minimal direct sunlight)</SelectItem>
                    <SelectItem value="none">None (no direct sunlight)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Building Characteristics */}
          <div className="mb-6 bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-medium mb-3 text-primary">Building Characteristics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="insulation" className="text-foreground">
                  Insulation Quality
                </Label>
                <Select
                  value={building.insulation}
                  onValueChange={(value) => setBuilding({ ...building, insulation: value })}
                >
                  <SelectTrigger id="insulation" className="border-blue-200">
                    <SelectValue placeholder="Select insulation level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="poor">Poor (minimal insulation)</SelectItem>
                    <SelectItem value="average">Average (standard insulation)</SelectItem>
                    <SelectItem value="good">Good (well insulated)</SelectItem>
                    <SelectItem value="excellent">Excellent (premium insulation)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="windows" className="text-foreground">
                  Number of Windows
                </Label>
                <Input
                  id="windows"
                  type="number"
                  placeholder="0"
                  value={building.windows}
                  onChange={(e) => setBuilding({ ...building, windows: e.target.value })}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Room Usage */}
          <div className="mb-6 bg-muted p-4 rounded-lg border border-border">
            <h3 className="font-medium mb-3 text-primary">Room Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="room-type" className="text-foreground">
                  Room Type
                </Label>
                <Select value={usage.roomType} onValueChange={(value) => setUsage({ ...usage, roomType: value })}>
                  <SelectTrigger id="room-type" className="border-blue-200">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="living">Living Room</SelectItem>
                    <SelectItem value="bedroom">Bedroom</SelectItem>
                    <SelectItem value="kitchen">Kitchen</SelectItem>
                    <SelectItem value="office">Home Office</SelectItem>
                    <SelectItem value="basement">Basement</SelectItem>
                    <SelectItem value="open">Open Floor Plan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupants" className="text-foreground">
                  Average Occupants
                </Label>
                <Input
                  id="occupants"
                  type="number"
                  placeholder="1"
                  value={usage.occupants}
                  onChange={(e) => setUsage({ ...usage, occupants: e.target.value })}
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6"
            size="lg"
            onClick={handleCalculate}
          >
            Calculate Recommended AC Size <Calculator className="ml-2 h-5 w-5" />
          </Button>

          {result && (
            <Card className="mt-6 border-blue-500 bg-card">
              <CardHeader className=" rounded-t-lg">
                <CardTitle className="text-blue-700 flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Calculation Result
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Recommended AC Size:</span>
                    <span className="text-2xl font-bold text-blue-700">{result.tonnage} tons</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-blue-100 pt-2">
                    <span className="text-foreground">Room Size:</span>
                    <span className="font-medium text-blue-600">{result.squareFootage} square feet</span>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4 border-l-4 border-yellow-400">
                    <p className="text-sm text-foreground">{result.recommendation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-card border border-border shadow-lg overflow-hidden">
            <CardHeader className="text-blue-600 border-b border-blue-200">
              <CardTitle className="flex items-center text-lg">
                <Info className="mr-2 h-5 w-5" />
                Understanding AC Tonnage
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-foreground">
                  Air conditioner size is measured in "Tons," which refers to the cooling capacity of the system. One
                  ton equals 12,000 BTU/hr (British Thermal Units per hour).
                </p>

                <div className="bg-muted p-3 rounded-lg border border-border">
                  <p className="text-blue-800 dark:text-blue-300 font-semibold text-sm">
                    The AC tonnage calculator provided on this site is intended for general reference only. While it
                    offers useful estimates, it may not account for all factors affecting cooling needs. For accurate
                    recommendations tailored to your specific requirements, we recommend consulting a certified HVAC
                    professional.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4 py-2">
                  <h3 className="font-medium mb-2 text-blue-800 dark:text-blue-300">Why proper sizing matters:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-muted rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-700 dark:text-blue-400" />
                      </div>
                      <span className="text-sm text-foreground">
                        Undersized systems run constantly without providing adequate cooling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-muted rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-700 dark:text-blue-400" />
                      </div>
                      <span className="text-sm text-foreground">
                        Oversized systems cycle too frequently, causing temperature swings and humidity issues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-muted rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-700 dark:text-blue-400" />
                      </div>
                      <span className="text-sm text-foreground">
                        Properly sized systems provide optimal comfort and energy efficiency
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-lg flex border border-border">
                  <div className="mr-4">
                    <div className="bg-yellow-400 rounded-full p-2 text-black">
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">26 Years of Expert Sizing & Installation</h3>
                    <p className="text-sm text-foreground mt-1">
                      Trust our experienced technicians to help you select the perfect HVAC system for your specific
                      needs. We've been sizing and installing systems correctly since 1999.
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-6 rounded-lg flex items-center justify-center gap-2 w-full"
                  onClick={() => window.open('https://wa.me/5551234567', '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                  Contact Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPage;
