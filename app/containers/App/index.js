/**
 *
 * App
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Routes from 'containers/__Routes';
import { ToastContainer, toast } from 'react-toastify';
import { makeSelectError, makeSelectSuccess } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { clearErrors, clearSuccess } from './actions';

import 'react-toastify/dist/ReactToastify.min.css';
import 'font-awesome/css/font-awesome.min.css';
import GlobalStyle from '../../global-styles';
import '../../../docs/scss/master.scss';

export function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const { error, success, intl } = props;

  const t = (msg, values) => intl.formatMessage(msg, values);
  if (error) {
    toast.error(t({ id: error }));
    props.clearErrors();
  }

  if (success) {
    toast.success(t({ id: success }));
    props.clearSuccess();
  }

  return (
    <Fragment>
      <Helmet
        titleTemplate={`%s - ${t({ ...messages.appTitle })}`}
        defaultTitle={t({ ...messages.appTitle })}
      />
      <Routes />
      <ToastContainer autoClose={2500} position="top-center" />
      <GlobalStyle />
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    clearErrors: () => dispatch(clearErrors()),
    clearSuccess: () => dispatch(clearSuccess()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(App));
