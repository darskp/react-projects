import React, {useState} from "react";
import QRCode from "react-qr-code";
import "./qrcode.css";

const QrCode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrcode = () => {
    setQrCode(input);
  };

  return (
    <div className="qrcode-container">
      <div className="input-container">
        <input
          name="input"
          type="text"
          placeholder="Enter the value"
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button disabled={input.trim() == ""} onClick={handleQrcode}>
          Generate
        </button>
      </div>
      {qrCode.trim() !== "" && (
        <QRCode size={256} value={qrCode} viewBox={"0 0 256 256"} />
      )}
    </div>
  );
};

export default QrCode;
