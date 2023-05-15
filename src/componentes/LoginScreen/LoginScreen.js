import "./LoginScreen.css";
import { useState } from "react";

const LoginScreen = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "email") {
      setValues({
        email: e.target.value,
        password: values.password,
      });
    } else {
      setValues({
        email: values.email,
        password: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console, log(values);
  };
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInput = (e) => {
    console.log(e);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };*/
  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="email"
            value={values.email}
            type={"email"}
            className="form-control my-2"
            placeholder="Email"
          />

          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            type={"password"}
            className="form-control my-2"
            placeholder="Contraseña"
          />

          <button className="btn btn-primary" type="submit">
            Ingresar{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
