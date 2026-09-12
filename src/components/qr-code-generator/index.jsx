import QRCode from "react-qr-code";

export default function QRCodeGenerator(){
    return <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name="qr-code" placeholder="Enter your value here"/>
                <button>Generate</button>
            </div>
            <div>
                <QRCode 
                id="qr-code-value"
                />
            </div>
    </div>
}