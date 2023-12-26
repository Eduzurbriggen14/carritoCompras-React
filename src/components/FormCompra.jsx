import { useState } from "react";

export const FormCompra = ({ handleCompraExitosa }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cardNumber: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cardNumberPrueba = "1111222233334444";

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleFinalizarCompra = (e) => {
    e.preventDefault();
    const cleanedCardNumber = formData.cardNumber.replace(/\s/g, "");

    const camposRequeridos = ["cardNumber", "email", "nombre", "apellido"];
    const verificarCampos = camposRequeridos.every(
      (field) => formData[field].trim() !== ""
    );
    //si los campos estan completos da true, caso contrario dara false. Si es false se ejecuta alert y no pasa la validacion
    if (!verificarCampos) {
      alert(
        "Todos los campos son requeridos. Por favor, llene todos los campos."
      );
      return;
    }
    // Validar que el número de tarjeta tenga 16 dígitos
    if (!(cleanedCardNumber.length === 16 && cleanedCardNumber === cardNumberPrueba && /^[0-9]+$/.test(cleanedCardNumber))) {
      alert(
        "Los datos de la Tarjeta son incorrectos!!!"
      );
      return;
    }
    //validamos que el formato de email sea correcto
    if (!validateEmail()) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    setTimeout(() => {
      console.log("watafuck");
      handleCompraExitosa();
    }, 2000);
  };

  return (
    <div className="mt-4">
      <h4>Información de Pago</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Número de Tarjeta
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFinalizarCompra}
        >
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};
