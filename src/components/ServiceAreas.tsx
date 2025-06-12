import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ServiceAreasProps {
  service: 'mutual-fund' | 'gst';
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ service }) => {
  const serviceAreas = [
    { name: 'Deesa', gujarati: 'ડીસા', isMain: true },
    { name: 'Palanpur', gujarati: 'પાલનપુર', isMain: false },
    { name: 'Dhanera', gujarati: 'ધાનેરા', isMain: false },
    { name: 'Tharad', gujarati: 'થરાદ', isMain: false },
    { name: 'Vav', gujarati: 'વાવ', isMain: false },
    { name: 'Danta', gujarati: 'દાંતા', isMain: false },
    { name: 'Kankrej', gujarati: 'કાંકરેજ', isMain: false },
    { name: 'Lakhani', gujarati: 'લાખણી', isMain: false },
    { name: 'Vadgam', gujarati: 'વડગામ', isMain: false },
    { name: 'Bhabhar', gujarati: 'ભાભર', isMain: false },
    { name: 'Suigam', gujarati: 'સુઈગામ', isMain: false },
    { name: 'Santalpur', gujarati: 'સાંતલપુર', isMain: false },
  ];

  const serviceTitle = service === 'mutual-fund' 
    ? 'Mutual Fund Services Coverage Area' 
    : 'GST Services Coverage Area';

  const serviceDescription = service === 'mutual-fund'
    ? 'Professional Mutual Fund and SIP advisory services available across Banaskantha district'
    : 'Expert GST filing, registration, and compliance services throughout Banaskantha region';

  return (
    <section className="mt-8">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="text-center mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <MapPin className="text-blue-600" size={20} />
            {serviceTitle}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {serviceDescription}
          </p>
        </div>

        {/* Main Office */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Main Office - મુખ્ય કાર્યાલય
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">1st Floor, Pitrukrupa Shopping Centre</p>
                <p className="text-gray-600">Deesa, Banaskantha, Gujarat - 385535</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-600 flex-shrink-0" />
              <span>+91 95100 74375</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-600 flex-shrink-0" />
              <span>ankitkachchhawa@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-orange-600 flex-shrink-0" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">
            Service Areas in Banaskantha District - સેવા વિસ્તારો
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {serviceAreas.map((area, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg text-center transition-all duration-300 hover:shadow-md ${
                  area.isMain 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                    : service === 'mutual-fund' 
                      ? 'bg-green-50 hover:bg-green-100 border border-green-200' 
                      : 'bg-blue-50 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                <div className={`font-medium text-sm ${area.isMain ? 'text-white' : 'text-gray-900'}`}>
                  {area.name}
                </div>
                <div className={`text-xs ${area.isMain ? 'text-white/90' : 'text-gray-600'}`}>
                  {area.gujarati}
                </div>
                {area.isMain && (
                  <div className="text-xs text-white/80 mt-1">Main Office</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3 text-center">
            Why Choose Our Services? - અમારી સેવાઓ કેમ પસંદ કરો?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Local Expert</span> - સ્થાનિક નિષ્ણાત
                <p className="text-gray-600">Deep understanding of local business needs</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Quick Service</span> - ઝડપી સેવા
                <p className="text-gray-600">Fast processing and timely delivery</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Competitive Rates</span> - સ્પર્ધાત્મક દરો
                <p className="text-gray-600">Affordable pricing for all services</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium">Trusted Support</span> - વિશ્વસનીય સહાય
                <p className="text-gray-600">Reliable guidance and ongoing support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-3">
            Ready to get started? Contact us today for a free consultation!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919510074375"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/919510074375"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"/>
                <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;