"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Template;
var FeatureCard = function FeatureCard(_ref) {
  var imageUrl = _ref.imageUrl,
    title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center p-4 md:p-6 lg:p-8 bg-white "
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-48 bg-cover bg-center rounded-md mb-5",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-5"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-black font-normal text-base"
  }, description)));
};
function Template() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8"
  }, "We've tested it all so you don\u2019t have to."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    imageUrl: "/bunny.png",
    title: "Beautiful Color Contrast",
    description: "Colors will show vividly on your garments across any color combination. It will surprise you time and time again how bright and beautiful your DTF transfer designs will look on your products."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    imageUrl: "/bunny.png",
    title: "Any Design on Lights or Darks",
    description: "No matter what color blanks you use, our DTF will give you vibrant results. Our transfers are easier, cleaner, brighter, more durable, and more flexible than any transfer you\u2019ve worked with before."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    imageUrl: "/bunny.png",
    title: "Stretchability means Durability",
    description: "The stretch test demonstrates durability. You will see no cracking when you stretch our DTF transfers (when applied correctly). We also tested for 50+ washes with very little degradation made possible by our combination of film, ink, powder, and pressing process."
  }))));
}