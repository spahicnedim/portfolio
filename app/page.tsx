export default function Home() {
  return (
    <div className="flex flex-col m-auto max-w-7xl items-center justify-center h-screen gap-20">
      <div className="justify-center items-center flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Nedim Spahić</h1>
        <p className="text-xl">
          📧 Contact:{" "}
          <a
            href="mailto:nedim@nedimspahic.com"
            className="text-blue-500 hover:underline"
          >
            nedim@nedimspahic.com
          </a>
        </p>
      </div>

      <p className="text-2xl text-gray-500 animate-pulse">Working on it...</p>
    </div>
  );
}
