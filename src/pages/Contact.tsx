import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  };

  return (
    <Layout>
      <SEO 
        title="Contact Softurecs AI Labs"
        description="Contact Softurecs AI Labs for AI solutions & software development. Free consultation, 24-hour response. Call +91 7396080902 or email info@softurecs.com."
        keywords="contact Softurecs, software development inquiry, AI solutions contact, IT consulting Hyderabad"
      />
      <PageHero
        title="Contact Softurecs AI Labs – Let's Build Your Digital Solution"
        description="Talk to Our Software Experts. Get a Free Consultation. Start Your Digital Transformation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
        icon={Headphones}
        iconColor="from-cyan-500 to-blue-600"
        badge="Get In Touch"
        variant="centered"
        stats={[
          { value: '24hrs', label: 'Response Time' },
          { value: '700+', label: 'Projects Completed' },
          { value: '98%', label: 'Client Retention' }
        ]}
      />

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                    <select
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="cloud-devops">Cloud & DevOps</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="saas">SaaS Development</option>
                      <option value="application-modernization">Application Modernization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Project *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-card p-6 rounded-2xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:info@softurecs.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">info@softurecs.com</div>
                    </div>
                  </a>
                  <a href="tel:+917396080902" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium text-foreground">+91 7396080902</div>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/917396080902?text=Hi, I'm interested in your services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-medium text-foreground">Chat with us</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Business Hours</div>
                      <div className="font-medium text-foreground">Mon - Sat: 9AM - 7PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-accent/20 to-cyan-light/10 p-6 rounded-2xl border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Quick Response</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours. For urgent matters, call us directly or reach out via WhatsApp for instant support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location - Premium Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-4 h-4" />
              Our Headquarters
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visit Our <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-lg text-slate-400">
              Experience innovation at our state-of-the-art facility in Hyderabad
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Office Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 blur-xl opacity-50" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Hyderabad, India</h3>
                      <p className="text-cyan-400 font-medium">Corporate Headquarters</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        <span className="font-semibold text-white block mb-2">SOFTURECS AI LABS PRIVATE LIMITED</span>
                        5th Floor, Trinity Corporate Building, 501-A<br />
                        eSeva Lane, KPHB Phase 3, Kukatpally<br />
                        Hyderabad, Telangana – 500072
                      </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.a 
                        href="tel:+917396080902"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-all group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <Phone className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Call Us</div>
                          <div className="text-white font-medium">+91 7396080902</div>
                        </div>
                      </motion.a>
                      
                      <motion.a 
                        href="mailto:info@softurecs.com"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-all group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                          <div className="text-white font-medium">info@softurecs.com</div>
                        </div>
                      </motion.a>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.536270234567!2d78.3893456!3d17.4932123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f7d3f8c8e1%3A0x4c9c8f8e8f8f8f8f!2sKPHB%20Phase%203%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1704540000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SOFTURECS AI LABS Office Location - KPHB, Hyderabad"
                  className="w-full transition-all duration-500"
                />
                {/* Map overlay with address tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div 
                    className="bg-slate-900/90 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">Trinity Corporate Building, KPHB</p>
                      <p className="text-slate-400 text-xs truncate">Hyderabad, Telangana 500072</p>
                    </div>
                    <a 
                      href="https://www.google.com/maps/dir//KPHB+Phase+3,+Kukatpally,+Hyderabad,+Telangana+500072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      Directions
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
