import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>This is the About page.</p>
    </div>
  );
}
