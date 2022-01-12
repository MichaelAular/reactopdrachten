export default function FunctionalComponent({ title2, setTitleHandler }) {
  return (
    <div>
      <h2>Hello Function {title2}!</h2>
      <input value={title2} onChange={setTitleHandler} />
    </div>
  );
}