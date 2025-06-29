import { BookOpen, Mail, Phone, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Developer Credits */}
      <div className="bg-gray-100 text-center py-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">This Website was Developed by</p>
          <div className="flex justify-center mt-4">
            <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <a href="https://nivaseditz.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.postimg.cc/tRDy1sM7/Nivas.png"
                  className="h-16 md:h-20"
                  alt="Nivas Editz"
                />
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">Tap on icon to view Website</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-bold">Padma Tutorials</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering students with quality education since 2022. Join thousands of successful learners in their journey to excellence.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/padmatutorials" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Courses', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Academic Subjects</li>
                <li>Tech Bootcamps</li>
                <li>Career Skills</li>
                <li>Online Classes</li>
                <li>Offline Classes</li>
                <li>Custom Programs</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="text-gray-400">
                    <p>padmatutorialsonline@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="text-gray-400">
                    <p>+91 9059160424</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div className="text-gray-400">
                    <p>Turka Yamjal, Hyderabad<br />Telangana 501 510, INDIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Padma Tutorials. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for education
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;