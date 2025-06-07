import React, { useState } from 'react';
import { FileText, AlertTriangle, HelpCircle } from 'lucide-react';

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
      {/* Gujarati Q&A Content */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            મ્યુચ્યુઅલ ફંડ માહિતી અને FAQ
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText size={24} className="text-primary mr-2" />
                જરૂરી દસ્તાવેજો
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  પાન કાર્ડ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  આધાર કાર્ડ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  બેંક પાસબુક / કેન્સલ ચેક
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  ફોટોગ્રાફ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  ઈમેઈલ આઈડી અને મોબાઈલ નંબર
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle size={24} className="text-primary mr-2" />
                રિસ્ક ફેક્ટર્સ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                  માર્કેટ રિસ્ક: બજારમાં ઉતાર-ચઢાવને કારણે રોકાણની કિંમતમાં ફેરફાર થઈ શકે છે
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                  લિક્વિડિટી રિસ્ક: કેટલાક ફંડ્સમાંથી પૈસા તરત કાઢવા મુશ્કેલ હોઈ શકે છે
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                  ક્રેડિટ રિસ્ક: કંપનીઓની નાણાકીય સ્થિતિમાં ફેરફાર થવાથી રોકાણ પર અસર થઈ શકે છે
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle size={24} className="text-primary mr-2" />
                સામાન્ય પ્રશ્નો
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">મ્યુચ્યુઅલ ફંડમાં ન્યુનતમ રોકાણ કેટલું હોવું જોઈએ?</h4>
                  <p className="text-gray-600">SIP માટે ₹500 થી શરૂઆત કરી શકાય છે, અને એકમુશ્ત રોકાણ માટે ₹5000 થી શરૂઆત કરી શકાય છે.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">શું મ્યુચ્યુઅલ ફંડમાંથી પૈસા વહેલા કાઢી શકાય?</h4>
                  <p className="text-gray-600">હા, મોટાભાગના ઓપન-એન્ડેડ ફંડ્સમાંથી પૈસા કોઈપણ સમયે કાઢી શકાય છે, પરંતુ કેટલાક ફંડ્સમાં એક્ઝિટ લોડ લાગુ થઈ શકે છે.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">મ્યુચ્યુઅલ ફંડમાં રોકાણ કરવા માટે કઈ ઉંમર હોવી જરૂરી છે?</h4>
                  <p className="text-gray-600">18 વર્ષથી ઉપરની કોઈપણ વ્યક્તિ મ્યુચ્યુઅલ ફંડમાં રોકાણ કરી શકે છે. માતા-પિતાના નામે બાળકો માટે પણ રોકાણ કરી શકાય છે.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple Contact Form */}
      <section>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            સંપર્ક કરો
          </h2>
          <p className="text-gray-600 mb-6">
            મ્યુચ્યુઅલ ફંડ વિશે વધુ માહિતી માટે તમારી વિગતો આપો અને અમે તમારો સંપર્ક કરીશું.
          </p>
          
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
                placeholder="1234567890"
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
