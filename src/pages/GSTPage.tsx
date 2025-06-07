import React from 'react';
import { FileText, ClipboardCheck, Calculator, Calendar, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const GSTPage: React.FC = () => {
  return (
    <div className="slide-in">
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Professional GST Filing Services
              </h1>
              <p className="text-gray-600 mb-6">
                Our GST services ensure accurate and timely filing of your GST returns. 
                We handle all aspects of GST compliance, allowing you to focus on your core business activities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <FileText size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Timely Filing</h3>
                    <p className="text-sm text-gray-500">Never miss GST deadlines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <ClipboardCheck size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Error-free Returns</h3>
                    <p className="text-sm text-gray-500">Accurate documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <Calculator size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Tax Optimization</h3>
                    <p className="text-sm text-gray-500">Maximize input tax credits</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-3">
                    <Calendar size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Compliance Management</h3>
                    <p className="text-sm text-gray-500">Stay updated with GST laws</p>
                  </div>
                </div>
              </div>
              
              <a href="#gst-lead-form" className="btn-primary inline-flex items-center">
                <span>Get Started Today</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-6">
              <img 
                src="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg" 
                alt="GST Filing Services" 
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Our GST Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GST Registration</h3>
              <p className="text-gray-600 text-sm">
                Complete assistance with GST registration process, including documentation and verification.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardCheck size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monthly/Quarterly Returns</h3>
              <p className="text-gray-600 text-sm">
                Preparation and filing of monthly/quarterly GST returns (GSTR-1, GSTR-3B, etc.).
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calculator size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GST Consultation</h3>
              <p className="text-gray-600 text-sm">
                Expert advice on GST-related matters, including tax optimization and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="gst-lead-form">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Get Professional GST Services
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and our GST experts will contact you for a free consultation.
              </p>
              
              <LeadForm service="gst" />
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-8 flex flex-col justify-center">
              <div className="bg-white rounded-lg p-5 shadow-sm mb-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium">Vikram Mehta</h4>
                    <p className="text-sm text-gray-500">Small Business Owner</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">
                  "Their GST services have saved me countless hours and prevented any compliance issues. Highly professional team."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium">Anita Desai</h4>
                    <p className="text-sm text-gray-500">E-commerce Seller</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm italic">
                  "As an online seller, GST compliance was overwhelming until I found these services. Now I can focus on growing my business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTPage;
