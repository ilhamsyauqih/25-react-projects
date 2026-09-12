import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleSetInput = () => {
        setQrCode(input);
        setInput('')
    }

    return <div>
        <div>
        <h1>QR Code Generator</h1>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} name="qr-code"/>
        <button onClick={handleSetInput}>Generate</button>
    </div>
    <div>
        <QRCode 
        id="qr-code-value"
        value={qrCode}
        size={400}
        color="#fff"
        />
    </div>
    </div>
}

export default QRCodeGenerator;