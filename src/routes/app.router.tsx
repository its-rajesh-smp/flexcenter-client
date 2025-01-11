import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routes";

const appRouter = createBrowserRouter([...publicRoutes]);

export default appRouter;
