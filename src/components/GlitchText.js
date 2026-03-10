'use client';

export default function GlitchText({
  children,
  onHover = false,
  duration = 2000,
  color1 = 'rgba(77,171,245,.5)',
  color2 = 'rgba(245,0,87,.3)'
}) {

  return (
    <>
      <span
        className={`glitch-text ${onHover ? 'hover' : ''}`}
        style={{
          '--duration': `${duration}ms`,
          '--c1': color1,
          '--c2': color2
        }}
      >
        {children}
      </span>

      <style jsx>{`

        .glitch-text{
          position:relative;
          display:inline-block;
          animation: glitchText var(--duration) cubic-bezier(.32,2,.55,.27) infinite;
        }

        .hover{
          animation:none;
        }

        .hover:hover{
          animation: glitchText 600ms cubic-bezier(.32,2,.55,.27) infinite;
        }

        @keyframes glitchText{

          0%{text-shadow:0.4px 0 1px var(--c1),-0.4px 0 1px var(--c2)}
          5%{text-shadow:2.7px 0 1px var(--c1),-2.7px 0 1px var(--c2)}
          10%{text-shadow:0.03px 0 1px var(--c1),-0.03px 0 1px var(--c2)}
          15%{text-shadow:0.4px 0 1px var(--c1),-0.4px 0 1px var(--c2)}
          20%{text-shadow:3.4px 0 1px var(--c1),-3.4px 0 1px var(--c2)}
          25%{text-shadow:1.6px 0 1px var(--c1),-1.6px 0 1px var(--c2)}
          30%{text-shadow:0.7px 0 1px var(--c1),-0.7px 0 1px var(--c2)}
          35%{text-shadow:3.8px 0 1px var(--c1),-3.8px 0 1px var(--c2)}
          40%{text-shadow:3.8px 0 1px var(--c1),-3.8px 0 1px var(--c2)}
          45%{text-shadow:2.2px 0 1px var(--c1),-2.2px 0 1px var(--c2)}
          50%{text-shadow:0.08px 0 1px var(--c1),-0.08px 0 1px var(--c2)}
          55%{text-shadow:2.3px 0 1px var(--c1),-2.3px 0 1px var(--c2)}
          60%{text-shadow:2.2px 0 1px var(--c1),-2.2px 0 1px var(--c2)}
          65%{text-shadow:2.8px 0 1px var(--c1),-2.8px 0 1px var(--c2)}
          70%{text-shadow:0.48px 0 1px var(--c1),-0.48px 0 1px var(--c2)}
          75%{text-shadow:1.8px 0 1px var(--c1),-1.8px 0 1px var(--c2)}
          80%{text-shadow:0.08px 0 1px var(--c1),-0.08px 0 1px var(--c2)}
          85%{text-shadow:0.09px 0 1px var(--c1),-0.09px 0 1px var(--c2)}
          90%{text-shadow:3.4px 0 1px var(--c1),-3.4px 0 1px var(--c2)}
          95%{text-shadow:2.1px 0 1px var(--c1),-2.1px 0 1px var(--c2)}
          100%{text-shadow:2.6px 0 1px var(--c1),-2.6px 0 1px var(--c2)}

        }

      `}</style>
    </>
  )
}