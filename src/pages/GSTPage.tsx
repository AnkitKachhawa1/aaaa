import React, { useState } from 'react';
import { FileText, AlertTriangle, HelpCircle } from 'lucide-react';

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
];

const gstDocumentItems = [
  'પાન કાર્ડ',
  'આધાર કાર્ડ',
  'બિઝનેસ એડ્રેસ પ્રૂફ (ઇલેક્ટ્રીસીટી બીલ/રેન્ટ એગ્રીમેન્ટ)',
  'બેંક પાસબુક / કેન્સલ ચેક',
  'ફોટોગ્રાફ (પ્રોપ્રાયટર/પાર્ટનર/ડાયરેક્ટર)',
  'બિઝનેસ રજિસ્ટ્રેશન પ્રૂફ'
];

const AccordionList = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center"
      >
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ul className="p-4 pt-0 space-y-2 text-gray-600 list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FAQAccordion = ({ faqItems }: { faqItems: Array<{ question: string, answer: string }> }) => {
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
            className="w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center"
          >
            {item.question}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Add this section to your existing GSTPage component
const GSTPage: React.FC = () => {
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
          service: 'GST Inquiry'
        })
      });

      if (response.ok) {
        alert(`Thank you ${formData.name}! We will contact you at ${formData.number}`);
        setFormData({ name: '', number: '' });
      }
    } catch (error) {
      alert('Submission failed. Please try again.');
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
      {/* ... Your existing GST page content ... */}

      {/* Gujarati Q&A Section */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            GST માહિતી અને FAQ
          </h2>

          <div className="space-y-8">
            <AccordionList
              icon={<FileText size={24} className="text-primary" />}
              title="GST રજિસ્ટ્રેશન માટે જરૂરી દસ્તાવેજો"
              items={gstDocumentItems}
            />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle size={24} className="text-primary mr-2" />
                GST ના મહત્વના નિયમો
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span> 18% થી વધુ GST રેટ પર ઈનપુટ ટેક્સ ક્રેડિટનો દાવો કરવા ઇનવોઇસ માં HSN કોડ ફરજિયાત</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span> ₹50,000 થી વધુના ટ્રાન્ઝેક્શનમાં કેશમાં ચૂકવણી નહીં કરી શકાય</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span> દર 3 વર્ષે GST સર્ટિફિકેટ રિન્યુઅલ કરવું ફરજિયાત</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle size={24} className="text-primary mr-2" />
                સામાન્ય પ્રશ્નો
              </h3>
              <FAQAccordion faqItems={gstFaqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form (Same format as Mutual Fund) */}
      <section>
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            GST સેવાઓ માટે સંપર્ક કરો
          </h2>
          <p className="text-gray-600 mb-6">
            અમારા GST નિષ્ણાતો સાથે મફત સલાહ મેળવવા તમારી વિગતો આપો.
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

export default GSTPage;
