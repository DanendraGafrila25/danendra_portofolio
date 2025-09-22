'use client';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#f9f3ef]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-[#456882] max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1b3c53] mb-4">
              Hi, I&apos;m Danendra
            </h3>
            <div className="space-y-4 text-[#1b3c53]/80 leading-relaxed">
              <p>
                I&apos;m a passionate Full Stack Developer with experience in building modern web applications. 
                I love turning complex problems into simple, and intuitive solutions.
              </p>
              <p>
                My journey in web development started several years ago, and I&apos;ve been constantly learning 
                and adapting to new technologies. I believe in writing clean, maintainable code and 
                creating user experiences that make a difference.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-[#d2c1b6]/30">
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-[#456882] font-medium">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1b3c53] mb-6">
              What I Do
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#d2c1b6]/30 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#1b3c53]">Frontend Development</h4>
                </div>
                <p className="text-[#456882]">
                  Creating responsive and interactive user interfaces using React, Next.js,Vue.js, Nuxt.js and modern CSS frameworks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#d2c1b6]/30 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#1b3c53]">Backend Development</h4>
                </div>
                <p className="text-[#456882]">
                  Building robust server-side applications with PHP, Java, Python, Go and database management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#d2c1b6]/30 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#1b3c53]">Full Stack Solutions</h4>
                </div>
                <p className="text-[#456882]">
                  End-to-end application development from conception to deployment and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
