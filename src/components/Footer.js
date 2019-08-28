import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
      <div className="footer">
        <div className="container">  
            <table>
              <tr>
                <th>Follow us:</th>
                <th>Contact us: <a href="mailto:someone@example.com">Contact us by email</a></th>
                <th></th>
              </tr>
              <tr>
                <td>Twitter</td>
              </tr>
              <tr>
                <div className="column has-text-center">
                  <a className="icon" href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                </div>
                <div className="column has-text-center">
                  <a className="icon" href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                </div>
              </tr>
              </table>
            </div>
            <p>All right are reserved @Shelter.</p>
          </div>
    </div>
    </footer>
  );
}