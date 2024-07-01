import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl">Welcome to the AI Prompt Manager</h1>
      <p>Use the sidebar to navigate through the application.</p>
      <Link to="/dashboard" className="text-blue-500 underline">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Index;