import React from "react";

export const Account = () => {
  return (
    <div>
      <br></br>

      <div class="row">
        <div class="col-sm-6">
          <h2>Hello Mr. Andrew Smith!</h2>

          <p>
            Last login: 05/11/2021, 20:18
            <br></br>
            Your password is valid until: 17/01/2022
          </p>
        </div>

        <div class="col-sm-6" style={{ textAlign: "right" }}>
          <button class="btn btn-primary">New Transaction</button>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="alert alert-danger" role="alert">
          <h5 id="alert-box">Important Note!</h5>
          <p>
            Please be aware of the recent phishing attacks that they have taken
            place in the last 10 days and have targeted our clients. Protect
            your account and never disclose any sensitive information.
          </p>
          <p>
            Remember that our bank will never send any emails to the provided
            address (<b>AndSmith@gmail.com</b>) asking for your password.
          </p>
        </div>
      </div>
      <br></br>

      <h2>Your account details</h2>
      <br />

      <div class="row">
        <div class="col-6 d-flex flex-column">
          <div class="row">
            <div class="col-6">
              <div class="card card-extra">
                <div class="card-body" style={{ backgroundColor: "#dbe7ed" }}>
                  <h5 class="card-title" style={{ fontWeight: "bold" }}>
                    Savings Account
                  </h5>
                  <h4>52,935£</h4>
                  <p>Available balance</p>
                  <br></br>
                  <h7>IBAN</h7>
                  <p class="card-text" style={{ fontWeight: "bold" }}>
                    GB29 NWBK 6016 1331 9268 19
                  </p>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="card card-extra">
                <div class="card-body" style={{ backgroundColor: "#d0e0e7" }}>
                  <h5 class="card-title" style={{ fontWeight: "bold" }}>
                    Salary Account
                  </h5>
                  <h4>7,380£</h4>
                  <p>Available balance</p>

                  <br></br>
                  <h7>IBAN</h7>
                  <p class="card-text" style={{ fontWeight: "bold" }}>
                    GB29 KFLP 7547 0945 0251 98
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="card card-extra">
              <div class="card-body" style={{ backgroundColor: "#d0e0e7" }}>
                <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  Debit MasterCard
                </h5>
                <br></br>
                <div class="row">
                  <div class="col-4">
                    <h7>Card Number</h7>
                    <p class="card-text" style={{ fontWeight: "bold" }}>
                      5027 4359 0921 0654
                    </p>
                  </div>
                  <div class="col-4" style={{ textAlign: "right" }}>
                    <h6>Valid Until:</h6>
                    <h6 style={{ fontWeight: "bold" }}>08/26</h6>
                  </div>
                  <div class="col-4" style={{ textAlign: "center" }}>
                    <h6>CVV:</h6>
                    <h6 style={{ fontWeight: "bold" }}>492</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 center">
          <div class="card card-extra">
            <div class="card-body" style={{ backgroundColor: "#d0e0e7" }}>
              <h5 class="card-title" style={{ fontWeight: "bold" }}>
                Summary of your spendings this month
              </h5>
              <h4>2.571£</h4>
              <p>Total</p>
              <br></br>
              <div class="row ">
                <div class="col-sm-6 ">
                  <p style={{ color: "yellowgreen" }}>Airplane fares</p>
                  <p style={{ color: "teal" }}>Supermarket</p>
                  <p style={{ color: "#b284be" }}>Online shopping</p>
                  <p style={{ color: "brown" }}>Furniture</p>
                  <p style={{ color: "grey" }}>Rest Expenses</p>
                </div>

                <div class="col-sm-6">
                  <p>365£</p>
                  <p>350£</p>
                  <p>153£</p>
                  <p>1384£</p>
                  <p>319£</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <br></br>
      <br></br>
    </div>
  );
};
