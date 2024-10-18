interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: Heading1Props) {
  return (
    <h1 className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      {children}
    </h1>
  );
}
