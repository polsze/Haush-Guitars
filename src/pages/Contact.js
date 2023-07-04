import React from "react";
import "../styles/Contact.css";
import useForm from "../hooks/useForm";

const Contact = () => {
  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );


  return (
    <>
      <div className="contact-container container-fluid">
        <h4 className="contactTitle">Formulario de contacto</h4>
        <form className="" onSubmit={handleSubmit}>
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre aquí"
          />
          {errors.nombre && (
            <div className="alert alert-danger p-2">{errors.nombre}</div>
          )}

          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Ingrese su correo electrónico aquí"
          />
          {errors.correo && (
            <div className="alert alert-danger p-2">{errors.correo}</div>
          )}

          <label className="form-label">Asunto</label>
          <input
            type="text"
            className="form-control"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
            placeholder="Ingrese su asunto aquí"
          />
          {errors.asunto && (
            <div className="alert alert-danger p-2">{errors.asunto}</div>
          )}

          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            cols="40"
            rows="6"
            placeholder="Ingrese mensaje aquí"
          />
          {errors.mensaje && (
            <div className="alert alert-danger p-2">{errors.mensaje}</div>
          )}

          <button
            className="btn btn-primary w-100 mt-4 mb-3"
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <div className="contact-icons">
        <div>
          <i class="bi bi-geo-alt"></i>
        
          <p className="contact-text">Buenos Aires, Argentina</p>
        </div>
          <div>

          <i class="bi bi-envelope"></i>
          <p className="contact-text">haushguitars@gmail.com</p>
          </div>
          <div>
          <i class="bi bi-phone"></i>
          <p className="contact-text">1537034641</p>
          </div>
        </div>
      </div>
      <hr width="100%" className="line" />
    </>
  );
};

export default Contact;
