import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Query from "./Query";
import Users from "./Users";
import RegistrationForm from "./RegistrationForm";
import ErrorPage from "./ErrorPage";
import ChangeCompanyName from "./ChangeCompanyName";

// loaderusecase : paila data fetch hunxa balla  component render hunxa

// Api Failure and Loader Failure

export const usersLoader = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/uers");

    // API failure
    if (!res.ok) {
      throw new Response("Failed to fetch users", {
        status: res.status,
      });
    }

    return res.json();
  } catch (error: unknown) {
    // Loader failure
    throw new Error("Something went wrong while loading users", {
      cause: error,
    });
  }
};
//------------------------------------------------------------------------------

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        // path:"home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },

      // Lazy Loading ko example ----------------------------------------------------------------------
      {
        path: "/product",
        lazy: async () => {
          const Product = await import("./Product");

          return {
            Component: Product.default,
          };
        },
      },
      {
        path: "product/:category",

        lazy: async () => {
          const ProductDetails = await import("./ProductDetails");

          return {
            Component: ProductDetails.default,
          };
        },
      },

      //-------------------------------------------------------------------------------------------------

      {
        path: "query",
        Component: Query,
      },

      //loader useCase ----------------------------------------------------------------------------------
      {
        path: "users",
        Component: Users,
        loader: usersLoader,
        errorElement: <ErrorPage />,
      },
      //-------------------------------------------------------------------------------------------------

      //Registration From Submit gareko Action use garera----------------------------------------------

      {
        path: "register",
        Component: RegistrationForm,
        action: async ({ request }) => {
          const formData = await request.formData();

          const username = formData.get("username");
          const password = formData.get("password");

          const errors: Record<string, string> = {};

          if (!username) {
            errors.username = "Username is required";
          }

          if (!password) {
            errors.password = "Password is required";
          }

          // if any error exists
          if (Object.keys(errors).length > 0) {
            return { errors };
          }

          //   return null;

          //yestari pani return garna milxa
          // return {
          //     message: "Form Submitted Successfully",
          //     username,
          //     password,
          // };

          return redirect("/home");
        },
      },
      {
        path: "changeCompanyName",
        Component : ChangeCompanyName,
      }

      //----------------------------------------------------------------------------------------------------
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
