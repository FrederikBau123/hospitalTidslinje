import React from 'react';
function LoginButton(props, isValid) {

  return (
    <div>
      <button disabled={isValid ? false : true} className="login" onClick={props.onClick}>
        Login
      </button>
    </div>
  );
}

export default LoginButton;
