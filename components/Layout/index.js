import { Home } from "../Home";
import { About } from "../About";
import { Product } from "../Product";
import { Team } from "../Team";

export function Layout() {
  return (
    <>
      <Home />
      <About />
      <Product />
      {/* <Team /> */}
    </>
  );
}