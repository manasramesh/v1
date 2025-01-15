// Save this in: edtech_platform/static/js/contact-modal.js

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="glass-morphism rounded-3xl p-8 max-w-md w-full mx-4 hover-glow relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                <div className="text-center mb-8">
                    <i className="fas fa-paper-plane text-blue-400 text-4xl mb-4"></i>
                    <h2 className="text-2xl font-bold gradient-text mb-2">Contact Us</h2>
                    <p className="text-gray-300">Begin your cybersecurity journey today</p>
                </div>

                <div className="space-y-6">
                    <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-phone text-green-400 mr-3"></i>
                            <h3 className="font-semibold">Phone Numbers</h3>
                        </div>
                        <div className="space-y-2 pl-8">
                            <a href="tel:+917034432392" className="text-gray-300 hover:text-blue-400 transition-colors block">
                                +91 7034432392
                            </a>
                            <a href="tel:+918136943830" className="text-gray-300 hover:text-blue-400 transition-colors block">
                                +91 8136943830
                            </a>
                        </div>
                    </div>

                    <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform">
                        <div className="flex items-center mb-2">
                            <i className="fas fa-envelope text-blue-400 mr-3"></i>
                            <h3 className="font-semibold">Email</h3>
                        </div>
                        <a href="mailto:manasayancheri@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors pl-8">
                            manasayancheri@gmail.com
                        </a>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="w-full mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
};