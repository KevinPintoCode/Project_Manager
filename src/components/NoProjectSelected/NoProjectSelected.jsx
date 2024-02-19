import noProjectImage from "../../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="Notebook" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p>Select a project or create a new one</p>
      <p>
        <button>Create a new Project</button>
      </p>
    </div>
  );
}
