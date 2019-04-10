import React from "react";
import { connect } from "react-redux";

const DashboardPage = ({ auth }) => {
  return (
    <div>
      This is the dashboard page for the user with the uid of {auth.uid}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(DashboardPage);
