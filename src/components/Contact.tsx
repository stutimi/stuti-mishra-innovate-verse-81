
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_nihppjl', // Service ID
        'template_3ks08qn', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Stuti Mishra'
        },
        'EaaFeS89vAQNNmjAs' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://i.postimg.cc/SKSbF9CY/khushi-resume-10.png';
    link.download = 'Stuti_Mishra_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume downloaded!",
      description: "Thank you for your interest.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-sky-400 mb-4">Send Me a Message</h3>
                <p className="text-gray-300 mb-6">
                  Have a question or want to work together? I'd love to hear from you!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/50 border-sky-500/20 text-white placeholder:text-gray-400 focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/50 border-sky-500/20 text-white placeholder:text-gray-400 focus:border-sky-400"
                    />
                  </div>
                </div>
                
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800/50 border-sky-500/20 text-white placeholder:text-gray-400 focus:border-sky-400"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-slate-800/50 border-sky-500/20 text-white placeholder:text-gray-400 focus:border-sky-400 resize-none"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Resume */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Feel free to reach out if you're preparing for coding contests, want help with ML basics, 
                  or just want to connect with a fellow tech enthusiast! I'm always excited to share knowledge 
                  and collaborate on interesting projects.
                </p>

                {/* Resume Download */}
                <div className="mb-8">
                  <Button
                    onClick={handleResumeDownload}
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-sky-500/20 mb-8">
                <h3 className="text-xl font-bold text-sky-400 mb-6">Mentorship & Knowledge Sharing</h3>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 text-center lg:text-left">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Competitive Programming</h4>
                    <p className="text-gray-400 text-sm">DSA preparation, contest strategies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI/ML Basics</h4>
                    <p className="text-gray-400 text-sm">Getting started with machine learning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Project Guidance</h4>
                    <p className="text-gray-400 text-sm">Building real-world applications</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="mailto:stutimishrastutimishra14@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/stuti-mishra-a75665366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/stutimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a
                  href="https://x.com/Stutimishra9451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-sky-500/20 hover:border-sky-400/40 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-white hover:text-sky-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
