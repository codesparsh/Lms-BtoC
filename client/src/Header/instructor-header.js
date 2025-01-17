import React from "react";
import { Link } from "react-router-dom";
import { FetchSettingAction } from "../Actions/AdminActions";
import { connect } from "react-redux";

class InstructorHeader extends React.Component {
  componentDidMount() {
    this.props.FetchSettingAction();
  }
  render() {
    if (this.props.Settings) {
      return (
        <div
          className={`navbar navbar-expand navbar-dark navbar-dark-dodger-${this.props.Settings[0].colorTheme} navbar-shadow`}
          id="default-navbar"
          style={{ backgroundColor: this.props.Settings[0].colorTheme }}
          data-primary
        >
          <button
            class="navbar-toggler w-auto mr-16pt d-block d-lg-none rounded-0"
            type="button"
            data-toggle="sidebar"
          >
            <span class="material-icons">short_text</span>
          </button>

          <Link to="boxed-index.html" class="navbar-brand mr-16pt d-lg-none">
            <span class="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
              <span class="avatar-title rounded bg-primary">
                <img
                  src="assets/images/illustration/student/128/white.svg"
                  alt="logo"
                  class="img-fluid"
                />
              </span>
            </span>

            <span class="d-none d-lg-block">Luma</span>
          </Link>

          <span class="d-none d-md-flex align-items-center mr-16pt">
            <span class="avatar avatar-sm mr-12pt">
              <span class="avatar-title rounded navbar-avatar">
                <i class="material-icons">trending_up</i>
              </span>
            </span>

            <small class="flex d-flex flex-column">
              <strong class="navbar-text-100">Earnings</strong>
              <span class="navbar-text-50">&dollar;12.3k</span>
            </small>
          </span>
          <span class="d-none d-md-flex align-items-center mr-16pt">
            <span class="avatar avatar-sm mr-12pt">
              <span class="avatar-title rounded navbar-avatar">
                <i class="material-icons">receipt</i>
              </span>
            </span>

            <small class="flex d-flex flex-column">
              <strong class="navbar-text-100">Sales</strong>
              <span class="navbar-text-50">264</span>
            </small>
          </span>

          <form
            class="search-form navbar-search d-none d-md-flex mr-16pt"
            action="boxed-index.html"
          >
            <button class="btn" type="submit">
              <i class="material-icons">search</i>
            </button>
            <input type="text" class="form-control" placeholder="Search ..." />
          </form>

          <div class="flex"></div>

          <div class="nav navbar-nav flex-nowrap d-flex mr-16pt">
            <div
              class="nav-item dropdown dropdown-notifications dropdown-xs-down-full"
              data-toggle="tooltip"
              data-title="Messages"
              data-placement="bottom"
              data-boundary="window"
            >
              <button
                class="nav-link btn-flush dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-caret="false"
              >
                <i class="material-icons icon-24pt">mail_outline</i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar class="position-relative">
                  <div class="dropdown-header">
                    <strong>Messages</strong>
                  </div>
                  <div class="list-group list-group-flush mb-0">
                    <Link
                      // to="javascript:void(0);"
                      class="list-group-item list-group-item-action unread"
                    >
                      <span class="d-flex align-items-center mb-1">
                        <small class="text-black-50">5 minutes ago</small>

                        <span class="ml-auto unread-indicator bg-accent"></span>
                      </span>
                      <span class="d-flex">
                        <span class="avatar avatar-xs mr-2">
                          <img
                            src="assets/images/people/110/woman-5.jpg"
                            alt="people"
                            class="avatar-img rounded-circle"
                          />
                        </span>
                        <span class="flex d-flex flex-column">
                          <strong class="text-black-100">Michelle</strong>
                          <span class="text-black-70">
                            Clients loved the new design.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      // to="javascript:void(0);"
                      class="list-group-item list-group-item-action"
                    >
                      <span class="d-flex align-items-center mb-1">
                        <small class="text-black-50">5 minutes ago</small>
                      </span>
                      <span class="d-flex">
                        <span class="avatar avatar-xs mr-2">
                          <img
                            src="assets/images/people/110/woman-5.jpg"
                            alt="people"
                            class="avatar-img rounded-circle"
                          />
                        </span>
                        <span class="flex d-flex flex-column">
                          <strong class="text-black-100">Michelle</strong>
                          <span class="text-black-70"> Superb job..</span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="nav-item ml-16pt dropdown dropdown-notifications dropdown-xs-down-full"
              data-toggle="tooltip"
              data-title="Notifications"
              data-placement="bottom"
              data-boundary="window"
            >
              <button
                class="nav-link btn-flush dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-caret="false"
              >
                <i class="material-icons">notifications_none</i>
                <span class="badge badge-notifications badge-accent">2</span>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar class="position-relative">
                  <div class="dropdown-header">
                    <strong>System notifications</strong>
                  </div>
                  <div class="list-group list-group-flush mb-0">
                    <Link
                      // to="javascript:void(0);"
                      class="list-group-item list-group-item-action unread"
                    >
                      <span class="d-flex align-items-center mb-1">
                        <small class="text-black-50">3 minutes ago</small>

                        <span class="ml-auto unread-indicator bg-accent"></span>
                      </span>
                      <span class="d-flex">
                        <span class="avatar avatar-xs mr-2">
                          <span class="avatar-title rounded-circle bg-light">
                            <i class="material-icons font-size-16pt text-accent">
                              account_circle
                            </i>
                          </span>
                        </span>
                        <span class="flex d-flex flex-column">
                          <span class="text-black-70">
                            Your profile information has not been synced
                            correctly.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      // to="javascript:void(0);"
                      class="list-group-item list-group-item-action"
                    >
                      <span class="d-flex align-items-center mb-1">
                        <small class="text-black-50">5 hours ago</small>
                      </span>
                      <span class="d-flex">
                        <span class="avatar avatar-xs mr-2">
                          <span class="avatar-title rounded-circle bg-light">
                            <i class="material-icons font-size-16pt text-primary">
                              group_add
                            </i>
                          </span>
                        </span>
                        <span class="flex d-flex flex-column">
                          <strong class="text-black-100">Adrian. D</strong>
                          <span class="text-black-70">
                            Wants to join your private group.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      // to="javascript:void(0);"
                      class="list-group-item list-group-item-action"
                    >
                      <span class="d-flex align-items-center mb-1">
                        <small class="text-black-50">1 day ago</small>
                      </span>
                      <span class="d-flex">
                        <span class="avatar avatar-xs mr-2">
                          <span class="avatar-title rounded-circle bg-light">
                            <i class="material-icons font-size-16pt text-warning">
                              storage
                            </i>
                          </span>
                        </span>
                        <span class="flex d-flex flex-column">
                          <span class="text-black-70">
                            Your deploy was successful.
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="nav-item dropdown">
              <Link
                to="#"
                class="nav-link d-flex align-items-center dropdown-toggle"
                data-toggle="dropdown"
                data-caret="false"
              >
                <span class="avatar avatar-sm mr-8pt2">
                  <span class="avatar-title rounded-circle bg-primary">
                    <i class="material-icons">account_box</i>
                  </span>
                </span>
              </Link>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">
                  <strong>Account</strong>
                </div>
                <Link class="dropdown-item" to="boxed-edit-account.html">
                  Edit Account
                </Link>
                <Link class="dropdown-item" to="boxed-billing.html">
                  Billing
                </Link>
                <Link class="dropdown-item" to="boxed-billing-history.html">
                  Payments
                </Link>
                <Link class="dropdown-item" to="boxed-login.html">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = (state) => ({
  Settings: state.settings.settings,
});
export default connect(mapStateToProps, { FetchSettingAction })(
  InstructorHeader
);
