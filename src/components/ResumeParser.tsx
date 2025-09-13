import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Brain, 
  TrendingUp, 
  Award, 
  Briefcase, 
  GraduationCap,
  Code,
  Star,
  Target,
  Lightbulb
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ParsedResume {
  personal_info: {
    full_name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    address: string;
    summary: string;
  };
  education: Array<{
    degree: string;
    major: string;
    university: string;
    location: string;
    start_date: string;
    end_date: string;
    grade_or_gpa: string;
  }>;
  work_experience: Array<{
    job_title: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    responsibilities: string[];
    achievements: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies_used: string[];
    link: string;
  }>;
  skills: {
    core_skills: string[];
    soft_skills: string[];
    tools_and_technologies: string[];
    languages_known: string[];
  };
  certifications: Array<{
    name: string;
    organization: string;
    year: string;
  }>;
  awards_and_achievements: string[];
  publications: string[];
  volunteer_experience: string[];
  extra_curricular: string[];
  analysis: {
    resume_rating: string;
    strengths: string[];
    improvement_areas: string[];
    upskill_suggestions: string[];
    job_role_fit: string[];
    industry_keywords_to_add: string[];
  };
}

export default function ResumeParser() {
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedResume | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!resumeText.trim()) {
      toast({
        title: "Missing Resume Text",
        description: "Please paste your resume text to analyze it.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with the prompt structure
    setTimeout(() => {
      // Mock parsed data for demo
      const mockData: ParsedResume = {
        personal_info: {
          full_name: "John Doe",
          email: "john.doe@email.com",
          phone: "+1-555-0123",
          linkedin: "linkedin.com/in/johndoe",
          github: "github.com/johndoe",
          portfolio: "johndoe.dev",
          address: "San Francisco, CA",
          summary: "Experienced software engineer with 5+ years in full-stack development"
        },
        education: [{
          degree: "Bachelor of Science",
          major: "Computer Science",
          university: "University of California",
          location: "Berkeley, CA",
          start_date: "2016",
          end_date: "2020",
          grade_or_gpa: "3.8 GPA"
        }],
        work_experience: [{
          job_title: "Senior Software Engineer",
          company: "Tech Corp",
          location: "San Francisco, CA",
          start_date: "2022",
          end_date: "Present",
          responsibilities: [
            "Led development of microservices architecture",
            "Mentored junior developers",
            "Implemented CI/CD pipelines"
          ],
          achievements: [
            "Reduced deployment time by 60%",
            "Improved system performance by 40%"
          ]
        }],
        projects: [{
          title: "E-commerce Platform",
          description: "Full-stack e-commerce solution with React and Node.js",
          technologies_used: ["React", "Node.js", "PostgreSQL", "AWS"],
          link: "github.com/johndoe/ecommerce"
        }],
        skills: {
          core_skills: ["JavaScript", "React", "Node.js", "Python"],
          soft_skills: ["Leadership", "Communication", "Problem Solving"],
          tools_and_technologies: ["Docker", "AWS", "PostgreSQL", "Redis"],
          languages_known: ["English", "Spanish"]
        },
        certifications: [{
          name: "AWS Solutions Architect",
          organization: "Amazon Web Services",
          year: "2023"
        }],
        awards_and_achievements: ["Employee of the Month - June 2023"],
        publications: ["N/A"],
        volunteer_experience: ["Code for Good - Volunteer Developer"],
        extra_curricular: ["Hackathon Organizer", "Tech Meetup Speaker"],
        analysis: {
          resume_rating: "8.5/10",
          strengths: [
            "Strong technical background",
            "Proven leadership experience",
            "Measurable achievements"
          ],
          improvement_areas: [
            "Add more quantified results",
            "Include industry-specific keywords",
            "Expand on soft skills examples"
          ],
          upskill_suggestions: [
            "Machine Learning fundamentals",
            "Kubernetes certification",
            "System design principles"
          ],
          job_role_fit: [
            "Senior Software Engineer",
            "Tech Lead", 
            "Engineering Manager",
            "Solutions Architect"
          ],
          industry_keywords_to_add: [
            "Agile methodology",
            "Microservices",
            "DevOps",
            "Cloud architecture"
          ]
        }
      };

      setParsedData(mockData);
      setIsAnalyzing(false);
      
      toast({
        title: "Resume Analyzed Successfully!",
        description: "Your resume has been parsed and analyzed.",
      });
    }, 3000);
  };

  const getRatingColor = (rating: string) => {
    const score = parseFloat(rating);
    if (score >= 8) return "text-green-400";
    if (score >= 6) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm shadow-glow">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Resume Input</h2>
          </div>
          
          <div className="space-y-4">
            <Textarea
              placeholder="Paste your resume text here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="min-h-[200px] bg-background/50 border-border/50 focus:border-primary transition-smooth"
            />
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {resumeText.length} characters
              </p>
              
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || !resumeText.trim()}
                variant="hero"
                className="shadow-glow"
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Analyze Resume
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Loading Progress */}
      {isAnalyzing && (
        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Processing Resume...</h3>
            <Progress value={33} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Extracting structured data and generating insights...
            </p>
          </div>
        </Card>
      )}

      {/* Results Section */}
      {parsedData && (
        <div className="space-y-8">
          {/* Analysis Overview */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm shadow-glow">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Resume Analysis</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Overall Rating</p>
                  <p className={`text-3xl font-bold ${getRatingColor(parsedData.analysis.resume_rating)}`}>
                    {parsedData.analysis.resume_rating}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-400 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {parsedData.analysis.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        <span className="text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Improvement Areas
                  </h3>
                  <ul className="space-y-2">
                    {parsedData.analysis.improvement_areas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p><span className="font-medium">Name:</span> {parsedData.personal_info.full_name}</p>
                  <p><span className="font-medium">Email:</span> {parsedData.personal_info.email}</p>
                  <p><span className="font-medium">Phone:</span> {parsedData.personal_info.phone}</p>
                  <p><span className="font-medium">Location:</span> {parsedData.personal_info.address}</p>
                </div>
                <div className="space-y-3">
                  <p><span className="font-medium">LinkedIn:</span> {parsedData.personal_info.linkedin}</p>
                  <p><span className="font-medium">GitHub:</span> {parsedData.personal_info.github}</p>
                  <p><span className="font-medium">Portfolio:</span> {parsedData.personal_info.portfolio}</p>
                </div>
              </div>
              {parsedData.personal_info.summary !== "N/A" && (
                <div className="pt-4">
                  <p className="font-medium mb-2">Summary:</p>
                  <p className="text-sm text-muted-foreground">{parsedData.personal_info.summary}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Skills Section */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Skills</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.skills.core_skills.map((skill, idx) => (
                    <Badge key={idx} variant="default" className="bg-primary/20 text-primary border-primary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.skills.tools_and_technologies.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-secondary/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.skills.soft_skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-accent">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.skills.languages_known.map((lang, idx) => (
                      <Badge key={idx} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Recommendations</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-400">Upskill Suggestions</h3>
                  <ul className="space-y-2">
                    {parsedData.analysis.upskill_suggestions.map((suggestion, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-sm">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-purple-400">Job Role Fit</h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedData.analysis.job_role_fit.map((role, idx) => (
                      <Badge key={idx} variant="default" className="bg-primary text-primary-foreground">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="bg-border/50" />

              <div className="space-y-4">
                <h3 className="font-semibold text-orange-400">Keywords to Add</h3>
                <div className="flex flex-wrap gap-2">
                  {parsedData.analysis.industry_keywords_to_add.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="border-orange-400 text-orange-400">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}