import React from 'react';
import { Mail, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:gulsah@teknolojimenajeri.com"
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  gulsah@teknolojimenajeri.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:furkanakbas@teknolojimenajeri.com"
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  furkanakbas@teknolojimenajeri.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/niteliknoktasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                <span>@niteliknoktasi</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@teknolojimenajeri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
                <span>@teknolojimenajeri</span>
              </a>
            </div>
          </div>

          {/* Teknoloji Menajeri Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="/tmlogo.png" 
                alt="Teknoloji Menajeri" 
                className="h-36 w-auto"
              />
              <p className="text-gray-600 italic text-sm text-center">
                "Bilişimde Liderlik, Proje Yönetiminde Başarı"
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Nitelik Noktası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
