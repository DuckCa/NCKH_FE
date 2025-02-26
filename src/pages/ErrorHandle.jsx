import {
  useNavigate,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};
export default Error;
