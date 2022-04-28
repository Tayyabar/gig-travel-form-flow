import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TravelInformationStep2 = ({ formData, setFormData }) => {
  console.log(formData);
  const setEndDate = () => {
    const endDate = new Date();
    const numberOfDaysToAdd = 50;
    const result = endDate.setDate(endDate.getDate() + numberOfDaysToAdd);

    return result;
  };
  const calculateDuration = () => {
    const startDate = formData.startDate;
    const endDate = formData.endDate;
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");
    return diffDays;
  };
  useEffect(() => {
    calculateDuration();
  }, [formData.endDate]);

  return (
    <div>
      <div className="panel-body" style={{ margin: "20px" }}>
        <div className="tab-content">
          <div className="tab-pane text-left show active" id="tab1default">
            <ul
              className="nav nav-travel mb-3 d-none"
              id="travel-tab"
              role="tablist"
            ></ul>
            <div className="row mb-3">
              <div className="offset-md-3 col-md-6">
                <div className="tab-content" id="travel-tabContent">
                  <div
                    className="tab-pane show active"
                    id="travel-1"
                    role="tabpanel"
                    aria-labelledby="travel-1-tab"
                  >
                    <h4 className="text-center mb-5">
                      When will you be travelling?
                    </h4>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                    .lang-link {\n                      display: none;\n                    }\n                  ",
                      }}
                    />
                    <div className="form-row text-left">
                      <div className="col-sm-12 form-group">
                        <label>From Date</label>
                        <label className="required-style">*</label>
                        <div
                          id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt1498:0:j_idt1500:0:j_idt1502:0:inputDateBlock"
                          className="input-group date"
                        >
                          <DatePicker
                            selected={formData.startDate}
                            onChange={(date) => {
                              setFormData({
                                ...formData,
                                startDate: date,
                              });
                            }}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            maxDate={setEndDate()}
                            required={true}
                          />
                          <div className="">
                            <span
                              className="input-group-text Travel-Purchase-Flow-Step2-Travelling-dates_FromDate_dateClass"
                              id="basic-addon2"
                            >
                              <i className="fa fa-calendar" />
                            </span>
                          </div>
                          <span id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt1498:0:j_idt1500:0:j_idt1502:0:inputDateMsg" />
                        </div>
                      </div>
                    </div>
                    <div className="form-row text-left">
                      <div className="col-sm-12 form-group">
                        <label>To Date</label>
                        <label className="required-style">*</label>
                        <div
                          id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt1498:1:j_idt1500:0:j_idt1502:0:inputDateBlock"
                          className="input-group date"
                        >
                          <DatePicker
                            selected={formData.endDate}
                            onChange={(date) => {
                              setFormData({
                                ...formData,
                                endDate: date,
                              });
                            }}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            maxDate={setEndDate()}
                            required={true}
                          />
                          <div className="">
                            <span
                              className="input-group-text Travel-Purchase-Flow-Step2-Travelling-dates_ToDate_dateClass"
                              id="basic-addon2"
                            >
                              <i className="fa fa-calendar" />
                            </span>
                          </div>
                          <span id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt1498:1:j_idt1500:0:j_idt1502:0:inputDateMsg" />
                        </div>
                      </div>
                    </div>
                    <div className="form-row text-left">
                      <div className="col-sm-12 form-group">
                        <label>Duration (days)</label>
                        <div
                          id="_travelpurchaseV2_WAR_gigkwosportlets_:travelPurchaseForm:j_idt1498:2:j_idt1500:0:j_idt1502:0:inputTextBlock"
                          className="input-group"
                        >
                          <input
                            id="duration"
                            type="text"
                            name="duration"
                            className="form-control Travel-Purchase-Flow-Step2-Travelling-dates_Duration"
                            maxLength={50}
                            placeholder="Duration"
                            style={{ pointerEvents: "none" }}
                            readOnly="readonly"
                            value={calculateDuration()}
                          />
                        </div>
                      </div>
                    </div>
                    <div></div>
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

export default TravelInformationStep2;
