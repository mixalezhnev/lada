import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const Notifications = () => (
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates={true}
    position="top-left"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar={true}
  />
);

export default Notifications;
