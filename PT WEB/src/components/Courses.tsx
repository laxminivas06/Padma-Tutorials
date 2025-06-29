import { BookOpen, Code, Briefcase, ArrowRight, Users, Clock, Star, Cpu, Database, Globe, Smartphone, Calculator } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Academic Subjects",
      description: "Comprehensive tutoring for all major subjects from 6th to 12th grade",
      features: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Studies"],
      students: "1200+",
      duration: "Ongoing",
      rating: 4.8
    },
    {
      icon: Code,
      title: "Python Programming",
      description: "Master Python from basics to advanced with real-world projects",
      features: ["Python Fundamentals", "OOP Concepts", "Django/Flask", "Data Analysis"],
      students: "850+",
      duration: "3 months",
      rating: 4.9
    },
    {
      icon: Cpu,
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
      features: ["HTML/CSS/JS", "React.js", "Node.js", "MongoDB"],
      students: "700+",
      duration: "4 months",
      rating: 4.8
    },
    {
      icon: Database,
      title: "Java Programming",
      description: "Learn Java for application development and problem solving",
      features: ["Core Java", "Spring Boot", "Hibernate", "Android Basics"],
      students: "500+",
      duration: "3 months",
      rating: 4.7
    },
    {
      icon: Globe,
      title: "React.js",
      description: "Build modern web applications with React framework",
      features: ["React Hooks", "Redux", "Context API", "Next.js"],
      students: "600+",
      duration: "2 months",
      rating: 4.9
    },
    {
      icon: Briefcase,
      title: "Career Skills",
      description: "Essential skills for professional growth and career advancement",
      features: ["Communication", "Leadership", "Interview Prep", "Resume Building"],
      students: "300+",
      duration: "1-3 months",
      rating: 4.7
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Build cross-platform mobile applications",
      features: ["React Native", "Flutter", "Firebase", "App Deployment"],
      students: "400+",
      duration: "3 months",
      rating: 4.6
    },
    {
      icon: Calculator,
      title: "Competitive Exams",
      description: "Preparation for JEE, NEET and other competitive exams",
      features: ["IIT Foundation", "Medical Prep", "Olympiads", "Mock Tests"],
      students: "900+",
      duration: "6-12 months",
      rating: 4.8
    }
  ];


  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Courses & Programs</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of educational programs designed to help you excel in your academic and professional journey.
          </p>
        </div>

        {/* Always 2 columns layout */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <course.icon className="h-5 w-5 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-1 mb-4">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-1 text-xs">
                  Know More
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm md:text-base text-gray-700 mb-4">Can't find what you're looking for?</p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 text-sm">
            Contact Us for Custom Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;