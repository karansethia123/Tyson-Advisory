const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 py-10 bg-gradient-to-b from-[var(--background)] to-blue-900 items-center px-5">
      <div className="w-full grid-cols-1 grid sm:grid-cols-2 md:grid-cols-4 place-items-start md:place-items-center gap-5 md:gap-2 max-w-[1280px]">
        <section className="flex-1 flex flex-col gap-2">
          <h2 className="text-xl xl:text-2xl font-header font-black">Tyson Advisory</h2>
        </section>
        <section className="flex-1 flex flex-col gap-2">
          <p className="font-content font-medium tracking-wide">Reach US</p>
          <p className="text-sm font-content tracking-wide text-slate-50 underline underline-offset-4">info@tysonsadvisory.com</p>
        </section>
        <section className="flex-1 flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <p className="font-content font-medium tracking-wide">CAGE</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Code: 101L5</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-content font-medium tracking-wide">Designation</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Minority WOSB </p>
          </span>
        </section>
        <section className="flex flex-col gap-2 flex-1">
            <p className="font-content font-medium tracking-wide">Locations</p>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-2">
            <p className="text-sm font-content tracking-wide text-slate-50">McLean, VA</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Dallas, TX</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Delhi, IN</p>
            <p className="text-sm font-content tracking-wide text-slate-50">Pune, IN</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer;
