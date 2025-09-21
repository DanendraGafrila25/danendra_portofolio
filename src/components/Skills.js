'use client';

const Skills = () => {
  // Pisahkan skills berdasarkan kategori dengan desain yang lebih elegan
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Vue.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" }
      ],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Golang", level: "Intermediate" },
        { name: "PHP", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" }
      ],
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "VS Code", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "DBeaver", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "AWS", level: "Beginner" }
      ],
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-[#f9f3ef] to-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b3c53] mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-[#456882] max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different domains of web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm border border-[#d2c1b6]/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1b3c53] mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#456882] to-[#1b3c53] rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300"
                  >
                    <span className="font-medium text-[#1b3c53] group-hover:text-[#456882] transition-colors">
                      {skill.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-100 text-green-700 group-hover:bg-green-200'
                        : skill.level === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200'
                        : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Focus */}
        <div className="bg-gradient-to-r from-[#1b3c53] to-[#456882] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-white/90">
              Technology evolves rapidly, and I&apos;m committed to staying ahead of the curve. 
              I continuously expand my skill set through hands-on projects, online courses, and industry best practices.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Currently Exploring</h4>
                <p className="text-sm text-white/80">AI/ML Integration & Cloud Architecture</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Next Goals</h4>
                <p className="text-sm text-white/80">DevOps & Advanced System Design</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold mb-2">Philosophy</h4>
                <p className="text-sm text-white/80">Quality Code & User-Centric Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
