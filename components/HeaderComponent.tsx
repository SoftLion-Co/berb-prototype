import classNames from "classnames";
import s from "./HeaderComponent.module.scss";

const HeaderComponent = () => {
  return (
    <header className={classNames(s.header, s.container)}>
      <h1>Header</h1>
    </header>
  );
};

export default HeaderComponent;
