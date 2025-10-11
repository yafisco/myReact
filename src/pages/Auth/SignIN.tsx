import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuth();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signin(email, password);
      Swal.fire({ icon: "success", title: "Connecté" });
      nav("/profile");
    } catch (err: any) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Erreur", text: err?.response?.data?.message || "Impossible de se connecter" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-md">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Se connecter</h2>
        <input className="input input-bordered w-full mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="input input-bordered w-full mb-3" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-full" type="submit">Connexion</button>
      </form>
    </div>
  );
}
