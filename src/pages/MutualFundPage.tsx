import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

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
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full mr-3">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              મ્યુચ્યુઅલ ફંડ માહિતી
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 font-medium">વારંવાર પૂછાતા પ્રશ્નો અને સંપર્ક કરો</p>
        </div>

        {/* FAQ Section */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-600" size={20} />
              સામાન્ય પ્રશ્નો
            </h2>
            <FAQAccordion />
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              સંપર્ક કરો
            </h2>

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
      </div>
    </div>
  );
};

export default MutualFundPage;
