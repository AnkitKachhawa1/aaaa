import React from 'react';
import { Landmark, PieChart, TrendingUp, Shield, ArrowRight, FileText, AlertTriangle, HelpCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const MutualFundPage: React.FC = () => {
  return (
    <div className="slide-in">
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Expert Mutual Fund Advisory Services
              </h1>
              <p className="text-gray-600 mb-6">
                Our professional mutual fund advisory services help you make informed investment decisions,
                maximize returns, and achieve your financial goals. We offer personalized strategies
                tailored to your risk profile and investment horizon.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <PieChart size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Diversified Portfolio</h3>
                    <p className="text-sm text-gray-500">Spread risk across multiple assets</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <TrendingUp size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Growth-focused</h3>
                    <p className="text-sm text-gray-500">Strategies for long-term wealth</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <Landmark size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Tax Efficient</h3>
                    <p className="text-sm text-gray-500">Optimize returns through tax planning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Risk Management</h3>
                    <p className="text-sm text-gray-500">Protect capital while growing assets</p>
                  </div>
                </div>
              </div>
              
              <a href="#lead-form" className="btn-primary inline-flex items-center">
                <span>Get Started Today</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-6">
              <img 
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" 
                alt="Mutual Fund Investment" 
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Our Mutual Fund Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PieChart size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Portfolio Management</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive portfolio management services with regular rebalancing and performance tracking.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Investment Advisory</h3>
              <p className="text-gray-600 text-sm">
                Personalized investment advice based on your financial goals, risk tolerance, and time horizon.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SIP Management</h3>
              <p className="text-gray-600 text-sm">
                Setup and management of Systematic Investment Plans (SIPs) for disciplined investing.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      
      <section id="lead-form">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Get Expert Mutual Fund Advice
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our mutual fund experts will contact you for a free consultation.
              </p>
              
              <LeadForm service="mutual-fund" />
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-8 flex flex-col justify-center">
              <div className="bg-white rounded-lg p-5 shadow-sm mb-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Financial Advisor</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">
                  "The mutual fund advisory services helped me build a diversified portfolio that's grown consistently over the past 3 years."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium">Rajesh Patel</h4>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">
                  "Their expertise in SIP management has made investing simple and effective. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MutualFundPage;