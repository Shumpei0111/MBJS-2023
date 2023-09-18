export const MailAddress: React.FC = () => {
  return (
    <div className="pt-[242px] pb-[150px] flex justify-center">
      <div className="inline-flex relative w-auto">
        <a className="text-100">
          shumpei.o.7g
          <span className="before:content-['@']" />
          gmail
          <span className="before:content-['.']" />
          com
        </a>
        <p className="text-100 here">✋</p>
        <span className="absolute bottom-6 h-2 bg-primary w-full left-0" />
      </div>
    </div>
  );
};
