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
        title="Contact Us"
        description="Get in touch with Softurecs AI Labs. Contact us for AI solutions, software development, and digital transformation services. 24-hour response time guaranteed."
        keywords="contact Softurecs, software development inquiry, AI solutions contact, IT consulting"
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

      {/* Office Location */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our headquarters in Hyderabad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Hyderabad, India</h3>
                  <p className="text-accent font-medium">Corporate Headquarters</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  SOFTURECS AI LABS PRIVATE LIMITED<br />
                  5th Floor, Trinity Corporate Building, 501-A<br />
                  eSeva Lane, KPHB Phase 3, Kukatpally<br />
                  Hyderabad, Telangana – 500072
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+917396080902" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                    <Phone className="w-5 h-5" />
                    +91 7396080902
                  </a>
                  <a href="mailto:info@softurecs.com" className="flex items-center gap-2 text-accent hover:underline">
                    <Mail className="w-5 h-5" />
                    info@softurecs.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary/50 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6231789067!2d78.39!3d17.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzI0LjAiTiA3OMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SOFTURECS AI LABS Office Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      </section>
    </Layout>
  );
};

export default Contact;
