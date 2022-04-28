import "./App.css";
import { useState } from "react";
import TravelInformation from "../src/components/TravelInformation";
import TravellersInformation from "../src/components/TravellersInformation";
import PersonalDetails from "../src/components/PersonalDetails";
import TravelInformationStep2 from "./components/TravelInformationStep2";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    travelType: "",
    startDate: null,
    endDate: "",
    title: "",
    firstNameEn: "",
    secondNameEn: "",
    lastNameEn: "",
    civilId: "",
    gender: "",
    dob: "",
    nationality: "",
    passportFullName: "",
    passportNo: "",
    passportExpiry: "",
    email: "",
    phoneNo: "",
    emergencyMobileNo: "",
    faxNo: "",
    kuwaitOasisClubId: "",
  });
  // const [travelType, setTravelType] = useState("");
  const formNames = [
    "Travel Information",
    "Travel Information 2",
    "Travellers Information",
    "Personal Details",
  ];
  const handleSubmit = () => {
    //api call
    console.log(formData);
    console.log("Submitted");
  };
  const renderForm = () => {
    if (step === 0) {
      return (
        <TravelInformation formData={formData} setFormData={setFormData} />
      );
    } else if (step === 1) {
      return (
        <TravelInformationStep2 formData={formData} setFormData={setFormData} />
      );
    } else if (step === 2) {
      return (
        <TravellersInformation formData={formData} setFormData={setFormData} />
      );
    } else if (step === 3) {
      return (
        <PersonalDetails
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      );
    }
  };
  const changeForm = (value) => {
    console.log("Hi" + value);

    if (value === "0") {
      setStep(0);
    } else if (value === "2") {
      setStep(2);
    } else if (value === "3") {
      setStep(3);
    }
  };

  return (
    <div className="App">
      {/*Intial content of the form can be a header component of the form and the field will be rendered one at a time*/}
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mx-auto">
            <ul className="nav motor-tab travel-topup-tab nav-tabs">
              <li className="nav-item">
                <a className="nav-link show active">
                  <button
                    className="mydemo"
                    style={{ backgroundColor: "white" }}
                    value="0"
                    onClick={(e) => changeForm(e.target.value)}
                  ></button>
                  <span>1</span>
                  <div className="d-none d-md-block">Travel Information</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link show active">
                  <button
                    style={{ backgroundColor: "white" }}
                    value="2"
                    onClick={(e) => changeForm(e.target.value)}
                  ></button>
                  <span>2</span>
                  <div className="d-none d-md-block ">
                    Travellers Information
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link show active">
                  <button
                    style={{ backgroundColor: "white" }}
                    value="3"
                    onClick={(e) => changeForm(e.target.value)}
                  ></button>
                  <span>3</span>
                  <div className="d-none d-md-block">Personal Details</div>
                </a>
              </li>
            </ul>
            <div className="panel with-nav-tabs panel-default">
              <div className="panel-heading" />
              <div className="panel-body">
                <div className="tab-content">
                  <div
                    className="tab-pane text-left show active"
                    id="tab1default"
                  >
                    <ul
                      className="nav nav-travel mb-3 d-none"
                      id="travel-tab"
                      role="tablist"
                    ></ul>
                    {/* redering one form at a time*/}
                    <div className="body">{renderForm()}</div>{" "}
                  </div>
                </div>
              </div>
              {/*Below can be taken as a footer component of the form containing only Next button */}
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col-md-12 ">
                  <button
                    className="btn action-btn enterButton "
                    disabled={step === 0}
                    onClick={() => {
                      setStep((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="btn action-btn enterButton"
                    onClick={() => {
                      if (step === formNames.length - 1) {
                        handleSubmit();
                      } else {
                        setStep((step) => step + 1);
                      }
                    }}
                  >
                    {step === formNames.length - 1 ? "Submit" : "Next"}
                  </button>
                  <h3>{step}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
