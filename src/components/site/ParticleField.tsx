export function ParticleField() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#046bd2]/10 blur-[120px] animate-float-slow" />
      <div
        className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-[#046bd2]/8 blur-[120px] animate-float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#046bd2]/6 blur-[120px] animate-float-slow"
        style={{ animationDelay: "-8s" }}
      />
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#046bd2]/20 animate-pulse-glow"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
