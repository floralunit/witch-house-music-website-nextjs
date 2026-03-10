'use client';

export default function GlitchClip({
  children,
  onHover = false,
  duration = 3000,
  className = ''
}) {

  return (
    <>
      <div
        className={`glitch-clip ${onHover ? 'hover' : ''} ${className}`}
        style={{ '--duration': `${duration}ms` }}
      >
        {children}
      </div>

      <style jsx>{`

        .glitch-clip{
          position:relative;
          display:inline-block;
          animation: glitchClip var(--duration) linear infinite;
        }

        .hover{
          animation:none;
        }

        .hover:hover{
          animation: glitchClip 900ms linear infinite;
        }

        @keyframes glitchClip{

          0%{
            transform:translateX(-5px) scale(-1,-1);
            clip-path:polygon(0 20%,100% 20%,100% 21%,0 21%);
          }

          2%{clip-path:polygon(0 33%,100% 33%,100% 33%,0 33%)}
          4%{clip-path:polygon(0 44%,100% 44%,100% 44%,0 44%)}

          5%{
            clip-path:polygon(0 50%,100% 50%,100% 20%,0 20%);
          }

          6%{clip-path:polygon(0 70%,100% 70%,100% 70%,0 70%)}
          7%{clip-path:polygon(0 80%,100% 80%,100% 80%,0 80%)}

          8%{
            clip-path:polygon(0 50%,100% 50%,100% 55%,0 55%);
          }

          9%{
            clip-path:polygon(0 70%,100% 70%,100% 80%,0 80%);
          }

          10%,100%{
            transform:none;
            clip-path:polygon(0 0,100% 0,100% 100%,0 100%);
          }

        }

      `}</style>
    </>
  )
}