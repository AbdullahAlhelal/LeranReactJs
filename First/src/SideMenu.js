import TagButton from "./tagButton";
export default function SideMenu() {
  return (
    <div style={{ margin: "20px" }}>
      <TagButton title="آخر المقالات" > <div>
        <span> 🌹
        </span>
      </div></TagButton>
      <TagButton title="أخر المقالات" ></TagButton>
      <TagButton title="مميز" > </TagButton>
      <TagButton />
    </div>
  );
}
