import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiHeart, BiUser } from "react-icons/bi";
import TopMenu from "./TopMenu";
import CartItem from "./CartItem";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";

export default function header() {
  return (
    <>
      <header className="bg-light header-sticky-sm py-3">
        <nav className="">
          <div className="px-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <TopMenu />
              <Link href="/">
                <a>
                  <img className="logo" src="/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <ul className="desktop-menu">
              <li className="item">
                <Link href="/arama">
                  <a>
                    <FiSearch />
                  </a>
                </Link>
              </li>
              <li className="item">
                <Link href="/hesabim/favorilerim">
                  <a>
                    <BiHeart />
                    <span className="sm-hide">Favorilerim</span>
                  </a>
                </Link>
              </li>
              <li className="dropdown item">
                <Link href="/hesabim/siparislerim">
                  <a className="drop-btn">
                    <BiUser />
                    <span className="sm-hide">Hesabım</span>
                  </a>
                </Link>

                <div className="dropdown-content">
                  <div className="cart-item-wrap">
                    <ProfileMenu />
                  </div>
                </div>
              </li>
              <li className="dropdown item">
                <Link href="/sepetim">
                  <a className="drop-btn">
                    <HiOutlineShoppingBag />
                    <span className="sm-hide">Sepetim</span>
                  </a>
                </Link>
                <div className="dropdown-content">
                  <div className="cart-item-wrap">
                    <div>
                      Sepetim<span>(3)</span>
                    </div>
                    <hr />
                    <CartItem />
                    <hr />
                    <CartItem />
                    <hr />
                    <CartItem />
                    <hr />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="bg-soft-gray sm-hide header-sticky-lg">
        <ul className="container secondary-menu">
          <li>
            <a href="#">Takım Elbise</a>
          </li>
          <li>
            <a href="#">Ceket</a>
          </li>
          <li>
            <a href="#">Kravat</a>
          </li>
          <li>
            <a href="#">Damatlık</a>
          </li>
          <li>
            <a href="#">Smokin</a>
          </li>
          <li>
            <a href="#">Gömlek</a>
          </li>
          <li>
            <a href="#">Koleksiyon</a>
          </li>
        </ul>
      </div>
    </>
  );
}
