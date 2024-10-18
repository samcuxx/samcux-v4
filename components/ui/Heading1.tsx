interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: Heading1Props) {
  return (
    <h1 className={`scroll-m-20 text-[2.5rem] sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight ${className}`}>
      {children}
    </h1>
  );
}
