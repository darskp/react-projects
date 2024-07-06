export const ColorCodeOptions = [
  {
    id: 1,
    value: "HEX",
    label: "HEX",
  },
  {
    id: 2,
    value: "RGB",
    label: "RGB",
  },
];

export const constants = {
  GENERATEBUTTONNAME: "Generate",
};

export const generateColorCode = (code) => {
  if (code == ColorCodeOptions[0]?.value) {
    let hexColorCode = "#";
    for (let i = 0; i < 6; i++) {
      const generateRandomHexcode = Math.floor(Math.random() * 15);
      hexColorCode += generateRandomHexcode.toString(15);
    }
    return hexColorCode;
  } else {
    const rgbCode = Array.from({length: 3}, () =>
      Math.floor(Math.random() * 255),
    ).join(",");
    return `RGB(${rgbCode})`;
  }
};
