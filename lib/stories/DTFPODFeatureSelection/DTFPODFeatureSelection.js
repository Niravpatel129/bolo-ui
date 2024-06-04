"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Template;
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Template() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-[#EBF1F7] "
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 md:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:w-1/2 flex flex-col items-start space-y-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
  }, "Sell on Etsy with print-on-demand"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl text-gray-700 my-8"
  }, "Create your own designs and sell on one of the most popular creative online marketplaces"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4 mt-4 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6 text-blue-500"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "High Quality")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6 text-blue-500"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "No Minimums")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6 text-blue-500"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, "Fast shipping"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-4 mt-6 w-full"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bg-[#0176C3] text-white py-3 rounded-full text-center hover:opacity-85 transition duration-200"
  }, "Upload Your Design"), /*#__PURE__*/React.createElement("button", {
    className: "border border-black text-black py-3 rounded-full text-center hover:bg-[#0176C3] hover:text-white transition duration-200"
  }, "Order Custom Design"))), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full md:w-4/12 h-[300px] md:h-[450px] lg:h-[500px]"
  }, /*#__PURE__*/React.createElement(_image["default"], {
    src: "../../bunny.png",
    alt: "Custom DTF Transfers",
    layout: "fill",
    className: "object-cover rounded-lg"
  }))));
}