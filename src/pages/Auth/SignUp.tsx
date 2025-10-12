import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const nav = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      Swal.fire({ icon: "success", title: "Compte créé" });
      nav("/profile");
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Erreur", text: err?.response?.data?.message || "Impossible de créer le compte" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-md">
  <form
    onSubmit={submit}
    className="bg-white shadow-md p-6 rounded-lg"
  >
    <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
      S'inscrire
    </h2>

    <input
      className="input input-bordered w-full mb-3 bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Nom"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />

    <input
      className="input input-bordered w-full mb-3 bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />

    <input
      type="password"
      className="input input-bordered w-full mb-3 bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Mot de passe"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      className="btn bg-blue-800 hover:bg-blue-900 text-white w-full mt-4"
      type="submit"
    >
      S'inscrire
    </button>
  </form>
</div>
  );
}
