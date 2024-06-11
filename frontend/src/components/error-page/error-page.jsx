import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-max">
      <h1 className="text-6xl">Erreur d&apos;accès</h1>
      <Link className="text-3xl" to="/">Accueil</Link>
    </div>
  );
}
