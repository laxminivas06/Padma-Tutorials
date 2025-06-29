import { BookOpen, Users, Award, ArrowRight, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <BookOpen className="h-8 w-8 text-amber-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Users className="h-6 w-6 text-orange-300 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-slow">
          <Award className="h-10 w-10 text-amber-400 opacity-60" />
        </div>
        <div className="absolute top-60 right-10 animate-float">
          <BookOpen className="h-6 w-6 text-orange-300 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 mt-16 sm:mt-0">
            {/* Centered Logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src="https://i.postimg.cc/TYD7wndD/pt.png" 
                alt="Padma Tutorials Logo" 
                className="h-20 w-auto sm:h-24 md:h-28 lg:h-32 xl:h-36"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Padma
              <span className="block text-amber-600">Tutorials</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Empowering Students Since 2022
            </p>
            
            <p className="text-lg text-gray-700 mb-10 max-w-2xl">
              Join thousands of students in their journey to academic excellence with our innovative teaching methods and personalized approach to learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#courses"
                className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore Programs
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                Join Now
              </a>
            </div>

            {/* Happy Moments Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href="#gallery"
                className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors duration-300 group"
              >
                <div className="relative">
                  <Camera className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">
                    50+
                  </span>
                </div>
                <span className="text-lg font-medium border-b border-transparent group-hover:border-amber-600">
                  Explore Happy Moments
                </span>
                <ArrowRight className="h-4 w-4 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality Education</h3>
                  <p className="text-gray-600">For Every Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;