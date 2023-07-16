function App() {
  return (
    <>
      <main className="antialiased text-slate-800">
        <div className="container py-24">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-400 mb-1">
            Hi! I'm <span className="text-slate-950">Endy Hardy.</span>
          </h1>
          <p>
            Software engineer in Makassar, Indonesia.{" "}
            <span className="bg-slate-400 text-xs text-slate-50 py-1 px-2 rounded-full">
              UTC+8
            </span>
          </p>
        </div>
        <div className="container space-y-6">
          <p className="max-w-xl">
            I develop web and mobile applications for humans, using NextJS,
            ReactJS and React Native, with over 8 years of experience, across
            multiple industries, with deep know-how in UI/UX design and
            implementation. Based in Makassar, Indonesia. Husband and father of
            3. Senior software engineer at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://xendit.co"
              className="underline"
            >
              Xendit
            </a>
            .
          </p>
          <p>
            <ul className="uppercase tracking-wider text-sm font-semibold text-slate-400 flex space-x-6">
              <li>
                <a
                  className="hover:text-slate-600 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.polywork.com/endyhardy"
                >
                  Polywork
                </a>
              </li>
              <li>
                <a
                  className="hover:text-slate-600 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/endyhardy"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-slate-600 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/ndyhrdy"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
