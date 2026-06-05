import React, { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        videoid?: string;
        videotitle?: string;
      };
    }
  }
}

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: unknown;
}) => {
  useEffect(() => {
    import("@justinribeiro/lite-youtube");
  }, []);

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border bg-black/5 shadow-sm dark:border-darkmode-border">
      <lite-youtube
        className="block aspect-video w-full"
        videoid={id}
        videotitle={title}
        {...rest}
      />
    </div>
  );
};

export default Youtube;
