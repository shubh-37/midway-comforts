import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Zap, Check, Info, MessageCircle } from 'lucide-react';

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
  const [additionalFactors, setAdditionalFactors] = useState({
    kitchen: false,
    highCeilings: false,
    electronics: false
  });
  const [result, setResult] = useState(null);

  const calculateSquareFootage = () => {
    const length = parseFloat(dimensions.length) || 0;
    const width = parseFloat(dimensions.width) || 0;
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

    const windowCount = parseInt(building.windows) || 0;
    const windowFactor = 1 + windowCount * 0.005;
    baseTonnage *= windowFactor;

    const roomTypeFactor = getRoomTypeFactor(usage.roomType);
    baseTonnage *= roomTypeFactor;

    const occupantCount = parseInt(usage.occupants) || 1;
    const occupancyFactor = 1 + (occupantCount - 1) * 0.003;
    baseTonnage *= occupancyFactor;

    if (additionalFactors.kitchen) baseTonnage *= 1.03;
    if (additionalFactors.highCeilings) baseTonnage *= 1.03;
    if (additionalFactors.electronics) baseTonnage *= 1.02;

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
    <div className="mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <div className="text-sm font-medium text-blue-600 mb-2">HVAC Tools</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AC Tonnage Calculator</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Determine the right size air conditioning system for your space. Our calculator provides an estimate based on
          your room dimensions and other factors. For a professional assessment, contact our team with 26 years of HVAC
          expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Enter Your Space Details</h2>

          {/* Room Dimensions */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Room Dimensions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length">Length (feet)</Label>
                <Input
                  id="length"
                  type="number"
                  placeholder="0"
                  value={dimensions.length}
                  onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (feet)</Label>
                <Input
                  id="width"
                  type="number"
                  placeholder="0"
                  value={dimensions.width}
                  onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ceiling-height">Ceiling Height (feet)</Label>
                <Input
                  id="ceiling-height"
                  type="number"
                  placeholder="8"
                  value={dimensions.ceilingHeight}
                  onChange={(e) => setDimensions({ ...dimensions, ceilingHeight: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Location Factors */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Location Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="climate-zone">Climate Zone</Label>
                <Select
                  value={location.climateZone}
                  onValueChange={(value) => setLocation({ ...location, climateZone: value })}
                >
                  <SelectTrigger id="climate-zone">
                    <SelectValue placeholder="Select your climate" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="hot">Hot (32°C+ summers)</SelectItem>
                    <SelectItem value="warm">Warm (26-32°C summers)</SelectItem>
                    <SelectItem value="moderate">Moderate (21-26°C summers)</SelectItem>
                    <SelectItem value="cool">Cool (below 21°C summers)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sun-exposure">Sun Exposure</Label>
                <Select
                  value={location.sunExposure}
                  onValueChange={(value) => setLocation({ ...location, sunExposure: value })}
                >
                  <SelectTrigger id="sun-exposure">
                    <SelectValue placeholder="Select exposure level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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
          <div className="mb-6">
            <h3 className="font-medium mb-3">Building Characteristics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="insulation">Insulation Quality</Label>
                <Select
                  value={building.insulation}
                  onValueChange={(value) => setBuilding({ ...building, insulation: value })}
                >
                  <SelectTrigger id="insulation">
                    <SelectValue placeholder="Select insulation level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="poor">Poor (minimal insulation)</SelectItem>
                    <SelectItem value="average">Average (standard insulation)</SelectItem>
                    <SelectItem value="good">Good (well insulated)</SelectItem>
                    <SelectItem value="excellent">Excellent (premium insulation)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="windows">Number of Windows</Label>
                <Input
                  id="windows"
                  type="number"
                  placeholder="0"
                  value={building.windows}
                  onChange={(e) => setBuilding({ ...building, windows: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Room Usage */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Room Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="room-type">Room Type</Label>
                <Select value={usage.roomType} onValueChange={(value) => setUsage({ ...usage, roomType: value })}>
                  <SelectTrigger id="room-type">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white cursor-pointer">
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
                <Label htmlFor="occupants">Average Occupants</Label>
                <Input
                  id="occupants"
                  type="number"
                  placeholder="1"
                  value={usage.occupants}
                  onChange={(e) => setUsage({ ...usage, occupants: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Additional Factors */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Additional Factors</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="kitchen"
                  checked={additionalFactors.kitchen}
                  onCheckedChange={(checked) =>
                    setAdditionalFactors({ ...additionalFactors, kitchen: checked === true })
                  }
                />
                <Label htmlFor="kitchen">Kitchen with heat-generating appliances</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="high-ceilings"
                  checked={additionalFactors.highCeilings}
                  onCheckedChange={(checked) =>
                    setAdditionalFactors({ ...additionalFactors, highCeilings: checked === true })
                  }
                />
                <Label htmlFor="high-ceilings">High ceilings (over 10 feet)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="electronics"
                  checked={additionalFactors.electronics}
                  onCheckedChange={(checked) =>
                    setAdditionalFactors({ ...additionalFactors, electronics: checked === true })
                  }
                />
                <Label htmlFor="electronics">Significant electronic equipment</Label>
              </div>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" onClick={handleCalculate}>
            Calculate Recommended AC Size <Info className="ml-2 h-4 w-4" />
          </Button>

          {result && (
            <Card className="mt-6 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Calculation Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    Recommended AC Size: <span className="text-blue-700 font-bold">{result.tonnage} tons</span>
                  </p>
                  <p>Room Size: {result.squareFootage} square feet</p>
                  <p className="text-sm text-gray-600 mt-2">{result.recommendation}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Understanding AC Tonnage</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Air conditioner size is measured in "Tons," which refers to the cooling capacity of the system. One
                  ton equals 12,000 BTU/hr (British Thermal Units per hour).
                  <br />
                  <span className="font-semibold">
                    (The AC tonnage calculator provided on this site is intended for general reference only. While it
                    offers useful estimates, it may not account for all factors affecting cooling needs. For accurate
                    recommendations tailored to your specific requirements, we recommend consulting a certified HVAC
                    professional.)
                  </span>
                </p>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium mb-2">Why proper sizing matters:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Undersized systems run constantly without providing adequate cooling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Oversized systems cycle too frequently, causing temperature swings and humidity issues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Properly sized systems provide optimal comfort and energy efficiency
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg flex">
                  <div className="mr-4">
                    <div className="bg-blue-600 rounded-full p-2 text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">26 Years of Expert Sizing & Installation</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Trust our experienced technicians to help you select the perfect HVAC system for your specific
                      needs. We've been sizing and installing systems correctly since 1999.
                    </p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-lg flex items-center gap-2 w-full"
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
