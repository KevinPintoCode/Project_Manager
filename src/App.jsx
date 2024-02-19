import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import NewProject from "./components/NewProject/newproject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Navbar onStartAddProject={handleStartAddProject} />
      {content};
    </main>
  );
}

export default App;
