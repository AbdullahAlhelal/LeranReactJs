import "./TagButton.css";
export default function TagButton({ title, children }) {
  return <button className={"tagbtn"}> {title}

    {children}
  </button>;
}
