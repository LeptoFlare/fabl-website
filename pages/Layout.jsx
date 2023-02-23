const Layout = ({ prose = false, children }) => {
  return (
    <>
      <div className="bg-fabl-indigo-dark">
        <div className="max-w-5xl mx-auto h-16 py-2 w-full flex items-center justify-between px-4 gap-4">
          <a href="/" className="h-full flex items-center shrink-0 gap-2">
            <img src="/FABL_IconLogo.svg" className="h-full aspect-square" />
            <img
              src="/FABL_TextLogo.svg"
              className="h-full py-1.5 hidden sm:block"
            />
          </a>
          <div className="flex items-center gap-8 text-lg sm:text-xl font-bold uppercase tracking-wide">
            <a href="/leaderboard">Leaderboard</a>
            <a href="/rules">Rules</a>
          </div>
        </div>
      </div>
      {prose ? (
        <main className="prose prose-lg mx-auto prose-slate !prose-invert my-8">
          {children}
        </main>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
};
export default Layout;