export default function Mycompnent({ value, handelOnchange, currentvalue }) {
  return (
    <div>
      <label>Phone Number:</label>
      <input
        value={value}
        onChange={(event) => {
          handelOnchange({ ...currentvalue, phoneNumber: event.target.value });
        }}
      />
    </div>
  );
}
