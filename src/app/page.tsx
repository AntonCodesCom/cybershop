export default function RouteHome() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header style={{ height: 88 }}>header</header>
      <main className="flex-1 bg-gray-200">main</main>
      <footer className="bg-black text-white">
        <span>footer</span>
      </footer>
    </div>
  );
}
