import { Cloud } from 'lucide-react';
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage';
import heroCloudDevOps from '@/assets/hero-cloud-devops.png';

const CloudDevOps = () => {
  return (
    <ServiceDetailPage
      heroImage={heroCloudDevOps}
      icon={Cloud}
      color="from-orange-500 to-orange-600"
      title="Cloud & DevOps"
      tagline="Cloud infrastructure solutions and DevOps practices that ensure scalability, reliability, and continuous delivery."
      description="Transform your infrastructure with cloud-native architecture and modern DevOps practices. We help organizations achieve faster deployments, improved reliability, and reduced operational costs through automation and best practices."
      benefits={[
        "Auto-scaling infrastructure",
        "99.99% uptime SLAs",
        "Cost optimization",
        "Automated deployments",
        "24/7 monitoring",
        "Disaster recovery",
        "Security compliance",
        "Infrastructure as Code",
      ]}
      process={[
        {
          number: "01",
          title: "Assessment & Strategy",
          description: "Evaluate current infrastructure and design a cloud adoption roadmap.",
        },
        {
          number: "02",
          title: "Architecture Design",
          description: "Design scalable, secure cloud architecture aligned with your requirements.",
        },
        {
          number: "03",
          title: "Migration Planning",
          description: "Create detailed migration plan with minimal disruption to operations.",
        },
        {
          number: "04",
          title: "Infrastructure Build",
          description: "Implement infrastructure using code with automated provisioning.",
        },
        {
          number: "05",
          title: "CI/CD Implementation",
          description: "Set up automated pipelines for continuous integration and deployment.",
        },
        {
          number: "06",
          title: "Monitoring & Optimization",
          description: "Deploy monitoring tools and continuously optimize for performance and cost.",
        },
      ]}
      technologies={[
        "AWS", "Azure", "Google Cloud", "DigitalOcean",
        "Terraform", "Pulumi", "CloudFormation",
        "Docker", "Kubernetes", "Helm", "Istio",
        "Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD",
        "Prometheus", "Grafana", "Datadog", "New Relic",
      ]}
      caseStudies={[
        {
          title: "Cloud Migration at Scale",
          category: "Enterprise",
          description: "Migrated 200+ applications to AWS for a Fortune 500 financial services company.",
          results: ["40% cost reduction", "Zero downtime"],
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          href: "/portfolio/cloud-migration",
        },
        {
          title: "Kubernetes Platform",
          category: "Technology",
          description: "Built enterprise Kubernetes platform serving 50+ development teams.",
          results: ["10x faster deployments", "95% less ops overhead"],
          image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
          href: "/portfolio/kubernetes-platform",
        },
        {
          title: "DevOps Transformation",
          category: "Retail",
          description: "Complete DevOps transformation for a major retail chain.",
          results: ["Daily deployments", "50% faster releases"],
          image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
          href: "/portfolio/devops-transformation",
        },
      ]}
      useCases={[
        "Cloud Migration & Modernization",
        "Kubernetes & Container Orchestration",
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code",
        "Site Reliability Engineering",
        "Cost Optimization & FinOps",
      ]}
    />
  );
};

export default CloudDevOps;
