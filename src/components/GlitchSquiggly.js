'use client';

export default function GlitchSquiggly({
  children,
  onHover = false,
  duration = 340
}) {

  return (
    <>
      <div
        className={`glitch-squiggly ${onHover ? 'hover' : ''}`}
        style={{ '--duration': `${duration}ms` }}
      >
        {children}
      </div>

      <style jsx>{`

        .glitch-squiggly{
          display:inline-block;
          animation:squiggly var(--duration) cubic-bezier(.57,.21,.69,3.25) infinite;
        }

        .hover{
          animation:none;
        }

        .hover:hover{
          animation:squiggly 250ms infinite;
        }

        @keyframes squiggly{

          0%{filter:url(#squiggly-0)}
          25%{filter:url(#squiggly-1)}
          50%{filter:url(#squiggly-2)}
          75%{filter:url(#squiggly-3)}
          100%{filter:url(#squiggly-4)}

        }

      `}</style>

      <svg width="0" height="0">
        <defs>

          {[0, 1, 2, 3, 4].map(i => (
            <filter id={`squiggly-${i}`} key={i}>
              <feTurbulence
                baseFrequency="0.02"
                numOctaves="3"
                seed={i}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="5"
              />
            </filter>
          ))}

        </defs>
      </svg>

    </>
  )
}