interface Options {
    /** QRCode link data */
    text: string;
    width?: number;
    height?: number;
    colorDark?: string;
    colorLight?: string;
    /** QRCode.CorrectLevel [L|M|Q|H]  */
    correctLevel?: number;
}
declare class QRCode {
    /**
     * @name QRCode.CorrectLevel
     */
    static CorrectLevel: {
        L: number;
        M: number;
        Q: number;
        H: number;
    };
    /**
     * @class QRCode
     * @constructor
     * @example
     * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
     *
     * @example
     * var oQRCode = new QRCode("test", {
     *    text : "http://naver.com",
     *    width : 128,
     *    height : 128
     * });
     *
     * oQRCode.clear(); // Clear the QRCode.
     * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
     *
     * @param {HTMLElement|String} el target element or 'id' attribute of element.
     * @param {Object|String} vOption
     * @param {String} vOption.text QRCode link data
     * @param {Number} [vOption.width=256]
     * @param {Number} [vOption.height=256]
     * @param {String} [vOption.colorDark="#000000"]
     * @param {String} [vOption.colorLight="#ffffff"]
     * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
     */
    constructor(el: HTMLElement | string, vOption: Options | string);
    private makeImage;
    /**
     * Make the QRCode
     *
     * @param {String} sText link data
     */
    makeCode(sText: string): void;
    /**
     * Clear the QRCode
     */
    clear(): void;
}
export default QRCode;
