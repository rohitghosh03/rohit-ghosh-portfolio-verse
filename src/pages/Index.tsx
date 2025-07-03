
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, ArrowDown, ArrowUp } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-900/50 to-slate-900"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-teal-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-teal-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-teal-400">ROHIT GHOSH</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-teal-400 ${
                    activeSection === section ? 'text-teal-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
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
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-teal-400 shadow-2xl shadow-teal-400/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            ROHIT GHOSH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Machine Learning Enthusiast | Problem Solver | CSE Undergrad
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-teal-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">ABOUT ME</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Personal Bio</h3>
                <p className="text-gray-300 leading-relaxed">
                  I am currently pursuing B.Tech in CSE from Institute of Engineering and Management, 
                  Salt Lake-5, Kolkata. I am in my 7th semester (graduating in 2026) with a CGPA of 8.6. 
                  My interests lie in Machine Learning, AI, problem-solving (DSA/Web Dev), and exploring 
                  core Computer Science fields like Operating Systems, DBMS (SQL), and Computer Networks.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-teal-400">Education</h3>
                  <div className="space-y-3 text-gray-300">
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
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-teal-400">Experience</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <p className="font-semibold">Remote AI Model Trainer</p>
                      <p className="text-sm">Outlier | Dec 2024 – Jun 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold">Data Science Intern</p>
                      <p className="text-sm">Prodigy Infotech | March 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-teal-400">Coding Profiles</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://leetcode.com/u/rohitg10/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        LeetCode: 130+ problems solved | Rating: 1353
                      </Badge>
                    </a>
                    <a 
                      href="https://www.hackerrank.com/profile/rohit_ghosh_0301" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        HackerRank Profile
                      </Badge>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-teal-900/30 text-teal-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900">
                      GitHub
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">SKILLS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-teal-400 text-center">{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill, i) => (
                      <div key={i} className="bg-slate-700/50 p-3 rounded-lg text-center border border-teal-500/20">
                        <span className="text-gray-300">{skill}</span>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-400">Get In Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:rohit.ghosh.030604@gmail.com" className="text-teal-400 hover:text-teal-300">
                      rohit.ghosh.030604@gmail.com
                    </a>
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href="https://linkedin.com/in/rohit-ghosh-b21881253" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/rohitghosh03" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-teal-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-teal-400">Send Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-700/50 border-teal-500/20 text-white placeholder-gray-400 min-h-32"
                    required
                  />
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-teal-500/20 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Rohit Ghosh. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-all hover:scale-110 z-50"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
