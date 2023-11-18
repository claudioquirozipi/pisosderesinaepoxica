import { SectionProps } from "./interfaces";

export function Section(props: SectionProps) {
  const { header, footer, contentA, contentB, contentC, bg } = props;
  return (
    <section className={`${bg ? "bg-blue-800" : "bg-white"} mt-10`}>
      <div
        className={`${
          bg ? "" : "rounded shadow"
        } mx-4 md:mx-auto md:w-3/4 p-6 grid grid-cols-6 gap-6`}
      >
        {header && <div className="col-start-1 col-end-7">{header}</div>}
        {contentA && (
          <div className="col-start-1 col-end-7 md:col-end-4 ">{contentA}</div>
        )}
        {contentB && (
          <div className="col-start-1 md:col-start-4 col-end-7 ">
            {contentB}
          </div>
        )}
        {contentC && <div className="col-start-1 col-end-7">{contentC}</div>}
        {footer && <div className="col-start-1 col-end-7">{footer}</div>}
      </div>
    </section>
  );
}
