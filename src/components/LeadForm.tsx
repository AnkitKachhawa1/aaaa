import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface LeadFormProps {
  service: 'mutual-fund' | 'gst';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ service }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to submit form data
    try {
      // In a real application, you would submit the form data to an API endpoint
      // For example: await fetch('/api/submit-lead', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-success/10 rounded-lg p-6 text-center">
        <CheckCircle className="mx-auto text-success mb-4\" size={48} />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          {service === 'mutual-fund' 
            ? 'Our mutual fund expert will contact you shortly to discuss your investment needs.'
            : 'Our GST expert will contact you shortly to discuss your GST filing requirements.'}
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-primary hover:text-primary-dark font-medium transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="form-label">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'border-error focus:ring-error/50 focus:border-error' : ''}`}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'border-error focus:ring-error/50 focus:border-error' : ''}`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-input ${errors.phone ? 'border-error focus:ring-error/50 focus:border-error' : ''}`}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="form-label">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="form-input"
          placeholder={service === 'mutual-fund' 
            ? 'Tell us about your investment goals...' 
            : 'Tell us about your GST requirements...'}
        />
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          className="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded"
          required
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
          I agree to receive communications about {service === 'mutual-fund' ? 'mutual fund' : 'GST'} services.
        </label>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex justify-center items-center"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Inquiry</span>
        )}
      </button>
    </form>
  );
};

export default LeadForm;