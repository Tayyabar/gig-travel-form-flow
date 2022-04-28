import React, { useEffect } from "react";
import CountrySelector from "./CountrySelector";
const PersonalDetails = ({ formData, setFormData, handleSubmit }) => {
  return (
    <>
      <div className="panel with-nav-tabs panel-default">
        <div className="panel-heading" />
        <div className="panel-body">
          <div className="tab-content">
            <div className="tab-pane text-left show active" id="tab1default">
              <div className="tab-pane text-left active show" id="tab2default">
                <div className="card" id="customer-information-1">
                  <div className="card-header">
                    <i className="fas fa-user mr-2" />
                    Personal Details
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                    .lang-link {\n                      display: none;\n                    }\n                  ",
                        }}
                      />
                      <div className="form-row text-left">
                        <div className="col-sm-3 form-group">
                          <label>Title</label>
                          <label style={{}} className="required-style">
                            *
                          </label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:0:j_idt3624:0:selectOneMenuBlock"
                            className="input-group"
                          >
                            <select
                              id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:0:j_idt3624:0:selectOneMenu"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:0:j_idt3624:0:selectOneMenu"
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_Title select2-hidden-accessible"
                              size={1}
                              data-select2-id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:0:j_idt3624:0:selectOneMenu"
                              tabIndex={-1}
                              aria-hidden="true"
                              style={{ width: "80px" }}
                            >
                              <option value="" data-select2-id={9}>
                                --Choose an Option--
                              </option>
                              <option value="title.miss">Miss</option>
                              <option value="title.mr">Mr.</option>
                              <option value="title.mrs">Mrs.</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id={8}
                              style={{ width: 212 }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-_travelpurchaseV2_WAR_gigkwosportlets_travelPurchaseFormj_idt36200j_idt36220j_idt36240selectOneMenu-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-_travelpurchaseV2_WAR_gigkwosportlets_travelPurchaseFormj_idt36200j_idt36220j_idt36240selectOneMenu-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="--Choose an Option--"
                                  ></span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="portlet-msg-error invalid-feedback Travel-Purchase-Flow-Step3-Personalinfo_Title-msg">
                              Please select the title
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-3 form-group">
                          <div className="">
                            First Name (English)
                            <label className="required-style">*</label>
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:1:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="firstNameEn"
                                    type="text"
                                    name="firstNameEn"
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_text"
                                    maxLength={25}
                                    placeholder=""
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        firstNameEn: e.target.value,
                                      })
                                    }
                                    value={formData.firstNameEn}
                                    required={true}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 form-group">
                          <div className="">
                            Second Name (English)
                            <label className="required-style">*</label>
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:2:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="secondNameEn"
                                    type="text"
                                    name="secondNameEn"
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_text"
                                    maxLength={25}
                                    placeholder=""
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        secondNameEn: e.target.value,
                                      })
                                    }
                                    value={formData.secondNameEn}
                                  />
                                  <span className="portlet-msg-error invalid-feedback">
                                    Please enter the second name (english)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 form-group">
                          <div className="">
                            Last Name (English)
                            <label className="required-style">*</label>
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:0:j_idt3622:3:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="lastNameEn"
                                    type="text"
                                    name="lastNameEn"
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_text"
                                    maxLength={25}
                                    placeholder=""
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        lastNameEn: e.target.value,
                                      })
                                    }
                                    value={formData.lastNameEn}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row text-left">
                        <div className="col-sm-3 form-group">
                          <label>Civil ID</label>
                          <label className="required-style">*</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:0:j_idt3624:0:inputTextBlock"
                            className="input-group"
                          >
                            <input
                              id="civilId"
                              type="text"
                              name="civilId"
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_text"
                              maxLength={12}
                              placeholder=""
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  civilId: e.target.value,
                                })
                              }
                              value={formData.civilId}
                            />
                          </div>
                        </div>
                        {/*apply regex to enter only number*/}
                        <div className="col-sm-3 form-group">
                          <label>Gender</label>
                          <label style={{}} className="required-style">
                            *
                          </label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:1:j_idt3624:0:selectOneMenuBlock"
                            className="input-group"
                          >
                            <input
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:1:j_idt3624:0:j_idt3698"
                              defaultValue="Male"
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_Gender"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                        <div className="col-sm-3 form-group">
                          <label>Date of Birth</label>
                          <label className="required-style">*</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:2:j_idt3624:0:inputDateBlock"
                            className="input-group date"
                          >
                            <input
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:2:j_idt3624:0:j_idt3758"
                              defaultValue="21/12/1997"
                              className="form-control"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                        <div className="col-sm-3 form-group">
                          <label>Nationality</label>
                          <label style={{}} className="required-style">
                            *
                          </label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:1:j_idt3622:3:j_idt3624:0:selectOneMenuBlock"
                            className="input-group"
                          >
                            <CountrySelector
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_Nationality select2-hidden-accessible"
                              style={{ width: "80px" }}
                            />

                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id={258}
                              style={{ width: 212 }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-_travelpurchaseV2_WAR_gigkwosportlets_travelPurchaseFormj_idt36201j_idt36223j_idt36240selectOneMenu-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-_travelpurchaseV2_WAR_gigkwosportlets_travelPurchaseFormj_idt36201j_idt36223j_idt36240selectOneMenu-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Pakistan"
                                  ></span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-row text-left">
                        <div className="col-sm-12 form-group">
                          <div className="">
                            Passport Full Name
                            <label className="required-style">*</label>
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:2:j_idt3622:0:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:2:j_idt3622:0:j_idt3624:0:customtextbox"
                                    type="text"
                                    name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:2:j_idt3622:0:j_idt3624:0:customtextbox"
                                    defaultValue=""
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_PassportName"
                                    maxLength={74}
                                    placeholder=""
                                  />
                                  <span className="portlet-msg-error invalid-feedback">
                                    Please Enter Full Name
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-row text-left">
                        <div className="col-sm-6 form-group">
                          <div className="">
                            Passport Number
                            <label className="required-style">*</label>
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:0:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:0:j_idt3624:0:customtextbox"
                                    type="text"
                                    name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:0:j_idt3624:0:customtextbox"
                                    defaultValue=""
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_PassportNumber"
                                    maxLength={12}
                                    placeholder=""
                                  />
                                  <span className="portlet-msg-error invalid-feedback">
                                    Please Enter Passport Number
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 form-group">
                          <label>Passport Expiry</label>
                          <label className="required-style">*</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:1:j_idt3624:0:inputDateBlock"
                            className="input-group date"
                          >
                            <input
                              id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:1:j_idt3624:0:inputdate"
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:1:j_idt3624:0:inputdate"
                              defaultValue=""
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_passportExpiry"
                            />
                            <div className="">
                              <span
                                className="input-group-text Travel-Purchase-Flow-Step3-Personalinfo_passportExpiry_dateClass"
                                id="basic-addon2"
                              >
                                <i className="fa fa-calendar" />
                              </span>
                            </div>
                            <span
                              id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:3:j_idt3622:1:j_idt3624:0:inputDateMsg"
                              className="portlet-msg-error invalid-feedback Travel-Purchase-Flow-Step3-Personalinfo_passportExpiry-msg"
                            >
                              Please select the passport expiry
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-row text-left">
                        <div className="col-sm-6 form-group">
                          <label>Email</label>
                          <label className="required-style">*</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:4:j_idt3622:0:j_idt3624:0:inputTextBlock"
                            className="input-group"
                          >
                            <input
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:4:j_idt3622:0:j_idt3624:0:j_idt3637"
                              defaultValue="tayyab_110055@live.com"
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_Email"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 form-group">
                          <label>Phone Number</label>
                          <label className="required-style">*</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:4:j_idt3622:1:j_idt3624:0:numericBlock"
                            className="input-group"
                          >
                            <input
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:4:j_idt3622:1:j_idt3624:0:j_idt3682"
                              defaultValue={98575322}
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_PhoneNumber"
                              readOnly="readonly"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row text-left">
                        <div className="col-sm-4 form-group">
                          <div className="">
                            Emergency Mobile Number
                            <div>
                              <div>
                                <div
                                  id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:0:j_idt3624:0:customtextboxBlock"
                                  className="input-group"
                                >
                                  <input
                                    id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:0:j_idt3624:0:customtextbox"
                                    type="text"
                                    name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:0:j_idt3624:0:customtextbox"
                                    defaultValue=""
                                    className="form-control Travel-Purchase-Flow-Step3-Personalinfo_EmergencyMobileNumber"
                                    maxLength={20}
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 form-group">
                          <label>Fax Number</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:1:j_idt3624:0:numericBlock"
                            className="input-group"
                          >
                            <input
                              id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:1:j_idt3624:0:numeric"
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:1:j_idt3624:0:numeric"
                              defaultValue=""
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_FaxNumber"
                              maxLength={25}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4 form-group">
                          <label>Kuwait Airways Oasis Club ID</label>
                          <div
                            id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:2:j_idt3624:0:inputTextBlock"
                            className="input-group"
                          >
                            <input
                              id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:2:j_idt3624:0:inputtext"
                              type="text"
                              name="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt3620:5:j_idt3622:2:j_idt3624:0:inputtext"
                              defaultValue=""
                              className="form-control Travel-Purchase-Flow-Step3-Personalinfo_KuwaitAirwaysOasisClubID"
                              maxLength={25}
                              placeholder="Oasis Club ID"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
