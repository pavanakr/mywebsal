import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/SEO';
import { LocalBusinessSchema } from '@/components/SchemaMarkup';
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

  const commandPlaceholder = "'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n\nIMPORTANT: The current homepage hero slider has been damaged and the UI is not acceptable.\n\nI want you to COMPLETELY REBUILD ONLY THE HOMEPAGE HERO SLIDER from scratch.\n\nDo NOT try to fix the current slider styling.\nDo NOT preserve the current slider layout.\nDo NOT use the current oversized typography layout.\n\nKeep the existing:\n\ntop announcement bar\n\nnavbar\n\nlogo\n\nnavigation\n\nGet in Touch button\n\nexisting website branding\n\nall sections below the hero\n\nONLY replace the hero slider.\n\n================================\nDESIGN GOAL\n\nCreate a premium, modern, colorful SaaS + AI technology hero slider for:\n\nSOFTURECS AI LABS PRIVATE LIMITED\n\nThe hero should look like a professional international software/AI company's website.\n\nThink:\n\npremium SaaS\n\nAI technology\n\nCRM platform\n\nbusiness automation\n\nmodern enterprise software\n\nIt must NOT look like:\n\na poster\n\na template\n\na gaming website\n\na generic stock-image website\n\na typography-only design\n\n================================\nHERO LAYOUT\n\nUse a balanced 2-column layout.\n\nLEFT SIDE:\n\nsmall category badge\n\nstrong headline\n\nshort description\n\nprimary CTA\n\nsecondary CTA\n\noptional small trust/stat row\n\nRIGHT SIDE:\n\nlarge professional visual\n\nCRM dashboard / AI interface / automation workflow\n\nfloating UI cards\n\nsubtle decorative technology elements\n\nKeep both sides visually balanced.\n\nDo NOT allow the headline to occupy most of the screen.\n\nDo NOT break the headline into one word per line.\n\nMaximum headline width should be controlled.\n\nUse normal professional line breaks.\n\nHero should have comfortable padding.\n\n================================\nSLIDE 1 — AI CHATBOTS\n\nBadge:\nAI-POWERED SOLUTIONS\n\nHeadline:\nAI Chatbots That Work 24/7\n\nDescription:\nAutomate customer conversations, qualify leads and deliver intelligent support with AI-powered chatbots.\n\nPrimary CTA:\nExplore AI Solutions\n\nSecondary CTA:\nBook a Free Consultation\n\nVisual:\nCreate a premium AI chatbot interface showing:\n\nAI assistant\n\ncustomer conversation\n\nlead qualification\n\nresponse suggestions\n\nanalytics\n\nCRM connection\n\nUse blue + purple + cyan visual accents.\n\n================================\nSLIDE 2 — AI AUTOMATION\n\nBadge:\nAI AUTOMATION\n\nHeadline:\nAutomate Your Business With AI\n\nDescription:\nConnect leads, conversations, follow-ups and business workflows with intelligent automation.\n\nPrimary CTA:\nExplore AI Automation\n\nSecondary CTA:\nBook a Free Consultation\n\nVisual should show an elegant automation workflow:\n\nLead Capture\n↓\nAI Processing\n↓\nSmart Response\n↓\nLead Qualification\n↓\nCRM\n\nUse blue, violet, purple and cyan accents.\n\n================================\nSLIDE 3 — REAL ESTATE CRM\n\nBadge:\nREAL ESTATE CRM\n\nHeadline:\nSmarter CRM for Real Estate Growth\n\nDescription:\nManage properties, leads, agents, follow-ups and sales from one powerful CRM platform.\n\nPrimary CTA:\nExplore Real Estate CRM\n\nSecondary CTA:\nBook a Free Consultation\n\nVisual:\nPremium real estate CRM dashboard showing:\n\nproperty cards\n\nleads\n\nsales pipeline\n\nagents\n\nanalytics\n\nfollow-up reminders\n\nUse blue + teal + violet accents.\n\n================================\nSLIDE 4 — WHATSAPP + META API\n\nBadge:\nWHATSAPP + META API\n\nHeadline:\nTurn Conversations Into Customers\n\nDescription:\nConnect WhatsApp and Meta APIs with your CRM to manage conversations, leads and automation.\n\nPrimary CTA:\nExplore WhatsApp CRM\n\nSecondary CTA:\nBook a Free Consultation\n\nVisual:\nShow:\nWhatsApp conversation\n→ AI response\n→ lead capture\n→ CRM\n→ sales follow-up\n\nUse green/cyan/purple accents while maintaining the company brand.\n\n================================\nSLIDE 5 — ALL-IN-ONE CRM\n\nBadge:\nALL-IN-ONE CRM\n\nHeadline:\nOne CRM. Your Entire Business.\n\nDescription:\nBring sales, customer management, automation and business operations together in one powerful platform.\n\nPrimary CTA:\nExplore CRM Solutions\n\nSecondary CTA:\nBook a Free Consultation\n\nVisual:\nModern CRM dashboard showing:\n\nleads\n\nsales pipeline\n\ncustomers\n\nanalytics\n\nautomation\n\ntasks\n\nrevenue\n\nUse blue + purple + cyan gradients.\n\n================================\nVISUAL DESIGN\n\nUse a premium gradient-based technology background.\n\nPreferred palette:\n\nDeep Navy\nElectric Blue\nRoyal Blue\nViolet\nPurple\nCyan\n\nUse gradients subtly.\n\nDo NOT make the entire hero neon.\n\nDo NOT use excessive glow.\n\nDo NOT use huge empty spaces.\n\nDo NOT use a single dark laptop photograph.\n\nDo NOT use generic office stock photography.\n\nUse UI/dashboard-style visuals that communicate our actual services.\n\nCreate depth using:\n\ndashboard panels\n\nfloating cards\n\ncharts\n\nworkflow nodes\n\nAI assistant cards\n\nsubtle abstract shapes\n\nsoft gradients\n\nlight glass effects\n\n================================\nTYPOGRAPHY\n\nThis is VERY IMPORTANT.\n\nDo NOT use:\n\nREAL\nESTATE\nCRM\nBUILT\nFOR\n...\n\nDo NOT put one word per line.\n\nUse a maximum of 2–3 lines for the main headline.\n\nExample:\n\nSmarter CRM\nfor Real Estate Growth\n\nor:\n\nAI Chatbots\nThat Work 24/7\n\nHeadline should be approximately:\n48–64px desktop\n\nand responsive down to:\n32–40px mobile.\n\nDo not use extremely oversized typography.\n\n================================\nSLIDER BEHAVIOR\n\nUse a reliable existing slider library if the project already has one.\n\nIf not, implement a lightweight reliable slider.\n\nRequirements:\n\n5 slides\n\nautoplay every 5 seconds\n\nsmooth transition\n\nprevious arrow\n\nnext arrow\n\npagination dots\n\nkeyboard navigation\n\ntouch/swipe support\n\npause on hover\n\npause when user interacts\n\nmobile responsive\n\ntablet responsive\n\ndesktop responsive\n\nreduced-motion support\n\nDo not allow slides to overlap each other.\n\nDo not allow content from one slide to appear on another.\n\nDo not allow horizontal scrolling.\n\nDo not allow the hero to break the page layout.\n\n================================\nHEIGHT\n\nKeep the hero visually compact and premium.\n\nDesktop:\napproximately 560–650px\n\nTablet:\napproximately 520–600px\n\nMobile:\nauto height based on content.\n\nDo NOT create an extremely tall hero.\n\n================================\nRESPONSIVE DESIGN\n\nDesktop:\n2-column layout.\n\nTablet:\nbalanced 2-column layout where possible.\n\nMobile:\nstack:\n\nBadge\nHeadline\nDescription\nCTA\nVisual\n\nThe visual must remain visible.\n\nDo NOT crop the important AI/CRM visual.\n\nDo NOT create horizontal overflow.\n\n================================\nCTA\n\nPrimary CTA:\nUse the existing website CTA/routing wherever possible.\n\nSecondary CTA:\nBook a Free Consultation\n\nDo not create broken links.\n\nDo not remove existing CTA functionality.\n\n================================\nSEO\n\nHomepage must have ONLY ONE H1.\n\nUse the first slide headline as the homepage H1.\n\nOther slide headlines must use H2 or appropriate semantic elements.\n\nDo not put important text inside images.\n\nAdd meaningful alt text to visual images.\n\nDo not keyword stuff.\n\n================================\nPERFORMANCE\n\nUse optimized images/assets.\n\nFirst slide visual should load with priority.\n\nLazy-load other slide visuals when appropriate.\n\nAvoid unnecessary libraries.\n\nAvoid heavy animations.\n\nPrevent layout shift.\n\n================================\nIMPORTANT — PRESERVE WEBSITE\n\nDO NOT MODIFY:\n\nannouncement bar\n\nnavbar\n\nlogo\n\nnavigation\n\nAbout section\n\nServices section\n\nIndustries section\n\nInsights section\n\nfooter\n\nchatbot\n\nfloating buttons\n\nother homepage sections\n\nONLY rebuild the hero slider.\n\nBefore coding, inspect the current hero implementation and remove the broken hero-specific layout/styles safely.\n\nMake sure old hero CSS does not conflict with the new slider.\n\n================================\nFINAL QA\n\nAfter rebuilding:\n\nTest:\n\nDesktop 1920px\n\nDesktop 1440px\n\nLaptop 1366px\n\nTablet\n\nMobile 390px\n\nMobile 375px\n\nVerify:\n\nno oversized text\n\nno broken layout\n\nno overlapping slides\n\nno horizontal scrollbar\n\nimages display correctly\n\narrows work\n\ndots work\n\nautoplay works\n\nswipe works\n\nCTA links work\n\nnavbar remains unchanged\n\nhero does not cover the navbar\n\nhero does not affect sections below it\n\npage remains responsive\n\nThe final result must look like a polished, premium AI + SaaS company website.\n\nREBUILD THE HERO SLIDER FROM SCRATCH.\";

  return (
    <Layout>
      <SEO 
        title="Contact SOFTURECS AI LABS PRIVATE LIMITED"
        description="Contact SOFTURECS AI LABS PRIVATE LIMITED for AI solutions & software development in Hyderabad, India. Free consultation, 24-hour response. Call +91 7396080902 or email info@softurecsailabs.com."
        keywords="contact Softurecs, software development inquiry, AI solutions contact, IT consulting Hyderabad, software company India, custom software development"
      />
      <LocalBusinessSchema city="Hyderabad" region="Telangana" />
      <PageHero
        title="Contact SOFTURECS AI LABS PRIVATE LIMITED – Software Development Experts in Hyderabad"
        description="Talk to Our Software Experts in India. Get a Free AI & Software Consultation. Start Your Digital Transformation."
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

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
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
                        placeholder={commandPlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder={commandPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <Input
                        placeholder={commandPlaceholder}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder={commandPlaceholder}
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
                      placeholder={commandPlaceholder}
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card p-6 rounded-2xl border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:info@softurecsailabs.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">info@softurecsailabs.com</div>
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

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 blur-xl opacity-50" />
                <div className="relative z-10">
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
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        <span className="font-semibold text-white block mb-2">SOFTURECS AI LABS PRIVATE LIMITED</span>
                        5th Floor, Trinity Corporate Building, 501-A<br />
                        eSeva Lane, KPHB Phase 3, Kukatpally<br />
                        Hyderabad, Telangana – 500072
                      </p>
                    </div>
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
                        href="mailto:info@softurecsailabs.com"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-all group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider">Email Us</div>
                          <div className="text-white font-medium">info@softurecsailabs.com</div>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1475710526085!2d78.3908207!3d17.488251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918456f91605%3A0x8687265851416e78!2sTrinity%20Corporate%2C%20eSeva%20Ln%2C%20K%20P%20H%20B%20Phase%203%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1715456789012!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-900/50 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
