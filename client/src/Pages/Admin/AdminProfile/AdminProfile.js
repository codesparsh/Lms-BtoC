import React from "react";
import AdminProfilePage from "./AdminProfilePage";
import AdminSecurity from "./AdminSecurity.js";

import AdminHeader from "../AdminHeader";
import AdminSide from "./AdminSide";

class AdminProfile extends React.Component {
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
            <AdminHeader />

            {page === 1 && <AdminProfilePage history={this.props.history} />}

            {page === 3 && <AdminSecurity />}

            {/* {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
              newUser={newUser}
              history={this.props.history}
            /> */}
            {/* )} */}
          </div>
          <AdminSide ChangePage={this.ChangePage} />
        </div>
      </div>
    );
  }
}

export default AdminProfile;
