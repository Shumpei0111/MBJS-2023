export const MailAddress: React.FC = () => {
  return (
    <div className="pt-[242px] pb-[150px] flex justify-center">
      <div className="inline-flex relative w-auto flex-col-reverse md:flex-row items-center px-4">
        <a
          href="mailto:shumpei.o.7g@gmail.com"
          className="md:text-100 text-40 duration-1000 hover:tracking-wider"
        >
          shumpei.o.7g
          <span className="before:content-['@']" />
          gmail
          <span className="before:content-['.']" />
          com
        </a>
        <p className="md:text-100 text-40 here -mb-4 md:mb-0">✋</p>
        <span className="absolute bottom-3 md:bottom-6 h-1 md:h-2 bg-primary w-[calc(100%_-_32px)] left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
};
