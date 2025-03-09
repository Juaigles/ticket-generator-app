import { useNavigate } from 'react-router-dom'
import Upload from './Upload'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'

const Form = () => {
  const navigate = useNavigate();
  const [textData, setTextData] = useState({ name: "", email: "", github: "" });
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState({});
  const [info, setInfo] = useState({name: "Máximo 20 caracteres", email: "(hotmail, gmail...)", github:"Usuario de GitHub"})

  // Validar email con regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setError(prev => ({ ...prev, email: "El email es inválido" }));
      return false;
    }
    return true;
  };

  // Validar longitud mínima del nombre
  const validateLength = (name) => {
    if (name.length < 3 || name.length > 20) {
      setError(prev => ({ ...prev, name: "El nombre debe tener menos de 20 caracteres" }));
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({}); // Limpiar errores antes de validar

    const isEmailValid = validateEmail(textData.email);
    const isNameValid = validateLength(textData.name);

    if (!isEmailValid || !isNameValid) return;

    navigate("/ticket", { state: { ...textData, imageUrl } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextData(prev => ({ ...prev, [name]: value }));

    // Eliminar error si el usuario corrige el campo
    setError(prev => ({ ...prev, [name]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[460px] h-[610px]">
      <Upload setUrl={setImageUrl} />
      <Input 
        onChange={handleChange} 
        label="Nombre completo" 
        type="text" 
        id="name" 
        name="name" 
        value={textData.name} 
        info={error.name ? error.name : info.name } 
        error={error.name ? true : null}

        placeholder="Introduce tu nombre" 
      />
      <Input 
        onChange={handleChange} 
        label="Dirección Email" 
        type="text" 
        id="email" 
        name="email" 
        value={textData.email} 
        info={error.email ? error.email : info.email} 
        error={error.email ? true : null}
        placeholder="ejemplo@email.com" 
      />
      <Input 
        onChange={handleChange} 
        label="Nombre de Usuario en GitHub" 
        type="text" 
        id="github" 
        name="github" 
        value={textData.github} 
        info={error.github ? error.github : info.github } 
        error={error.github ? true : null}
        placeholder="@tu_usuario" 
      />
      <Button type="submit" variant="primary">Generar Mi Ticket</Button>
    </form>
  );
};

export default Form;
