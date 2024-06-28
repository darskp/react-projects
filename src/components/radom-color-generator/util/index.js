export const ColorCodeOptions=[
    {
        id:1,
        value:"RGB",
        label:"RGB"
    },
    {
        id:2,
        value:"HEX",
        label:"HEX"
    }
]

export const constants={
    GENERATEBUTTONNAME:"Generate",
}

 const isGreaterThanten = (generatedNumber) => {
    switch (String(generatedNumber)) {
      case '10': return 'a';
      case '11': return 'b';
      case '12': return 'C';
      case '13': return 'd';
      case '14': return 'e';
      case '15': return 'f';
      default:return generatedNumber
    }
  }

  export const generateColorCode = (code) => {
    if(code==ColorCodeOptions[0].value){
      let str = "#";
      for (let i = 0; i < 6; i++) {
        const generatedNumber = Math.floor(Math.random() * 15);
          const hexColor  = isGreaterThanten(generatedNumber)
          str += hexColor ;
      }
      return str
    }else{
      let str = "RGB(";
      for (let i = 0; i < 3; i++) {
        const generatedNumber = Math.floor(Math.random() * 255);
        if(i==2){
          str += generatedNumber + ")";
          break;
        }
        str += generatedNumber+","
      }
      return str;
    }
  }
