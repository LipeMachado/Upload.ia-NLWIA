import { Main } from "./Components/Main";
import { NavBar } from "./Components/NavBar";

export function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Main />
      </div>
    </>
  )
}