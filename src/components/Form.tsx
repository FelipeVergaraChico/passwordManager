// oi
export default function Form() {
  return (
    <form>
      <label htmlFor="Serviço">
        Nome do serviço
        <input id="Serviço" type="text" />
      </label>
      <label htmlFor="Login">
        Login
        <input type="text" id="Login" />
      </label>
      <label htmlFor="Password">
        Senha
        <input type="password" id="Password" />
      </label>
      <label htmlFor="Url">
        URL
        <input type="text" id="Url" />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}
