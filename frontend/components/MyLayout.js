import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 p-2 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
