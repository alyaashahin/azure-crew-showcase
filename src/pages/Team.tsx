import TeamMember from "@/components/TeamMember";
import member1 from "@/assets/team-member-1.jpg";
import member2 from "@/assets/team-member-2.jpg";
import member3 from "@/assets/team-member-3.jpg";
import member4 from "@/assets/team-member-4.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "UI/UX Designer",
      description: "Led the design vision with a focus on accessibility and user experience. Created intuitive interfaces that patients love.",
      image: member1,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      description: "Architected the robust backend infrastructure ensuring HIPAA compliance and seamless data security.",
      image: member2,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Frontend Developer",
      description: "Brought designs to life with pixel-perfect implementations and smooth animations that enhance user engagement.",
      image: member3,
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "James Thompson",
      role: "Product Manager",
      description: "Coordinated the team and ensured we delivered a product that truly meets healthcare providers' needs.",
      image: member4,
      socials: {
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <div className="min-h-screen gradient-soft relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in">
              The creative minds behind this project, dedicated to delivering excellence in healthcare technology.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TeamMember {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
