
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, ArrowDown, ArrowUp, Sun, Moon } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "Movie Recommender System",
      tech: ["Python", "Scikit-learn", "Streamlit"],
      description: [
        "Built content-based recommendation engine using cosine similarity",
        "Interactive web app with real-time movie suggestions", 
        "Deployed with Streamlit for seamless user experience"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Walmart Sales Data Analysis",
      tech: ["Python", "Pandas", "Seaborn", "ML"],
      description: [
        "Comprehensive EDA on retail sales patterns and trends",
        "Predictive modeling for sales forecasting",
        "Data visualization with interactive dashboards"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Face Mask Detection",
      tech: ["CNN", "OpenCV", "TensorFlow"],
      description: [
        "Real-time face mask detection using computer vision",
        "CNN model with 95%+ accuracy on test dataset",
        "OpenCV integration for live camera feed processing"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Currency Converter Chatbot",
      tech: ["Dialogflow", "Flask", "NLP"],
      description: [
        "AI-powered chatbot for currency conversion",
        "Natural language processing for user queries",
        "RESTful API integration with live exchange rates"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "SQL"],
    "Tools/Frameworks": ["Scikit-learn", "OpenCV", "TensorFlow", "Pandas", "Flask", "Streamlit", "Jupyter", "GitHub"],
    "Core Subjects": ["DSA", "Operating Systems", "Computer Networks", "DBMS", "OOP"]
  };

  const themeClasses = {
    background: isDarkMode 
      ? "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800" 
      : "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100",
    text: isDarkMode ? "text-white" : "text-gray-900",
    nav: isDarkMode ? "bg-slate-900/80" : "bg-white/80",
    card: isDarkMode ? "bg-slate-800/30" : "bg-white/30",
    border: isDarkMode ? "border-teal-500/20" : "border-blue-500/20",
    accent: isDarkMode ? "text-teal-400" : "text-blue-600"
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} relative overflow-x-hidden transition-colors duration-300`}>
      {/* Animated Background with Air Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-800/30 via-slate-900/60 to-slate-900' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-gray-50/50 to-gray-50'}`}></div>
        {[...Array(30)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDuration = 4 + Math.random() * 6;
          const randomDelay = Math.random() * 4;
          const randomSize = 3 + Math.random() * 8;
          
          return (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
                animation: `
                  bubble ${randomDuration}s ease-in-out infinite ${randomDelay}s,
                  float ${randomDuration * 1.5}s linear infinite ${randomDelay}s
                `
              }}
            >
              <div 
                className={`${isDarkMode ? 'bg-teal-400/30 border-teal-300/20' : 'bg-blue-400/30 border-blue-300/20'} rounded-full border backdrop-blur-sm`}
                style={{
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  boxShadow: isDarkMode 
                    ? '0 0 10px rgba(20, 184, 166, 0.3), inset 0 0 10px rgba(20, 184, 166, 0.1)' 
                    : '0 0 10px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1)'
                }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Enhanced CSS for all animations */}
      <style>{`
        @keyframes bubble {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(8px);
          }
          50% {
            transform: translateY(-8px) translateX(-12px);
          }
          75% {
            transform: translateY(12px) translateX(-6px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToRight {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(50px);
            opacity: 0.8;
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .slide-ghosh {
          animation: slideInFromLeft 1.5s ease-out, slideOutToRight 1.5s ease-out 1.5s infinite;
        }
        .scroll-down-text {
          animation: scrollDown 8s linear infinite;
        }
        .glass-card {
          background: ${isDarkMode 
            ? 'rgba(15, 23, 42, 0.4)' 
            : 'rgba(255, 255, 255, 0.4)'};
          backdrop-filter: blur(20px);
          border: 1px solid ${isDarkMode 
            ? 'rgba(20, 184, 166, 0.3)' 
            : 'rgba(59, 130, 246, 0.3)'};
          box-shadow: ${isDarkMode 
            ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'};
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: ${isDarkMode 
            ? '0 16px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            : '0 16px 48px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1)'};
        }
        .card-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
          padding: 0;
        }
        .card-container:hover .card-details {
          max-height: 500px;
          opacity: 1;
          padding: 1rem 0 0 0;
        }
        .project-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
          padding: 0;
        }
        .project-container:hover .project-details {
          max-height: 300px;
          opacity: 1;
          padding: 1rem 0 0 0;
        }
        .heading-hover {
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .heading-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: ${isDarkMode ? '#14b8a6' : '#2563eb'};
          transition: width 0.3s ease;
        }
        .heading-hover:hover::after {
          width: 100%;
        }
        .heading-hover:hover {
          transform: translateY(-2px);
          color: ${isDarkMode ? '#5eead4' : '#3b82f6'};
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.nav} backdrop-blur-md border-b ${themeClasses.border}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-xl font-bold ${themeClasses.accent}`}>ROHIT GHOSH</div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${themeClasses.accent} hover:opacity-80 ${
                      activeSection === section ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="icon"
                className={`${themeClasses.border} ${isDarkMode ? 'text-teal-400 hover:bg-teal-400/10' : 'text-blue-600 hover:bg-blue-600/10'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <img
              src="/lovable-uploads/ebc39003-92e0-4b65-b9e1-d2767a47520f.png"
              alt="Rohit Ghosh"
              className={`w-80 h-80 rounded-full mx-auto mb-8 border-4 ${isDarkMode ? 'border-teal-400 shadow-2xl shadow-teal-400/20' : 'border-blue-500 shadow-2xl shadow-blue-500/20'}`}
            />
          </div>
          <div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDarkMode ? 'bg-gradient-to-r from-teal-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
              ROHIT <span className="slide-ghosh inline-block">GHOSH</span>
            </h1>
          </div>
          <div className="h-16 overflow-hidden mb-8 relative">
            <p className={`text-xl md:text-2xl absolute whitespace-nowrap scroll-down-text ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Machine Learning Enthusiast | Problem Solver | CSE Undergrad
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className={`${isDarkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'} px-8 py-3 rounded-lg transition-all hover:scale-105`}
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className={`${isDarkMode ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'} px-8 py-3 rounded-lg transition-all hover:scale-105`}
            >
              Contact Me
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className={`mx-auto ${themeClasses.accent}`} size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.accent}`}>ABOUT ME</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card-container glass-card rounded-xl p-8">
              <h3 className={`text-2xl font-bold mb-4 ${themeClasses.accent} heading-hover`}>Personal Bio</h3>
              <div className="card-details">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  I am currently pursuing B.Tech in CSE from Institute of Engineering and Management, 
                  Salt Lake-5, Kolkata. I am in my 7th semester (graduating in 2026) with a CGPA of 8.6. 
                  My interests lie in Machine Learning, AI, problem-solving (DSA/Web Dev), and exploring 
                  core Computer Science fields like Operating Systems, DBMS (SQL), and Computer Networks.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-container glass-card rounded-xl p-6">
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.accent} heading-hover`}>Education</h3>
                <div className="card-details">
                  <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div>
                      <p className="font-semibold">B.Tech CSE - IEM Kolkata</p>
                      <p className="text-sm">CGPA: 8.6 | Graduating 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold">12th - 83%</p>
                    </div>
                    <div>
                      <p className="font-semibold">10th - DAV Model School</p>
                      <p className="text-sm">95.2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-container glass-card rounded-xl p-6">
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.accent} heading-hover`}>Experience</h3>
                <div className="card-details">
                  <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div>
                      <p className="font-semibold">Remote AI Model Trainer</p>
                      <p className="text-sm">Outlier | Dec 2024 – Jun 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold">Data Science Intern</p>
                      <p className="text-sm">Prodigy Infotech | March 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-container glass-card rounded-xl p-6">
                <h3 className={`text-xl font-bold mb-4 ${themeClasses.accent} heading-hover`}>Coding Profiles</h3>
                <div className="card-details">
                  <div className="space-y-2">
                    <a 
                      href="https://leetcode.com/u/rohitg10/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    >
                      <Badge variant="outline" className={`${isDarkMode ? 'border-teal-400 text-teal-400' : 'border-blue-500 text-blue-600'}`}>
                        LeetCode: 130+ problems solved | Rating: 1353
                      </Badge>
                    </a>
                    <a 
                      href="https://www.hackerrank.com/profile/rohit_ghosh_0301" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    >
                      <Badge variant="outline" className={`${isDarkMode ? 'border-teal-400 text-teal-400' : 'border-blue-500 text-blue-600'}`}>
                        HackerRank Profile
                      </Badge>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.accent}`}>PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-container glass-card rounded-xl p-8 hover:scale-105 transition-all duration-300">
                <h3 className={`text-2xl font-bold mb-4 ${themeClasses.accent} heading-hover`}>{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className={`${isDarkMode ? 'bg-teal-900/30 text-teal-300' : 'bg-blue-100/30 text-blue-700'}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="project-details">
                  <ul className={`space-y-2 mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${themeClasses.accent} mr-2`}>•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className={`${isDarkMode ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'}`}>
                      GitHub
                    </Button>
                    <Button size="sm" className={`${isDarkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.accent}`}>SKILLS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className={`${isDarkMode ? 'bg-gradient-to-br from-teal-900/20 via-slate-800/30 to-teal-800/20' : 'bg-gradient-to-br from-white/30 via-blue-50/40 to-white/20'} backdrop-blur-xl border ${isDarkMode ? 'border-teal-500/30' : 'border-blue-300/30'} shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:border-opacity-50`}>
                <CardContent className="p-8">
                  <h3 className={`text-xl font-bold mb-6 ${themeClasses.accent} text-center`}>{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill, i) => (
                      <div key={i} className={`${isDarkMode ? 'bg-slate-900/70 border-teal-500/40 shadow-lg' : 'bg-white/70 border-blue-300/50 shadow-md'} backdrop-blur-sm p-3 rounded-lg text-center border hover:border-opacity-70 transition-all duration-200 hover:scale-105`}>
                        <span className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} font-medium`}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.accent}`}>CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className={`${themeClasses.card} ${themeClasses.border} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${themeClasses.accent}`}>Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <a href="mailto:rohit.ghosh.030604@gmail.com" className={`${themeClasses.accent} hover:opacity-80`}>
                      rohit.ghosh.030604@gmail.com
                    </a>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href="https://linkedin.com/in/rohit-ghosh-b21881253" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${themeClasses.accent} hover:opacity-80 transition-colors`}
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/rohitghosh03" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${themeClasses.accent} hover:opacity-80 transition-colors`}
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${themeClasses.card} ${themeClasses.border} backdrop-blur-sm`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-6 ${themeClasses.accent}`}>Send Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`${isDarkMode ? 'bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400' : 'bg-white/50 border-blue-500/20 text-gray-900 placeholder-gray-500'}`}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`${isDarkMode ? 'bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400' : 'bg-white/50 border-blue-500/20 text-gray-900 placeholder-gray-500'}`}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`${isDarkMode ? 'bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400' : 'bg-white/50 border-blue-500/20 text-gray-900 placeholder-gray-500'} min-h-32`}
                    required
                  />
                  <Button type="submit" className={`w-full ${isDarkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${themeClasses.border} ${isDarkMode ? 'bg-slate-900/50' : 'bg-white/50'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 Rohit Ghosh. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 ${isDarkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'} p-3 rounded-full transition-all hover:scale-110 z-50`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
