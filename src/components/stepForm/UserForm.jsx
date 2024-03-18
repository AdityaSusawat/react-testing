export function UserForm() {
  return (
    <>
      <label>First Name</label>
      <input autoFocus required type="text" />

      <label>Last Name</label>
      <input type="text" required />

      <label>Age</label>
      <input type="number" required min={12} />
    </>
  );
}
