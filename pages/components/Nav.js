export default function Nav({ recipe }) {
  return (
    <div className="nav">
      <a href="/"><h2>夏</h2></a>
      <div className="links">
        {recipe && (
          <a href="/recipes">Recipes</a>
        )}

        <a href="/">Home</a>
      </div>
    </div>
  );
}
