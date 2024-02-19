import Navbar from "./components/Navbar/Navbar";
import NewProject from "./components/NewProject/newproject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Navbar />
      <NewProject />
    </main>
  );
}

export default App;
