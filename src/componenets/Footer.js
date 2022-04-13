import React from 'react';

export default function Footer() {

  let mystyle = {
      width: '100%',
      height: '100vh',
      position: 'absolute',
      bottom: '0% auto',
      color: 'white',
      backgroundColor:"blue",
      display:"flex",
      justifyContent:"center"

  }
  return (
      <>
      <div className="mt-3 footer text-center border-light border-top  " style={mystyle}>
        <b>Copyright &copy; Profile Verification</b>
      </div>
      
      </>
      
  );
}


  