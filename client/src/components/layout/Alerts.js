import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return alertContext.alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.type} d-flex align-items-center m-3`}
      role='alert'
    >
      <i
        className={`bi ${
          alert.type === 'danger' ? 'bi-exclamation-triangle' : 'bi-info-circle'
        } mx-2`}
      ></i>{' '}
      {alert.message}
    </div>
  ));
};

export default Alerts;
