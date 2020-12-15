import { Breadcrumb } from "react-bootstrap";
const BreadCrumb = () => {
  return (
    <Breadcrumb className="">
      <Breadcrumb.Item href="#">Anasayfa</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Takım Elbiseler
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Sonbahar - Kış Koleksiyonu</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
