export function AddressForm() {
  return (
    <>
      <label>Street</label>
      <input autoFocus required type="text" />

      <label>City</label>
      <input type="text" required />

      <label>Zip</label>
      <input type="number" required min={12} />
    </>
  );
}
