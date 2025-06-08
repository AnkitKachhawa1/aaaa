import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'Mutual Fund મા Account ખોલાવવા કયા ડોક્યુમેન્ટ ની જરૂર પડે ?',
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>આધાર કાર્ડ</li>
        <li>પાન કાર્ડ</li>
        <li>ચેકનો ફોટો</li>
        <li>* સહી (SIGNATURE) નો નમૂનો</li>
        <li>ઈમેઇલ ID</li>
        <li>આધાર કાર્ડ સાથે જોડાયેલો ફોન નંબર</li>
        <li>આધાર કાર્ડમાં ફોન નંબર સક્રિય હોવો જોઈએ</li>
        <li>વારસદાર (NOMINEE) નું પાન કાર્ડ</li>
      </ul>
    ),
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડ શું છે?',
    answer:
      'મ્યુચ્યુઅલ ફંડ એ રોકાણના વાહનો છે જે બહુવિધ રોકાણકારો પાસેથી સ્ટૉક્સ, બોન્ડ્સ, મની માર્કેટ સાધનો અને અન્ય સંપત્તિઓ જેવી સિક્યોરિટીઝના વૈવિધ્યસભર પોર્ટફોલિયોમાં રોકાણ કરવા માટે પૈસા સંગ્રહિત કરે છે. આ ફંડ્સ પ્રોફેશનલ ફંડ મેનેજર્સ દ્વારા સંચાલિત કરવામાં આવે છે જે ઇન્વેસ્ટર્સ વતી ઇન્વેસ્ટમેન્ટના નિર્ણયો લે છે.',
  },
  {
    question: 'SIP શું છે?',
    answer:
      'SIP અર્થ સિસ્ટમેટિક ઇન્વેસ્ટમેન્ટ પ્લાન છે. આ એક રોકાણ પદ્ધતિ છે જે વ્યક્તિને નિયમિત અંતરાલ, સામાન્ય રીતે માસિક અથવા ત્રિમાસિક, મ્યુચ્યુઅલ ફંડ અથવા અન્ય રોકાણ સાધનોમાં નિશ્ચિત રકમનું રોકાણ કરવાની મંજૂરી આપે છે. એસઆઈપીની રચના અનુશાસિત રોકાણને પ્રોત્સાહિત કરવા અને રૂપિયાના ખર્ચ સરેરાશના લાભ પ્રદાન કરવા માટે કરવામાં આવી છે.',
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ કેટલું હોવું જોઈએ?',
    answer: 'SIP માટે ₹500 થી શરૂઆત કરી શકાય છે, અને એકમુશ્ત રોકાણ માટે ₹5000 થી શરૂઆત કરી શકાય છે.',
  },
  {
    question: 'શું મ્યુચ્યુઅલ ફંડમાંથી પૈસા વહેલા કાઢી શકાય?',
    answer: 'હા, મોટાભાગના ઓપન-એન્ડેડ ફંડ્સમાંથી પૈસા કોઈપણ સમયે કાઢી શકાય છે, પરંતુ કેટલાક ફંડ્સમાં એક્ઝિટ લોડ લાગુ થઈ શકે છે.',
  },
  {
    question: 'મ્યુચ્યુઅલ ફંડમાં રોકાણ કરવા માટે કઈ ઉંમર હોવી જરૂરી છે?',
    answer: '18 વર્ષથી ઉપરની કોઈપણ વ્યક્તિ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરી શકે છે. માતા-પિતાના નામે બાળકો માટે પણ રોકાણ કરી શકાય છે.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-600 font-normal">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const MutualFundPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="slide-in">
      {/* FAQ Section */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-primary" size={24} />
            સામાન્ય પ્રશ્નો
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            સંપર્ક કરો
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                નામ *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="તમારું પૂરું નામ"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="9510074375"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors font-medium"
            >
              સબમિટ કરો
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MutualFundPage;
