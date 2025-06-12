import React, { useState } from 'react';
import { HelpCircle, MapPin, Phone, TrendingUp } from 'lucide-react';
import ServiceAreas from '../components/ServiceAreas';

const faqItems = [
  {
    question: 'મ્યુચ્યુઅલ ફંડ મા એકાઉન્ટ ખોલાવવા કયા ડોક્યુમેન્ટ ની જરૂર પડે ?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>આધાર કાર્ડ</li>
        <li>પાન કાર્ડ</li>
        <li>ચેકનો ફોટો</li>
        <li>સહી (SIGNATURE) નો નમૂનો</li>
        <li>ઈમેઇલ ID</li>
        <li>આધાર કાર્ડ સાથે જોડાયેલો ફોન નંબર</li>
        <li>આધાર કાર્ડમાં ફોન નંબર સક્રિય હોવો જોઈએ</li>
        <li>વારસદાર (NOMINEE) નું પાન કાર્ડ</li>
      </ul>
    ),
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડ શું છે?',
    answer: 'મ્યુચ્યુઅલ ફંડ એ એક પ્રકારનું રોકાણ છે જેમાં ઘણા રોકાણકારોના પૈસા એકઠા કરીને એક મોટું ફંડ બનાવવામાં આવે છે. આ ફંડને વ્યાવસાયિક ફંડ મેનેજર્સ દ્વારા વિવિધ શેર, બોન્ડ અને અન્ય રોકાણ વિકલ્પોમાં વહેંચવામાં આવે છે. આમાં જોખમ અને નફો બધા રોકાણકારો વચ્ચે વહેંચાય છે. નાના રોકાણકારો માટે આ એક સારો માર્ગ છે કારણ કે એક્સપર્ટ મેનેજમેન્ટ મળે છે અને ઓછા પૈસામાં પણ વૈવિધ્યપૂર્ણ રોકાણ કરી શકાય છે.',
  },
  {
    question: 'SIP શું છે?',
    answer: 'SIP એટલે Systematic Investment Plan. આમાં તમે દર મહિને નિયમિત રકમ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરો છો. જેમ કે તમે ઠરાવ્યું કે દર મહિને ૧૦૦૦ રૂપિયા રોકાણ કરવા, તો તે ઓટોમેટિક તમારા બેંક એકાઉન્ટમાંથી કપાઈ જશે અને મ્યુચ્યુઅલ ફંડમાં જમા થઈ જશે. આનો ફાયદો એ છે કે તમારે એક સાથે મોટી રકમની જરૂર નથી અને બજારના ઉતાર-ચઢાવનો અસર ઓછો થાય છે. નિયમિત રોકાણની આદત પણ બને છે.',
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ કેટલું હોવું જોઈએ?',
    answer: 'મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ ફંડના પ્રકાર અનુસાર અલગ હોય છે. મોટાભાગના મ્યુચ્યુઅલ ફંડમાં lump sum રોકાણ માટે ₹1,000 થી ₹5,000 ની જરૂર પડે છે. SIP માટે તો બહુ ઓછી રકમ - ₹100 થી ₹500 પણ શરૂ કરી શકાય છે. ELSS ફંડ અને કેટલાક સ્પેશિયલ ફંડમાં ₹500 થી ₹1,000 ની જરૂર પડે છે. આજકાલ ઘણી કંપનીઓ માત્ર ₹100 SIP થી પણ રોકાણ કરવા દે છે, તેથી નાની રકમથી પણ શરૂઆત કરી શકાય છે.',
  },
  {
    question: 'શું મ્યુચ્યુઅલ ફંડમાંથી પૈસા વહેલા કાઢી શકાય?',
    answer: 'હા, મ્યુચ્યુઅલ ફંડમાંથી પૈસા કાઢી શકાય છે, પણ કેટલાક નિયમો છે. Equity ફંડમાં સામાન્ય રીતે કોઈ લોક-ઇન પીરિયડ નથી, તેથી કયારે પણ પૈસા કાઢી શકાય છે. Debt ફંડમાં પણ મોટાભાગે તરત પૈસા મળી જાય છે. પણ ELSS (ટેક્સ સેવિંગ) ફંડમાં ૩ વર્ષનો લોક-ઇન પીરિયડ હોય છે. કેટલાક ફંડમાં early exit લોડ લાગે છે - જેમ કે ૧ વર્ષ પહેલા કાઢવા પર ૧% ચાર્જ. પૈસા કાઢવા માટે AMC ની વેબસાઈટ કે એપ્લિકેશન પર રિડીમ કરવાનું હોય છે અને ૨-૩ દિવસમાં બેંક એકાઉન્ટમાં પૈસા આવી જાય છે.',
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડમાં રોકાણ કરવા માટે કઈ ઉંમર હોવી જરૂરી છે?',
    answer: '18 વર્ષથી ઉપરની કોઈપણ વ્યક્તિ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરી શકે છે. માતા-પિતાના નામે બાળકો માટે પણ રોકાણ કરી શકાય છે.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
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
              {typeof item.answer === 'string' ? (
                <p className="whitespace-pre-line leading-relaxed">{item.answer}</p>
              ) : (
                item.answer
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const MutualFundPage = () => {
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
          service: 'Mutual Fund Inquiry'
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
              Mutual Fund Services in Deesa, Banaskantha - Gujarat
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Professional SIP & Investment Advisory Services by Ankit Kachhawa
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
              <div className="flex items-center gap-1">
                <TrendingUp size={16} className="text-purple-600" />
                <span>Expert Investment Advisor</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong>Ankit Kachhawa</strong> દ્વારા ડીસા, બનાસકાંઠા, ગુજરાતમાં વ્યાવસાયિક મ્યુચ્યુઅલ ફંડ સેવાઓ. 
            મ્યુચ્યુઅલ ફંડ એ આપના પૈસાને વૃદ્ધિ કરવાનો એક સુરક્ષિત અને વ્યાવસાયિક માર્ગ છે. 
            આમાં તમારા પૈસા એક્સપર્ટ ફંડ મેનેજર્સ દ્વારા સંચાલિત થાય છે જેઓ વિવિધ કંપનીઓના શેર અને બોન્ડમાં રોકાણ કરે છે.
            <br /><br />
            <strong>ડીસા અને બનાસકાંઠા જિલ્લામાં મ્યુચ્યુઅલ ફંડ સેવાઓ:</strong> SIP પ્લાનિંગ, પોર્ટફોલિયો મેનેજમેન્ટ, રિસ્ક એસેસમેન્ટ, અને ઇન્વેસ્ટમેન્ટ એડવાઇઝરી. 
            મ્યુચ્યુઅલ ફંડનો મુખ્ય ફાયદો એ છે કે તમે ઓછા પૈસાથી પણ શરૂઆત કરી શકો છો અને SIP દ્વારા દર મહિને નિયમિત રોકાણ કરી શકો છો.
            <br /><br />
            <strong>લાંબા ગાળાના ધ્યેયો માટે આદર્શ:</strong> બાળકોનું શિક્ષણ, ઘર ખરીદવું, રિટાયરમેન્ટ પ્લાનિંગ, અને વેલ્થ ક્રિએશન માટે ઉત્તમ.
          </p>
        </div>

        {/* Local Service Areas */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Mutual Fund Service Areas - સેવા વિસ્તારો
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Deesa</strong><br />ડીસા
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Palanpur</strong><br />પાલનપુર
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Dhanera</strong><br />ધાનેરા
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Tharad</strong><br />થરાદ
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Vav</strong><br />વાવ
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Danta</strong><br />દાંતા
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Kankrej</strong><br />કાંકરેજ
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <strong>Lakhani</strong><br />લાખણી
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Our Mutual Fund Services - અમારી સેવાઓ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">SIP Planning</h3>
              <p className="text-sm text-gray-700">Systematic Investment Plan setup and management</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Portfolio Review</h3>
              <p className="text-sm text-gray-700">Regular portfolio analysis and rebalancing</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Goal-based Investing</h3>
              <p className="text-sm text-gray-700">Investment planning for specific financial goals</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Risk Assessment</h3>
              <p className="text-sm text-gray-700">Risk profiling and suitable fund selection</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-600" size={20} />
              સામાન્ય પ્રશ્નો - Mutual Fund FAQ Deesa
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              મ્યુચ્યુઅલ ફંડ સેવાઓ માટે સંપર્ક કરો - Deesa, Banaskantha
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
               ડીસા, બનાસકાંઠાના અમારા મ્યુચ્યુઅલ ફંડ એક્સપર્ટ સાથે મફત સલાહ મેળવવા તમારી વિગતો આપો.
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
        <ServiceAreas service="mutual-fund" />
      </div>
    </div>
  );
};

export default MutualFundPage;