import React, { useEffect } from "react";
import { useState } from "react";
const TravelInformation = ({ formData, setFormData }) => {
  console.log(formData);
  useEffect(() => {
    setvalue();
  }, [formData.travelType]);
  const setvalue = () => {
    const preselectedValue = document.querySelector(
      `input[type="radio"][name=travelType]:checked`
    ).value;
    setFormData({ ...formData, travelType: preselectedValue });
    console.log("preselectedValue:: " + preselectedValue);
    return preselectedValue;
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="tab-content" id="travel-tabContent">
            <div
              className="tab-pane show active travelClass"
              id="travel-1"
              role="tabpanel"
              aria-labelledby="travel-1-tab"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: "\n.lang-link {\ndisplay: none;\n}\n",
                }}
              />
              <div className="form-row text-left">
                <div className="col-sm-12 form-group">
                  <div
                    className="tab-pane"
                    id="travel-2"
                    role="tabpanel"
                    aria-labelledby="travel-2-tab"
                  >
                    <ul className="model-check p-5 text-center">
                      <h4 className="text-center mb-5">
                        With whom are you travelling ?
                      </h4>
                      <div className="row radioButtonDiv">
                        <div className="col-sm-6">
                          <li>
                            <label className="checkbox-item view-modelType">
                              {" "}
                              <input
                                className="radioButton"
                                type="radio"
                                name="travelType"
                                value="Alone"
                                defaultChecked="checked"
                                onClick={(event) =>
                                  setFormData({
                                    ...formData,
                                    travelType: event.target.value,
                                  })
                                }
                              />
                              <span>
                                Alone
                                <i className="fa fa-check-circle" />
                              </span>
                            </label>
                          </li>
                        </div>
                        <div className="col-sm-6">
                          <li>
                            <label className="checkbox-item view-modelType">
                              <input
                                className="radioButton"
                                type="radio"
                                name="travelType"
                                value="Family"
                                onClick={(event) =>
                                  setFormData({
                                    ...formData,
                                    travelType: event.target.value,
                                  })
                                }
                              />
                              <span>
                                Family
                                <i className="fa fa-check-circle" />
                              </span>
                            </label>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInformation;
