import Layout from "./layout";

import ProfileMenu from "./ProfileMenu";

const ProfileLayout = ({ children }) => {
  return (
    <Layout>
      <div className="container">
        <div className="profile-grid">
          <div>
            <h4 className="mb-3 sm-hide">Hesabım</h4>
            <ProfileMenu>
              <ProfileMenu.Item>sad</ProfileMenu.Item>
            </ProfileMenu>
          </div>
            {children}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
