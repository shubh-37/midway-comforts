import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import whatsapp from '@/assets/whatsapp.png';

export default function ContactUs() {
  return (
    <div className="relative mx-auto px-4 py-16 bg-background bg-dot-grid">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4 dark:text-slate-100">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-slate-400">
          Have questions about our HVAC solutions? Our team of experts is ready to help you with all your heating,
          ventilation, and air conditioning needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* WhatsApp card */}
        <div className="glass-card-light rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full shadow-lg">
          <div className="mb-6">
            <img src={whatsapp} className="h-24 w-24 mx-auto" alt="WhatsApp" />
            <p className="text-center mt-4 text-gray-600 dark:text-slate-400">
              Get quick responses to your questions by contacting us directly on WhatsApp. Our team is ready to assist
              you!
            </p>
          </div>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => window.open('https://wa.me/9324775501', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            Contact on WhatsApp
          </Button>
        </div>

        {/* Contact info card */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 text-white shadow-xl p-6 h-full space-y-6">
          <h2 className="text-2xl font-bold">Our Contact Information</h2>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-700/60 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Office Address</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Unit 11, Grd.Floor, Universal Indst. Estate, Nr. Wadia School, J.P. Road, Andheri (W), Mumbai - 400 058.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-700/60 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-white/85 text-sm">(+91) 9930267231</p>
              <p className="text-white/85 text-sm">(+91) 9324775501</p>
              <p className="text-white/70 text-xs mt-1">24/7 Emergency Service Available</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-700/60 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-white/85 text-sm">projects@midwaycomforts.in</p>
              <p className="text-white/85 text-sm">midwaycomforts@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-700/60 flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Business Hours</h3>
              <p className="text-white/85 text-sm">Monday - Saturday: 9:30 AM - 7:00 PM</p>
              <p className="text-white/70 text-xs mt-1">Sunday: Closed (Emergency Services Available)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
