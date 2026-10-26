export default function BouncingDots() {
  return (
    <span className="text-2xl leading-none">
      <span className="inline-block animate-bounce ">.</span>
      <span className="inline-block animate-bounce [animation-delay:150ms]">
        .
      </span>
      <span className="inline-block animate-bounce [animation-delay:300ms] ">
        .
      </span>
    </span>
  );
}
