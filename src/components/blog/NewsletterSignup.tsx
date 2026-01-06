import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

export function NewsletterSignup() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: 'Invalid email',
        description: result.error.errors[0].message,
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: 'Successfully subscribed!',
      description: "You'll receive our latest insights directly in your inbox.",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-accent/20 to-cyan-light/10 rounded-2xl p-8 text-center border border-accent/20"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">You're subscribed!</h3>
        <p className="text-muted-foreground">
          Thank you for joining our newsletter. Check your inbox for a confirmation email.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary via-navy to-navy-light rounded-2xl p-8 md:p-12"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <Mail className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Stay Ahead of the Curve
        </h3>
        <p className="text-primary-foreground/70 mb-8">
          Get the latest insights on software development, technology trends, and industry best practices delivered to your inbox weekly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"
            required
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold whitespace-nowrap"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
        <p className="text-xs text-primary-foreground/50 mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
}
