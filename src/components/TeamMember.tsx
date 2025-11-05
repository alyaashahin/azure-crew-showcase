import { Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const TeamMember = ({ name, role, description, image, socials }: TeamMemberProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-card hover:shadow-card-hover transition-smooth bg-card">
      <CardContent className="p-6 text-center">
        <div className="mb-4 relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 transition-smooth group-hover:ring-primary/30">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        
        <p className="text-sm font-medium text-primary mb-3">
          {role}
        </p>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex justify-center gap-3">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label={`${name}'s GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
