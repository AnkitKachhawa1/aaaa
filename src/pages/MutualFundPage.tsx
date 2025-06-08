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
    answer: `મ્યુચ્યુઅલ ફંડ એ એક પ્રકારનું રોકાણ છે જેમાં ઘણા રોકાણકારોના પૈસા એકઠા કરીને એક મોટું ફંડ બનાવવામાં આવે છે. આ ફંડને વ્યાવસાયિક ફંડ મેનેજર્સ દ્વારા વિવિધ શેર, બોન્ડ અને અન્ય રોકાણ વિકલ્પોમાં વહેંચવામાં આવે છે. આમાં જોખમ અને નફો બધા રોકાણકારો વચ્ચે વહેંચાય છે. નાના રોકાણકારો માટે આ એક સારો માર્ગ છે કારણ કે એક્સપર્ટ મેનેજમેન્ટ મળે છે અને ઓછા પૈસામાં પણ વૈવિધ્યપૂર્ણ રોકાણ કરી શકાય છે.`,
  },
  {
    question: 'SIP શું છે?',
    answer: `SIP એટલે Systematic Investment Plan. આમાં તમે દર મહિને નિયમિત રકમ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરો છો. જેમ કે તમે ઠરાવ્યું કે દર મહિને ૧૦૦૦ રૂપિયા રોકાણ કરવા, તો તે ઓટોમેટિક તમારા બેંક એકાઉન્ટમાંથી કપાઈ જશે અને મ્યુચ્યુઅલ ફંડમાં જમા થઈ જશે. આનો ફાયદો એ છે કે તમારે એક સાથે મોટી રકમની જરૂર નથી અને બજારના ઉતાર-ચઢાવનો અસર ઓછો થાય છે. નિયમિત રોકાણની આદત પણ બને છે.`,
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ કેટલું હોવું જોઈએ?',
    answer: `મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ ફંડના પ્રકાર અનુસાર અલગ હોય છે. મોટાભાગના મ્યુચ્યુઅલ ફંડમાં lump sum રોકાણ માટે ₹1,000 થી ₹5,000 ની જરૂર પડે છે. SIP માટે તો બહુ ઓછી રકમ - ₹100 થી ₹500 પણ શરૂ કરી શકાય છે. ELSS ફંડ અને કેટલાક સ્પેશિયલ ફંડમાં ₹500 થી ₹1,000 ની જરૂર પડે છે. આજકાલ ઘણી કંપનીઓ માત્ર ₹100 SIP થી પણ રોકાણ કરવા દે છે, તેથી નાની રકમથી પણ શરૂઆત કરી શકાય છે.`,
  },
  {
    question: 'શું મ્યુચ્યુઅલ ફંડમાંથી પૈસા વહેલા કાઢી શકાય?',
    answer: `હા, મ્યુચ્યુઅલ ફંડમાંથી પૈસા કાઢી શકાય છે, પણ કેટલાક નિયમો છે. Equity ફંડમાં સામાન્ય રીતે કોઈ લોક-ઇન પીરિયડ નથી, તેથી કયારે પણ પૈસા કાઢી શકાય છે. Debt ફંડમાં પણ મોટાભાગે તરત પૈસા મળી જાય છે. પણ ELSS (ટેક્સ સેવિંગ) ફંડમાં ૩ વર્ષનો લોક-ઇન પીરિયડ હોય છે. કેટલાક ફંડમાં early exit લોડ લાગે છે - જેમ કે ૧ વર્ષ પહેલા કાઢવા પર ૧% ચાર્જ. પૈસા કાઢવા માટે AMC ની વેબસાઇટ કે ઓફિસમાં અરજી કરવી પડે છે.`,
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">મ્યુચ્યુઅલ ફંડ FAQ</h1>
        </div>
        <p className="text-gray-600">વારંવાર પૂછાતા પ્રશ્નો અને તેના જવાબો</p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-colors"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800 pr-4">
                  {item.question}
                </h3>
                <div
                  className={`transform transition-transform duration-200 ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            
            {openItems.has(index) && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <div className="text-gray-700 leading-relaxed">
                  {typeof item.answer === 'string' ? (
                    <p className="whitespace-pre-line">{item.answer}</p>
                  ) : (
                    item.answer
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
