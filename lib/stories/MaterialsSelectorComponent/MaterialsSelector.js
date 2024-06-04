"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Template;
var materials = [{
  name: '100% Cotton',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}, {
  name: '50/50 Cotton Poly',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}, {
  name: 'Polyester',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}, {
  name: 'Nylon',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}, {
  name: 'Denim',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}, {
  name: 'Canvas',
  imageUrl: 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
}];
function Template() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8"
  }, "Any Design, Any Material, Made Possible with DTF"), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-base sm:text-lg md:text-xl font-medium mb-12"
  }, /*#__PURE__*/React.createElement("p", {
    className: "py-2"
  }, "We make production quality transfers for anyone from large shops to hobbyists, and all brands in between."), /*#__PURE__*/React.createElement("p", {
    className: "py-2"
  }, "Making the road to your first product easier. Here are some materials our DTF works best with.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-4 md:gap-8"
  }, materials.map(function (material, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "flex flex-col items-center w-24 sm:w-32 md:w-40"
    }, /*#__PURE__*/React.createElement("img", {
      src: material.imageUrl,
      alt: material.name,
      className: "max-w-[100px] sm:max-w-[125px] md:max-w-[150px] mb-2"
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-center text-sm sm:text-base md:text-lg font-normal"
    }, material.name));
  }))));
}