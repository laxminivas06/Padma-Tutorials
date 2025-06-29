import { Target, Heart, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">About Padma Tutorials</h2>
          <div className="w-20 md:w-24 h-1 bg-amber-600 mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="order-2 lg:order-1 lg:w-1/2 space-y-4 md:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Our Founder's Journey</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Founded in 2022 by <strong>Laxminivas Morishetty</strong>, Padma Tutorials began as a vision to make quality education accessible to all. Starting as a 10th-class student with big dreams, Laxminivas transformed his passion for learning into a thriving educational platform.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              What started as small tutoring sessions has evolved into a comprehensive EdTech platform offering both online and offline learning experiences, bootcamps, and practical workshops that prepare students for real-world challenges.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our mission is simple: <em>Affordable, quality education for all</em>. We believe every student deserves the opportunity to excel, regardless of their background or circumstances.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 lg:w-1/2 w-full">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://i.postimg.cc/rsFNVLYg/nivasimg.jpg"
                alt="Laxminivas Morishetty - Founder of Padma Tutorials"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center',
                  minWidth: '100%',
                  minHeight: '100%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                <h4 className="text-lg md:text-xl font-semibold">Laxminivas Morishetty</h4>
                <p className="text-xs md:text-sm opacity-90">Founder & Chief Educator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updated grid layout - always 2 columns */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="text-center p-4 md:p-6 bg-amber-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="bg-amber-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Target className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Mission Driven</h4>
            <p className="text-sm md:text-base text-gray-600">Empowering students through innovative teaching methods and personalized attention.</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="bg-orange-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Heart className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Student First</h4>
            <p className="text-sm md:text-base text-gray-600">Every decision we make puts our students' success and well-being at the center.</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-yellow-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="bg-yellow-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Lightbulb className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Innovation</h4>
            <p className="text-sm md:text-base text-gray-600">Constantly evolving our methods to provide the most effective learning experience.</p>
          </div>

          <div className="text-center p-4 md:p-6 bg-red-50 rounded-xl hover:shadow-lg transition-all duration-300">
            <div className="bg-red-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Zap className="h-5 w-5 md:h-8 md:w-8 text-white" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Results</h4>
            <p className="text-sm md:text-base text-gray-600">Proven track record of helping students achieve their academic and career goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;