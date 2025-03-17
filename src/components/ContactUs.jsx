import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactUs() {
  return (
    <div className="mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Have questions about our HVAC solutions? Our team of experts is ready to help you with all your heating,
          ventilation, and air conditioning needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Us on WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="mb-6">
              <MessageCircle className="h-24 w-24 text-green-500 mx-auto" />
              <p className="text-center mt-4 text-gray-600">
                Get quick responses to your questions by contacting us directly on WhatsApp. Our team is ready to assist
                you!
              </p>
            </div>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2"
              onClick={() => window.open('https://wa.me/5551234567', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Contact on WhatsApp
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-blue-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Our Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Office Address</h3>
                <p>
                  {' '}
                  Unit 11, Grd.Floor, Universal Indst. Estate, Nr. Wadia School, J.P. Road, Andheri (W), Mumbai - 400
                  058.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p>(022) 2670 1008</p>
                <p>24/7 Emergency Service Available</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p>info@midwaycomforts.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed (Emergency Services Available)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
