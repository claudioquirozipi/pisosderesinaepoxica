import { SectionProps } from "./interfaces";

export function Section(props: SectionProps) {
  const { header, footer, contentA, contentB, contentC } = props;
  return (
    <section className="bg-white p-6 rounded shadow">
      {header && <div>{header}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contentA && <div>{contentA}</div>}
        {contentB && <div>{contentB}</div>}
      </div>
      {contentC && <div>{contentC}</div>}
      {footer && <div>{footer}</div>}
    </section>
  );
}
