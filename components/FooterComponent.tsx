import classNames from "classnames";
import s from "./FooterComponent.module.scss";

const FooterComponent = () => {
  return (
    <footer className={classNames(s.footer, s.container)}>
      <h2>Footer</h2>
    </footer>
  );
};

export default FooterComponent;
