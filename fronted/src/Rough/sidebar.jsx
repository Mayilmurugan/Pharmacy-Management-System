import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "../../index.css";
import  "../Rough/index.css"
//import QuickAdd from "./quickadd";
import Gotofaq from "./gotofaq";

class Sidebar extends Component {
  render() {
    return (
      <div className="w-1/5 shadow mt-12 fixed h-full overflow-y-auto text-base lg:text-sm pb-4 sticky?lg:h-(screen-18) lg:block hidden">
        <div className="inline-flex flex-col space-y-2 items-start justify-between flex-1 h-full px-6 pt-6 pb-12">
          <div>
            {/* navlinks */}
            {/* dashboard */}
            <Link to="/drug1" className="w-full">
              <div
                className={
                  "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                  (this.props.place === "1" ? "bg-purple-100" : "")
                }
              >
                <div className="flex space-x-8 items-center justify-start">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "1"
                        ? "text-indigo-600 "
                        : "text-gray-400")
                    }
                  >
                    Dashboard
                  </p>
                </div>
              </div>
            </Link>
            {/* Products */}
            <Link to="/billing" className="w-full">
              <div
                className={
                  "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                  (this.props.place === "2" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
  <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"/>
</svg>
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "2"
                        ? "text-indigo-600 "
                        : "text-gray-400")
                    }
                  >
                    Billing
                  </p>
                </div>
              </div>
            </Link>
            {/* billing */}
            <Link to="/vendor" className="w-full">
              <div
                className={
                  "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                  (this.props.place === "3" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16">
  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
  <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118z"/>
</svg>
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "3"
                        ? "text-indigo-600 "
                        : "text-gray-400")
                    }
                  >
                    Vendor
                  </p>
                </div>
              </div>
            </Link>
            {/* vendors */}
            <Link to="/prescription" className="w-full">
              <div
                className={
                  "inline-flex items-center justify-start w-full h-12 pl-2 pr-16 pt-2 pb-2.5 rounded-lg " +
                  (this.props.place === "4" ? "bg-purple-100" : "")
                }
              >
                <div className="inline-flex space-x-8 items-center justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
                  <p
                    className={
                      "text-sm font-medium " +
                      (this.props.place === "4"
                        ? "text-indigo-600 "
                        : "text-gray-400")
                    }
                  >
                    Prescription
                  </p>
                </div>
              </div>
            </Link>
            {/* delivery */}
           
          </div>
          {/* faqs */}
          <Gotofaq />
        </div>
      </div>
    );
  }
}

export default Sidebar;
