import { Cloud } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';

const Salesforce = () => {
  return (
    <ServiceDetailPage
      icon={Cloud}
      color="from-blue-400 to-blue-500"
      title="Salesforce Development"
      tagline="Custom Salesforce solutions to maximize your CRM investment."
      description="We help you get the most out of Salesforce with custom development, integrations, and consulting. From implementation to optimization, we're your Salesforce partner."
      benefits={[
        "Custom development",
        "Salesforce integrations",
        "Lightning components",
        "AppExchange apps",
        "Data migration",
        "Process automation",
        "Analytics & reporting",
        "Training & support",
      ]}
      process={[
        { number: "01", title: "Discovery", description: "Understand your business processes and Salesforce needs." },
        { number: "02", title: "Solution Design", description: "Design custom Salesforce solution architecture." },
        { number: "03", title: "Development", description: "Build custom components and integrations." },
        { number: "04", title: "Testing", description: "Comprehensive testing in sandbox environments." },
        { number: "05", title: "Deployment", description: "Deploy to production with change management." },
        { number: "06", title: "Training", description: "User training and ongoing support." },
      ]}
      technologies={["Apex", "Lightning Web Components", "Visualforce", "Salesforce Flow", "MuleSoft", "Heroku", "SOQL", "REST APIs", "Platform Events", "Einstein AI"]}
      caseStudies={[
        { title: "Sales Cloud Optimization", category: "Technology", description: "Custom Sales Cloud implementation.", results: ["50% faster sales cycle", "30% more leads"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", href: "/portfolio/sales-cloud" },
        { title: "Service Cloud Portal", category: "Retail", description: "Customer service portal integration.", results: ["40% case reduction", "90% satisfaction"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", href: "/portfolio/service-cloud" },
        { title: "CPQ Implementation", category: "Manufacturing", description: "Configure, Price, Quote automation.", results: ["80% faster quotes", "Zero errors"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", href: "/portfolio/cpq" },
      ]}
      useCases={["Sales Cloud customization", "Service Cloud implementation", "Marketing Cloud setup", "Commerce Cloud development", "Pardot automation", "Custom AppExchange apps"]}
    />
  );
};

export default Salesforce;
