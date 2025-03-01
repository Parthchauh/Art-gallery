import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isCommission: false
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });
    
    // Mock API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        isCommission: false
      });
    }, 1500);
  };
  
  return (
    <div className="pt-20">
      <section className="section">
        <h1 className="section-title text-gray-900 dark:text-white">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">contact@priyankaarts.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Studio Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bandra Art District<br />
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Studio Hours
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Tuesday - Friday:</span> 10:00 AM - 6:00 PM
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <span className="font-medium">Saturday:</span> 11:00 AM - 4:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              Studio visits are by appointment only. Please contact in advance to schedule.
            </p>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h2>
            
            {formStatus?.success ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 dark:bg-green-800 p-2">
                    <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {formStatus.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Artwork Purchase">Artwork Purchase</option>
                    <option value="Commission Request">Commission Request</option>
                    <option value="Exhibition Opportunity">Exhibition Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isCommission"
                      name="isCommission"
                      type="checkbox"
                      checked={formData.isCommission}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="isCommission" className="font-medium text-gray-700 dark:text-gray-300">
                      This is a commission inquiry
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check this box if you're interested in commissioning a custom artwork.
                    </p>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={formStatus?.submitted && !formStatus.success}
                  >
                    {formStatus?.submitted && !formStatus.success ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Social Media Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900 dark:text-white">
            Connect on Social Media
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Follow PriyankaArts on social media for the latest updates, behind-the-scenes content, and new artwork announcements.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300" aria-label="Instagram">
              <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300" aria-label="Facebook">
              <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300" aria-label="Twitter">
              <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;