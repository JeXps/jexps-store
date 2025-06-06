function Login() {
    return (
      <div className="container mt-4">
        <h2>Iniciar sesión</h2>
        <form>
          <input className="form-control mb-2" placeholder="Usuario" />
          <input className="form-control mb-2" type="password" placeholder="Contraseña" />
          <button className="btn btn-primary">Entrar</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  