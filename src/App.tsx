import { Github, Youtube, ExternalLink, Folder } from 'lucide-react';

function App() {
  const projects = [
    {
      title: 'Globalisation in the pre-modern world',
      description: 'My Social Science project based on globalisation',
      link: 'https://sst.richitdev.me',
      tags: ['React', 'TypeScript', 'Tailwind']
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bhatrichit10-ux',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@Richit10',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <header className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-6 shadow-xl">
            <Folder className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
            Welcome to My Portfolio
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative solutions
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-medium transition-all duration-200 ${social.color} hover:scale-105 hover:shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                  {social.name}
                </a>
              );
            })}
          </div>
        </header>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                    <Folder className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-12 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            Built with passion and modern web technologies
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
