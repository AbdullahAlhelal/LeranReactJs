export default function Articale({
  personname,
  email,
  content = "no content",
  children,
}) {
  const date = new Date();

  return (
    <>
      <div style={{ background: "white", color: "black", margin: "10px" }}>
        <h3>{personname}</h3>
        <h3>{email}</h3>
        <h3> {date.toLocaleDateString()}</h3>
        <hr />
        <p>{children}</p>
      </div>
    </>
  );
}
