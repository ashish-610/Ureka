import {
  useRouteError,
  isRouteErrorResponse
} from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();

  // Response errors
  if (isRouteErrorResponse(error)) {

    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.data}</p>
      </div>
    );
  }

// Normal JS errors
 if (error instanceof Error) {
  return (
    
    <div>
        
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
};

export default ErrorPage;