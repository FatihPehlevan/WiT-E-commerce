export default function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-alert-color text-small">{message}</p>;
}
