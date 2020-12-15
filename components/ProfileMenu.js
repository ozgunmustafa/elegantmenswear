import { FiBox } from "react-icons/fi";
import { BiCurrentLocation, BiHeart } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import Link from "next/link";

const ProfileMenu = ({ classnames }) => {
  return (
    <ul className={`${classnames ? classnames : ""} profile-menu`}>
      <li>
        <Link href="/hesabim/siparislerim">
          <a>
            <FiBox />
            Siparişlerim
          </a>
        </Link>
      </li>
      <li>
        <Link href="/hesabim/bilgilerim">
          <a>
            <HiUser />
            Üyelik Bilgilerim
          </a>
        </Link>
      </li>
      <li>
        <Link href="/hesabim/adreslerim">
          <a>
            <BiCurrentLocation />
            Adreslerim
          </a>
        </Link>
      </li>
      <li>
        <Link href="/hesabim/favorilerim">
          <a>
            <BiHeart />
            Favorilerim
          </a>
        </Link>
      </li>
      <li>
        <a href="#">
          <AiOutlineQuestion />
          Yardım
        </a>
      </li>
    </ul>
  );
};

export default ProfileMenu;
