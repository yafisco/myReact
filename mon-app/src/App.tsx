import { useState } from "react";

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
  });

  // Gestion du changement dans chaque champ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Nom: ${formData.nom}\nPrénom: ${formData.prenom}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nAdresse: ${formData.adresse}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-slate-100 shadow-lg rounded-lg flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Formulaire</h2>

      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="tel"
        name="telephone"
        placeholder="Téléphone"
        value={formData.telephone}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="adresse"
        placeholder="Adresse"
        value={formData.adresse}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Envoyer
      </button>
    </form>
  );
}

export default Formulaire;
