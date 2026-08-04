import "./TagButton.css";
export default function TagButton({ title, children }) {
  if (title == null || title === "")
    return null;
  return <button className={"tagbtn"}> {title}

    {children}
  </button>;
}
