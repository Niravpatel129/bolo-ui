"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Template;
var FeatureSection = function FeatureSection(_ref) {
  var imageUrl = _ref.imageUrl,
    title = _ref.title,
    description = _ref.description,
    buttonText = _ref.buttonText;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center p-4 md:p-6 lg:p-12 bg-white "
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-64 bg-cover bg-center rounded-md mb-4",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-black text-center mb-4"
  }, description), /*#__PURE__*/React.createElement("button", {
    className: "w-full bg-[#0176C3] rounded-full text-white py-3 px-4 cursor-pointer hover:opacity-85"
  }, buttonText));
};
function Template() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
  }, "Get Started Now"), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-black mb-12"
  }, "Select the DTF Transfer product that works best for you. Start with a design or build your own sheet."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-1"
  }, /*#__PURE__*/React.createElement(FeatureSection, {
    imageUrl: "/bunny.png",
    title: "DTF Transfers By Size",
    description: "Upload your design and order as many as you need. From $0.03/square inch.",
    buttonText: "Order Custom Design"
  }), /*#__PURE__*/React.createElement(FeatureSection, {
    imageUrl: "/bunny.png",
    title: "Bolo Design Builder",
    description: "Upload your gang sheet or make a custom sheet with our design builder.",
    buttonText: "Build Custom Sheet"
  }))));
}