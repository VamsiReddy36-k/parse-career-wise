import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ResumeParser from "@/components/ResumeParser";
import heroImage from "@/assets/resume-hero.jpg";
import { 
  FileText, 
  Brain, 
  TrendingUp, 
  Award, 
  ArrowDown,
  CheckCircle,
  Sparkles,
  Users,
  Clock
} from "lucide-react";

const Index = () => {
  const [showParser, setShowParser] = useState(false);

  const scrollToParser = () => {
    setShowParser(true);
    setTimeout(() => {
      const parserElement = document.getElementById('resume-parser');
      if (parserElement) {
        parserElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const features = [
    {
      icon: FileText,
      title: "Intelligent Parsing",
      description: "Advanced AI extracts structured data from any resume format"
    },
    {
      icon: Brain,
      title: "Smart Analysis", 
      description: "Get personalized insights and improvement recommendations"
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Discover ideal job roles and upskilling opportunities"
    },
    {
      icon: Award,
      title: "Professional Rating",
      description: "Receive comprehensive scoring based on industry standards"
    }
  ];

  const benefits = [
    "Extract structured data from any resume",
    "Get professional improvement suggestions", 
    "Identify missing industry keywords",
    "Receive personalized career guidance",
    "Optimize for ATS systems",
    "Discover ideal job role matches"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-secondary opacity-90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Resume Analysis
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Transform</span> Your Resume
                <br />
                Into Career <span className="text-gradient">Success</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get instant AI-powered analysis, personalized improvement suggestions, 
                and career guidance to make your resume stand out to employers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToParser}
                variant="hero"
              >
                <Brain className="mr-2 h-5 w-5" />
                Analyze My Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg transition-smooth"
              >
                <FileText className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>10,000+ resumes analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Analysis in 30 seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Our <span className="text-gradient">Resume Parser</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage advanced AI technology to unlock your resume's potential and accelerate your career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">What You'll Get</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-accent p-8 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-semibold mb-4">Ready to get started?</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    Upload your resume and get comprehensive analysis with actionable insights in minutes.
                  </p>
                  <Button 
                    onClick={scrollToParser}
                    className="w-full"
                    variant="hero"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Try It Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Resume Parser Section */}
      {showParser && (
        <section id="resume-parser" className="py-24 px-6 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">
                <span className="text-gradient">Resume Parser</span> & Analysis
              </h2>
              <p className="text-xl text-muted-foreground">
                Paste your resume text below and let our AI do the magic ✨
              </p>
            </div>
            
            <ResumeParser />
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;