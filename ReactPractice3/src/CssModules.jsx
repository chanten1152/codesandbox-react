import classes from "./CssModules.module.scss";

export const CssModules = () => {
  const { container, titleStyle, buttonStyle } = classes;
  return (
    <div className={container}>
      <p className={titleStyle}>- css modules -</p>
      <button className={buttonStyle}>FIGHT!</button>
    </div>
  );
};
