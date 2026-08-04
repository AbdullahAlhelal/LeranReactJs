export default function Post({ postName = 'no Title', postBody = 'No Body' }) {
  return (
    <div
      style={{
        border: " 2px black solid",
        margin: "20px",
      }}
    >
      <h2>{postName} </h2>
      <hr />
      <p> {postBody}</p>
    </div>
  );
}
