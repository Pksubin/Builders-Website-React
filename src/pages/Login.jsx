import MainLayout from "../layouts/MainLayout";

function Login() {
  return (
    <MainLayout>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>

          <label>Username</label>
          <input type="text" />

          <label>Password</label>
          <input type="password" />

          <button>Login</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;
