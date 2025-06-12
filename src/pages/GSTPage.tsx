import React, { useState } from 'react';
import { FileText, AlertTriangle, HelpCircle, MapPin, Phone, Mail } from 'lucide-react';
import ServiceAreas from '../components/ServiceAreas';

const gstFaqItems = [
  {
    question: 'GST રજિસ્ટ્રેશન માટે કઈ ટર્નઓવર લિમિટ છે?',
    answer: 'સર્વિસ પ્રોવાઇડર્સ માટે ₹20 લાખ સુધી અને ગુડ્સ સપ્લાયર્સ માટે ₹40 લાખ સુધીની ટર્નઓવર લિમિટ છે. આઉટ-ઓફ-સ્ટેટ સપ્લાય અને ઈ-કોમર્સ ઑપરેટર્સ માટે કોઈ લિમિટ નથી.',
  },
  {
    question: 'GST રિટર્ન કેટલી વાર ફાઇલ કરવો પડે છે?',
    answer: 'GSTR-1 (આઉટવર્ડ સપ્લાય) માસિક/ત્રિમાસિક, GSTR-3B (સારાંશ રિટર્ન) માસિક, અને GSTR-9 (વાર્ષિક રિટર્ન) દર વર્ષે ફાઇલ કરવું પડે છે.',
  },
  {
    question: 'GSTમાં લેટ ફી કેટલી લાગે છે?',
    answer: 'GSTR-3B માટે રોજ ₹50 (CGST + SGST), મહત્તમ ₹5,000. નિલંબિત GSTIN માટે ₹10,000 (CGST + SGST) લેટ ફી લાગે છે.',
  },
  {
    question: 'GST રજિસ્ટ્રેશન માટે કેટલો સમય લાગે છે?',
    answer: 'સામાન્ય રીતે 3-7 દિવસ લાગે છે. બધા દસ્તાવેજો સાચા હોય તો ઓનલાઈન રજિસ્ટ્રેશન ઝડપથી થઈ જાય છે.',
  },
  {
    question: 'GST રિટર્ન ફાઇલ કરવામાં મોડું થાય તો શું થાય?',
    answer: 'લેટ ફી ભરવી પડે છે. વધુ મોડું થાય તો GSTIN સસ્પેન્ડ પણ થઈ શકે છે. તેથી સમયસર રિટર્ન ફાઇલ કરવું જરૂરી છે.',
  },
];

const gstDocumentItems = [
  'પાન કાર્ડ',
  'આધાર કાર્ડ',
  'બિઝનેસ એડ્રેસ પ્રૂફ (ઇલેક્ટ્રીસીટી બીલ/રેન્ટ એગ્રીમેન્ટ)',
  'બેંક પાસબુક / કેન્સલ ચેક',
  'ફોટોગ્રાફ (પ્રોપ્રાયટર/પાર્ટનર/ડાયરેક્ટર)',
  'બિઝનેસ રજિસ્ટ્રેશન પ્રૂફ',
  'સહી (SIGNATURE) નો નમૂનો',
  'ઈમેઇલ ID અને મોબાઇલ નંબર'
];

const gstRules = [
  '18% થી વધુ GST રેટ પર ઈનપુટ ટેક્સ ક્રેડિટનો દાવો કરવા ઇનવોઇસ માં HSN કોડ ફરજિયાત',
  '₹50,000 થી વધુના ટ્રાન્ઝેક્શનમાં કેશમાં ચૂકવણી નહીં કરી શકાય',
  'દર 3 વર્ષે GST સર્ટિફિકેટ રિન્યુઅલ કરવું ફરજિયાત',
  'ઇનવોઇસ માં બધી વિગતો સ્પષ્ટ અને સાચી હોવી જોઈએ',
  'ટેક્સ ક્રેડિટ ક્લેમ કરવા માટે વેન્ડરની GSTIN વેરિફાઇ કરવી જરૂરી'
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {gstFaqItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 flex justify-between items-start"
          >
            <span className="font-semibold text-gray-900 pr-3 text-sm sm:text-base leading-tight">{item.question}</span>
            <div className={`transform transition-transform duration-300 flex-shrink-0 mt-0.5 ${openIndex === index ? 'rotate-180' : ''}`}>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700 text-sm sm:text-base bg-gradient-to-r from-white to-blue-50 border-t border-gray-100">
              <p className="whitespace-pre-line leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const GSTPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mqabenan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.number,
          service: 'GST Inquiry'
        })
      });

      if (response.ok) {
        alert(`Thank you ${formData.name}! We will contact you at ${formData.number}`);
        setFormData({ name: '', number: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Hero Section with Local SEO */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              GST Services in Deesa, Banaskantha - Gujarat
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Professional GST Filing & Registration Services by Ankit Kachhawa
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-blue-600" />
                <span>Serving Deesa & Banaskantha District</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} className="text-green-600" />
                <span>+91 95100 74375</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong>Ankit Kachhawa</strong> દ્વારા ડીસા, બનાસકાંઠા, ગુજરાતમાં વ્યાવસાયિક GST સેવાઓ. 
            GST (Goods and Service Tax) એ ભારતમાં લાગુ કરાયેલ એક આધુનિક ટેક્સ સિસ્ટમ છે જે બિઝનેસને સરળ બનાવે છે. 
            આ એક અગવડ એવી ટેક્સ છે જે રાજ્ય અને કેન્દ્ર સરકારની બહુવિધ ટેક્સને એકીકૃત કરે છે.
            <br /><br />
            <strong>ડીસા અને બનાસકાંઠા જિલ્લામાં GST સેવાઓ:</strong> GST રજિસ્ટ્રેશન, રિટર્ન ફાઇલિંગ, કમ્પ્લાયન્સ, અને ટેક્સ કન્સલ્ટેશન. 
            અમારી એક્સપર્ટ ટીમ તમારા બિઝનેસ માટે સંપૂર્ણ GST સોલ્યુશન પ્રદાન કરે છે.
            <br /><br />
            <strong>કેમ પસંદ કરો Ankit Kachhawa ની GST સેવાઓ:</strong> સ્થાનિક એક્સપર્ટ, ઝડપી સેવા, કોમ્પિટિટિવ રેટ્સ, અને વિશ્વસનીય સપોર્ટ.
          </p>
        </div>

        {/* Local Service Areas */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Service Areas - સેવા વિસ્તારો
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Deesa</strong><br />ડીસા
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Palanpur</strong><br />પાલનપુર
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Dhanera</strong><br />ધાનેરા
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Tharad</strong><br />થરાદ
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Vav</strong><br />વાવ
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Danta</strong><br />દાંતા
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Kankrej</strong><br />કાંકરેજ
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <strong>Lakhani</strong><br />લાખણી
            </div>
          </div>
        </div>

        {/* Documents Required Section */}
        <section className="mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="text-blue-600" size={20} />
              GST રજિસ્ટ્રેશન માટે જરૂરી દસ્તાવેજો
            </h2>
            <ul className="space-y-2">
              {gstDocumentItems.map((item, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Important Rules Section */}
        <section className="mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={20} />
              GST ના મહત્વના નિયમો
            </h2>
            <ul className="space-y-3">
              {gstRules.map((rule, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <HelpCircle className="text-blue-600" size={20} />
              સામાન્ય પ્રશ્નો - GST FAQ Deesa
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              GST સેવાઓ માટે સંપર્ક કરો - Deesa, Banaskantha
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              ડીસા, બનાસકાંઠાના અમારા GST નિષ્ણાતો સાથે મફત સલાહ મેળવવા તમારી વિગતો આપો.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  નામ *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base"
                  placeholder="તમારું પૂરું નામ"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                  મોબાઈલ નંબર *
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base"
                  placeholder="9510074375"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base"
              >
                સબમિટ કરો
              </button>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <ServiceAreas service="gst" />
      </div>
    </div>
  );
};

export default GSTPage;