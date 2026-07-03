export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 ${className}`}>
      {children}
    </div>
  );
}