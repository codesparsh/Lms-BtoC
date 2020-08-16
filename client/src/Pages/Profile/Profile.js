import React from "react";
import ProfilePage from "./ProfilePage";
import Security from "./Security";
import Header from "../../Header/header";
import SideDrawer from "./SideDrawer";
import OtherInfo from "./OtherInfo";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  ChangePage = (pagenumber) => {
    console.log(111111);
    this.setState({ page: pagenumber });
  };

  render() {
    console.log(this.props);
    // const newUser = {
    //   username: this.props.username,
    //   email: this.props.email,
    //   password: this.props.password,
    // };
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="layout-boxed">
        <div
          class="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div class="mdk-drawer-layout__content page-content">
            <Header />

            {page === 1 && <ProfilePage history={this.props.history} />}
            {page === 2 && <OtherInfo />}
            {page === 3 && <Security />}

            {/* {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
              newUser={newUser}
              history={this.props.history}
            /> */}
            {/* )} */}
          </div>
          <SideDrawer ChangePage={this.ChangePage} />
        </div>
      </div>
    );
  }
}

export default Profile;
