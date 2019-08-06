import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
              <div className="col-md-3 cl-sm-6">
                  <h4>Head</h4>
                  <ul className="list-unstyled">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                  </ul>
              </div>
              <div className="col-md-3 cl-sm-6">
                  <h4>Head</h4>
                  <ul className="list-unstyled">
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                  </ul>
              </div>
            <div className="footer-botom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear} Beach Shelter - All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
