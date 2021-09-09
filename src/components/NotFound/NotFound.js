import React from 'react';
import { withRouter, useHistory} from 'react-router-dom';
import './NotFound.css';


function NotFound () {
    const history = useHistory();

    return (
        <div className="auth notfound">
          <p className="auth__header notfound__header">404</p>
          <p className="auth__login-caption notfound__caption">Страница не найдена</p>
          <button onClick={history.goBack} className="auth__login-link notfound__link">Назад</button>
        </div>
  );
  

}

export default withRouter(NotFound);