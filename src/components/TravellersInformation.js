import React from "react";

const TravellersInformation = () => {
  return (
    <>
      <div className="panel with-nav-tabs panel-default">
        <div className="panel-heading" />
        <div className="panel-body">
          <div className="tab-content">
            <div className="tab-pane text-left show active" id="tab1default">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .descSpan {\n                font-size: 14px;\n              }\n            ",
                }}
              />
              <div className="row">
                <div className="col-md-12">
                  <div className="tab-content" id="travel-tabContent">
                    <div
                      className="tab-pane show active travelClass"
                      id="travel-1"
                      role="tabpanel"
                      aria-labelledby="travel-1-tab"
                    >
                      <div
                        className="tab-pane active show"
                        id="travel-3"
                        role="tabpanel"
                        aria-labelledby="travel-3-tab"
                      >
                        <h4 className="text-center mt-3">
                          Please select the plan you would like to purchase
                        </h4>
                        <h6 className="text-center mt-3">
                          <a
                            href="https://www.gig.com.kw/documents/34336/1917a88c-c11d-cc34-081b-dacdfd58ec10"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textDecoration: "underline",
                              color: "#a91357 !important",
                            }}
                          >
                            Click to View Policy Wording
                          </a>
                        </h6>
                        <table
                          className="table table-hover insurance-table d-none d-lg-block"
                          style={{ paddingLeft: "200px" }}
                        >
                          <thead>
                            <tr>
                              <td />
                              <td>
                                <h3>Silver Plan</h3>
                              </td>
                              <td>
                                <h3>Gold Plan</h3>
                              </td>
                              <td>
                                <h3>Platinum Plan</h3>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <label>Medical Expenses due to COVID-19</label>
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>Medical and Related Benefits</label>
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>Travel Inconvenience Benefits</label>
                              </td>
                              <td />
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label>Personal Accident Benefits</label>
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                              <td>
                                <i className="fa fa-check" />
                              </td>
                            </tr>
                            <tr>
                              <td>Total Price</td>
                              <td>
                                <div className="price-txt">
                                  <span>4.000 </span> <br />
                                  KWD
                                </div>
                                <label
                                  className="checkbox-item view-modelType"
                                  style={{ pointerEvents: "bounding-box" }}
                                >
                                  <input type="radio" name="model-name" />
                                  <span>
                                    Select
                                    <i className="fa fa-check-circle" />
                                  </span>
                                </label>
                              </td>
                              <td>
                                <div className="price-txt">
                                  <span>7.000 </span> <br />
                                  KWD
                                </div>
                                <label
                                  className="checkbox-item view-modelType"
                                  style={{ pointerEvents: "bounding-box" }}
                                >
                                  <input type="radio" name="model-name" />
                                  <span>
                                    Select
                                    <i className="fa fa-check-circle" />
                                  </span>
                                </label>
                              </td>
                              <td>
                                <div className="price-txt">
                                  <span>12.000 </span> <br />
                                  KWD
                                </div>
                                <label
                                  className="checkbox-item view-modelType"
                                  style={{ pointerEvents: "bounding-box" }}
                                >
                                  <input type="radio" name="model-name" />
                                  <span>
                                    Select
                                    <i className="fa fa-check-circle" />
                                  </span>
                                </label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <ul className="model-check p-1 mt-5 text-center row d-block d-lg-none custom-contant">
                          <li className="col-md-12">
                            <label className="checkbox-item view-modelType">
                              <input type="radio" name="modelname" />
                              <span>
                                <span
                                  style={{
                                    color: "#b90058 !important",
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                  }}
                                  className="fa float-left fa-chevron-circle-down"
                                />
                                Silver Plan <i className="fa fa-check-circle" />
                              </span>
                            </label>
                            <div className="hidden-content">
                              <table className="table table-hover insurance-table tpl">
                                <tbody>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical Expenses due to COVID-19
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical and Related Benefits
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Travel Inconvenience Benefits
                                      </label>
                                    </td>
                                    <td />
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Personal Accident Benefits</label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Price</td>
                                    <td>
                                      <div className="price-txt">
                                        <span>4.000 </span> <br />
                                        KWD
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>
                          <li className="col-md-12">
                            <label className="checkbox-item view-modelType">
                              <input type="radio" name="modelname" />
                              <span>
                                <span
                                  style={{
                                    color: "#b90058 !important",
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                  }}
                                  className="fa float-left fa-chevron-circle-down"
                                />
                                Gold Plan <i className="fa fa-check-circle" />
                              </span>
                            </label>
                            <div className="hidden-content">
                              <table className="table table-hover insurance-table tpl">
                                <tbody>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical Expenses due to COVID-19
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical and Related Benefits
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Travel Inconvenience Benefits
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Personal Accident Benefits</label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Price</td>
                                    <td>
                                      <div className="price-txt">
                                        <span>7.000 </span> <br />
                                        KWD
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>
                          <li className="col-md-12">
                            <label className="checkbox-item view-modelType">
                              <input type="radio" name="modelname" />
                              <span>
                                <span
                                  style={{
                                    color: "#b90058 !important",
                                    fontSize: 18,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                  }}
                                  className="fa float-left fa-chevron-circle-down"
                                />
                                Platinum Plan{" "}
                                <i className="fa fa-check-circle" />
                              </span>
                            </label>
                            <div className="hidden-content">
                              <table className="table table-hover insurance-table tpl">
                                <tbody>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical Expenses due to COVID-19
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Medical and Related Benefits
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>
                                        Travel Inconvenience Benefits
                                      </label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <label>Personal Accident Benefits</label>
                                    </td>
                                    <td>
                                      <i className="fa fa-check" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Total Price</td>
                                    <td>
                                      <div className="price-txt">
                                        <span>12.000 </span> <br />
                                        KWD
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>
                        </ul>
                        <br />
                        <input
                          id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2680"
                          type="submit"
                          name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2680"
                          defaultValue=""
                          style={{ display: "none" }}
                          className="planCalculation"
                        />
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                        .lang-link {\n                          display: none;\n                        }\n                      ",
                          }}
                        />
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '\n                        .checkbox input[type="checkbox"] {\n                          margin-top: -10px !important;\n                          z-index: 999999;\n                        }\n                      ',
                          }}
                        />
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                        .premium-calculator {\n                          position: relative;\n                          display: block;\n                          width: 100%;\n                          max-width: 100%;\n                          margin: 20px auto;\n                          padding: 15px;\n                          border: 1px solid #ddd;\n                          border-radius: 20px;\n                          box-shadow: 0 0 5px #ddd;\n                          color: #222158;\n                        }\n                      ",
                          }}
                        />
                        <div id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:addBenSingle">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="tab-content"
                                id="travel-tabContent"
                              >
                                <div
                                  className="premium-calculator text-center"
                                  style={{ fontFamily: "unset !important" }}
                                >
                                  <div
                                    className="tab-pane show active travelClass"
                                    id="travel-1"
                                    role="tabpanel"
                                    aria-labelledby="travel-1-tab"
                                  >
                                    <div
                                      className="table table-hover insurance-table tpl"
                                      style={{
                                        paddingTop: "30px !important",
                                        width: "90%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                      }}
                                    >
                                      <div className="form-row text-left">
                                        <div className="col-sm-11 form-group">
                                          <h4>
                                            <style
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  '\n                                            .checkbox input[type="checkbox"] {\n                                              margin-top: -10px !important;\n                                              z-index: 999999;\n                                            }\n                                          ',
                                              }}
                                            />
                                            <style
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  "\n                                            .lang-link {\n                                              display: none;\n                                            }\n                                          ",
                                              }}
                                            />
                                            <div className="form-row text-left">
                                              <div className="col-sm-1 form-group">
                                                <style
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      '\n                                                .checkbox\n                                                  input[type="checkbox"] {\n                                                  margin-top: -10px !important;\n                                                  z-index: 999999;\n                                                }\n                                              ',
                                                  }}
                                                />
                                                <div className="row">
                                                  <div className="col-sm-9" />
                                                  <div className="col-sm-3">
                                                    <div className="checkbox">
                                                      <input
                                                        id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2685:0:j_idt2687:0:j_idt2689:0:checkbox_1"
                                                        type="checkbox"
                                                        name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2685:0:j_idt2687:0:j_idt2689:0:checkbox_1"
                                                        className="addon Travel-Purchase-Flow-Step2-Travel-AddBenefit_Hazardoussports"
                                                      />
                                                      <label htmlFor="checkbox_1" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-11 form-group">
                                                <h4>
                                                  <p>
                                                    Would you like to cover any
                                                    additional benefit of
                                                    hazardous sports / winter
                                                    sports
                                                  </p>
                                                </h4>
                                              </div>
                                            </div>
                                            <div className="form-row text-left">
                                              <div className="col-sm-1 form-group">
                                                <style
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      '\n                                                .checkbox\n                                                  input[type="checkbox"] {\n                                                  margin-top: -10px !important;\n                                                  z-index: 999999;\n                                                }\n                                              ',
                                                  }}
                                                />
                                                <div className="row">
                                                  <div className="col-sm-9" />
                                                  <div className="col-sm-3">
                                                    <div className="checkbox">
                                                      <input
                                                        id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2685:1:j_idt2687:0:j_idt2689:0:checkbox_1"
                                                        type="checkbox"
                                                        name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt2685:1:j_idt2687:0:j_idt2689:0:checkbox_1"
                                                        className="addon Travel-Purchase-Flow-Step2-Travel-AddBenefit_TerrorismOption"
                                                      />
                                                      <label htmlFor="checkbox_1" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-11 form-group">
                                                <h4>
                                                  <p>
                                                    Terrorism coverage extension
                                                  </p>
                                                </h4>
                                              </div>
                                            </div>
                                          </h4>
                                        </div>
                                        <div className="col-sm-11 form-group">
                                          <div className="input-group col-md-8 col-xl-12">
                                            <div className="col-12 price-txt mb-2" />
                                            <div className="col-12 clearfix">
                                              <div className="float-left">
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  Premium Amount
                                                </span>
                                              </div>
                                              <div className="float-right">
                                                <font color="#121453">
                                                  <label className="font-bold">
                                                    0.000{" "}
                                                  </label>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    KWD
                                                  </span>
                                                </font>
                                              </div>
                                            </div>
                                            <div className="col-12 clearfix">
                                              <div className="float-left">
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  Add-ons Amount
                                                </span>
                                              </div>
                                              <div className="float-right">
                                                <font color="#121453">
                                                  <label className="font-bold">
                                                    0.000{" "}
                                                  </label>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    KWD
                                                  </span>
                                                </font>
                                              </div>
                                            </div>
                                            <div className="col-12 clearfix">
                                              <div className="float-left">
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  Terrorism Extension Fee
                                                </span>
                                              </div>
                                              <div className="float-right">
                                                <font color="#121453">
                                                  <label className="font-bold">
                                                    0.000{" "}
                                                  </label>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    KWD
                                                  </span>
                                                </font>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="float-left">
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  Supervision Fee
                                                </span>
                                              </div>
                                              <div className="float-right">
                                                <font color="#121453">
                                                  <label className="font-bold">
                                                    <span className="addOnTotal">
                                                      1.000
                                                    </span>{" "}
                                                  </label>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    KWD
                                                  </span>
                                                </font>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="float-left">
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  Policy Fee
                                                </span>
                                              </div>
                                              <div className="float-right">
                                                <font color="#121453">
                                                  <label className="font-bold">
                                                    <span className="addOnTotal">
                                                      1.000
                                                    </span>{" "}
                                                  </label>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    KWD
                                                  </span>
                                                </font>
                                              </div>
                                            </div>
                                            <div className="col-12 clearfix">
                                              <h4 className="float-left h4">
                                                <b>
                                                  <span
                                                    style={{
                                                      fontWeight: "bold",
                                                    }}
                                                  >
                                                    Total Price
                                                  </span>
                                                </b>
                                              </h4>
                                              <h4 className="float-right h2 total">
                                                <font color="#a91357">
                                                  <b>
                                                    <span className="font-bold">
                                                      0.000
                                                    </span>
                                                    <span
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      KWD
                                                    </span>
                                                  </b>
                                                </font>
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravellersInformation;
