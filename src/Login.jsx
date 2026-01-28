function Input(props) {
  return (
    <label htmlFor={props.value} className="gap-10 border my-5 justify-center py-3 px-2 [&>input]:border-none [&>input]:outline-none ">
      <span>{props.name}</span>
      <input type={props.value} name={props.value} id={props.value} placeholder={props.placeholder}  />
    </label>
  )
}

function Login() {
  return (
    <>
      <form className="flex flex-col text-left items-center mx-auto my-[30vh] [&>label]:items-center [&>label]:flex [&>label]:flex-row ">
        <Input value="email" placeholder="Enter your email correcly" name="Email" />
        <Input value="password" placeholder="Enter your password correcly" name="Password" />
        <button className="bg-black text-white px-5 py-3 rounded-xl">Login</button>
      </form>
    </>
  );
}

export default Login;
