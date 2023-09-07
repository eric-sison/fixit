import { FunctionComponent } from "react";

type CardIconProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const CardIcon: FunctionComponent<CardIconProps> = ({ icon, title, description }) => {
  return (
    <>
      {icon}
      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-font-regular/80 mb-3">{title}</h3>
        <p className="text-font-muted font-medium text-lg leading-tight">{description}</p>
      </div>
    </>
  );
};
