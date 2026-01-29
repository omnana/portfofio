import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="flex flex-1 justify-center pt-28 pb-10 md:pt-32 md:pb-20">
      <div className="flex flex-col w-full max-w-[1200px] flex-1 px-6 md:px-10">
        <div className="flex flex-wrap gap-2 pb-8">
          <Link
            className="text-white/50 text-sm font-medium hover:text-primary transition-colors"
            to="/"
          >
            Home
          </Link>
          <span className="text-white/30 text-sm font-medium">/</span>
          <span className="text-white text-sm font-medium">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/10 bg-background-dark shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs1aDXCk4rzDb6nNxhiai8r5XNfEboRirf0qbJP6ulKxtOiRU1ek0ZeYzVePMdriemBGoE2cezq4XpvkKXX-l0booO8OcMUrB1jB1U0u2KvHnB0FMEwM_n3xurRSyT9GW6FKZPSqdvpcngpqNTrUi_f-dIUk2VJfrKzcKmpHpQifys60h9Bf1tEaQYJc7Ws9tjEJ5cawTbORgv7-z-WmtFdNPhzKPYyOVKSPFiFYwuaiOxfT9QgVDWXcLbYtdpQmEqlf8CwhFg2w')",
                  }}
                ></div>

                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                  <div className="w-8 h-px bg-primary"></div>
                  <div className="w-4 h-px bg-primary/50"></div>
                </div>

                <div className="absolute bottom-4 right-4 z-20 text-right">
                  <p className="text-[10px] text-primary/70 font-mono tracking-widest uppercase">
                    Identity Verified
                  </p>
                  <p className="text-[10px] text-white/40 font-mono">ID: 882-XR-PORTFOLIO</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">
                Currently Working On
              </h3>
              <p className="text-white text-lg font-medium">
                Project: <span className="text-white/70">Xenon Protocol (Unreal 5.4)</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/50 uppercase font-bold tracking-tighter">
                  Live Build In Progress
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  Senior Game Developer
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                I&apos;m Alex River.
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
                Bridging the gap between artistic vision and engine performance through technical
                excellence and custom shader development.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">My Journey</h2>
                <div className="h-px grow bg-white/10"></div>
              </div>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  My career started in the modding scene, reverse-engineering classic RPG mechanics to
                  understand how gameplay loops are forged. This curiosity evolved into a
                  professional pursuit of technical art and systems architecture.
                </p>
                <p>
                  Over the past 8 years, I&apos;ve navigated through various AAA environments,
                  specializing in Unreal Engine&apos;s rendering pipeline. I don&apos;t just build
                  systems; I architect experiences that feel tactile, responsive, and visually
                  arresting.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">Core Capabilities</h2>
                <div className="h-px grow bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span>Unreal Engine (C++)</span>
                      <span className="text-primary">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[95%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span>Unity (C#)</span>
                      <span className="text-primary">80%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[80%]"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span>Shaders (GLSL/HLSL)</span>
                      <span className="text-primary">88%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[88%]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 content-start">
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">
                      deployed_code
                    </span>
                    <span className="text-sm font-medium">Blender</span>
                  </div>
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">brush</span>
                    <span className="text-sm font-medium">Substance</span>
                  </div>
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">animation</span>
                    <span className="text-sm font-medium">Maya</span>
                  </div>
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">data_object</span>
                    <span className="text-sm font-medium">Python</span>
                  </div>
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">hub</span>
                    <span className="text-sm font-medium">Blueprints</span>
                  </div>
                  <div className="tech-tag px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">grid_view</span>
                    <span className="text-sm font-medium">Vulkan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 transition-all text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-xl">description</span>
                Download Resume
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
                View Projects
              </button>
            </div>

            <div className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">
                  Status
                </p>
                <p className="text-sm font-mono text-primary">Available for Freelance</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">
                  Based In
                </p>
                <p className="text-sm font-mono">Vancouver, Canada</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Exp.</p>
                <p className="text-sm font-mono">8+ Years Professional</p>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">
                  Focus
                </p>
                <p className="text-sm font-mono">AAA Action-Adventure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
