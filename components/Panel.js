import React from "react";

const Panel = ({ children,classnames }) => {
  const header = React.Children.map(children, (child) =>
    child.type.displayName === "Header" ? child : null
  );
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  const footer = React.Children.map(children, (child) =>
    child.type.displayName === "Footer" ? child : null
  );
  return (
    <div className={`panel  ${classnames?classnames:""}`}>
      {header}
      <div className="panel-body">{body}</div>
    {footer}
    </div>
  );
};

const Header = ({ children }) => <div className="panel-header">{children}</div>;
Header.displayName = "Header";
Panel.Header = Header;

const Body = ({ children }) => children;
Body.displayName = "Body";
Panel.Body = Body;

const Footer = ({ children,classnames }) =>   <div className={`${classnames} panel-footer`}>{children}</div>;
Footer.displayName = "Footer";
Panel.Footer = Footer;

export default Panel;
