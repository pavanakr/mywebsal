import { CaseStudyDetailPage } from '@/components/portfolio/CaseStudyDetailPage';

const HealthPulse = () => {
  return (
    <CaseStudyDetailPage
      title="HealthPulse Platform"
      client="HealthPulse Inc."
      industry="Healthcare"
      duration="12 months"
      teamSize="15 engineers"
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
      overview="A comprehensive patient management system serving 500+ healthcare providers with HIPAA-compliant features for scheduling, medical records, and care coordination."
      challenge="HealthPulse was struggling with fragmented systems across their network of 500+ healthcare providers. Patient data was siloed, scheduling was manual, and care coordination between facilities was inefficient. They needed a unified platform that could handle millions of patient records while maintaining strict HIPAA compliance and providing real-time access to critical health information."
      solution="We built a cloud-native patient management platform with a microservices architecture that enables seamless data sharing across facilities. The system features role-based access control, end-to-end encryption, comprehensive audit logging, and real-time synchronization. We implemented HL7 FHIR standards for interoperability and integrated with existing EHR systems."
      features={[
        "Unified patient records",
        "Real-time appointment scheduling",
        "Secure messaging between providers",
        "Care coordination workflows",
        "Electronic prescriptions",
        "Lab results integration",
        "Patient portal access",
        "Mobile app for providers",
        "Analytics dashboard",
        "HIPAA audit logging",
        "Insurance verification",
        "Billing integration",
      ]}
      technologies={[
        "React", "Node.js", "PostgreSQL", "Redis",
        "AWS", "Docker", "Kubernetes", "HL7 FHIR",
        "GraphQL", "Elasticsearch", "Terraform",
      ]}
      metrics={[
        { value: "40%", label: "Admin Time Reduced" },
        { value: "500+", label: "Providers Onboarded" },
        { value: "2M+", label: "Patients Managed" },
        { value: "99.99%", label: "System Uptime" },
      ]}
      testimonial={{
        quote: "Vertex Labs transformed our vision into a world-class platform. Their technical expertise and commitment to quality exceeded all expectations. The platform has revolutionized how we deliver care.",
        author: "Sarah Chen",
        role: "CEO, HealthPulse Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      }}
      screenshots={[
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
      ]}
    />
  );
};

export default HealthPulse;
