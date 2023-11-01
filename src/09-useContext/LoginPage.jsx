import { useContext } from "react";
import { UserContext } from "./context";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        onClick={() =>
          setUser({
            id: 123,
            name: "Fernando Herrera",
            email: "fernando@google.com",
          })
        }
        className="btn btn-primary"
      >
        Establecer usuario
      </button>
    </>
  );
};
