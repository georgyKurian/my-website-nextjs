export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-5xl font-bold leading-tight tracking-tighter text-center md:leading-none md:text-left">
      {children}
    </h1>
  );
}
