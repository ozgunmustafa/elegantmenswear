import { FiBox } from "react-icons/fi";
import { BiCurrentLocation, BiHeart } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";


const ProfileMenu = ({ classnames }) => {

  const router = useRouter();

  return (
    <ul className={`${classnames ? classnames : ""} profile-menu`}>
      <li className={router.pathname === "/hesabim/siparislerim" ? "active" : ""}>
        <Link href="/hesabim/siparislerim">
          <a>
            <FiBox />
            Siparişlerim
          </a>
        </Link>
      </li>
      <li className={router.pathname === "/hesabim/bilgilerim" ? "active" : ""}>
        <Link href="/hesabim/bilgilerim">
          <a>
            <HiUser />
            Üyelik Bilgilerim
          </a>
        </Link>
      </li>
      <li className={router.pathname === "/hesabim/adreslerim" ? "active" : ""}>
        <Link href="/hesabim/adreslerim">
          <a>
            <BiCurrentLocation />
            Adreslerim
          </a>
        </Link>
      </li>
      <li className={router.pathname === "/hesabim/favorilerim" ? "active" : ""}>
        <Link href="/hesabim/favorilerim">
          <a>
            <BiHeart />
            Favorilerim
          </a>
        </Link>
      </li>
      <li>
        <a>
          <AiOutlineQuestion />
          Yardım
        </a>
      </li>
    </ul>
  );
};

export default ProfileMenu;
