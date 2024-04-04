import { b64a, b64i, encodings } from "./Const";
/**
 * Кодирование Byte Array в Base64.
 *
 * @param {number[]} ba Byte Array для кодирования.
 */
export const ba2b64 = (ba) => {
    let a = 0, b = 0, c = 0, result = '', i = 0, n = ba.length, m = n % 3;
    n -= m;
    while (i < n) {
        a = ba[i++];
        b = ba[i++];
        c = ba[i++];
        result +=
            b64a[a >> 2] +
                b64a[((a << 4) & 63) | (b >> 4)] +
                b64a[((b << 2) & 63) | (c >> 6)] +
                b64a[c & 63];
    }
    if (m === 1) {
        a = ba[i];
        result +=
            b64a[a >> 2] +
                b64a[(a << 4) & 63] +
                '==';
    }
    else if (m === 2) {
        a = ba[i++];
        b = ba[i];
        result +=
            b64a[a >> 2] +
                b64a[((a << 4) & 63) | (b >> 4)] +
                b64a[(b << 2) & 63] +
                '=';
    }
    return result;
};
/**
 * Декодирование Base64 в исходный Byte Array.
 *
 * @param {string} b64 строка для декодирования.
 */
export const b642ba = (b64) => {
    let a = 0, b = 0, c = 0, d = 0, result = [], i = 0, n = b64.length;
    while (i < n) {
        a = b64i[b64[i++]];
        b = b64i[b64[i++]];
        c = b64i[b64[i++]];
        d = b64i[b64[i++]];
        result.push(a << 2 | b >> 4);
        if (c === 64)
            break;
        result.push(((b << 4) & 255) | c >> 2);
        if (d === 64)
            break;
        result.push(((c << 6) & 255) | d);
    }
    return result;
};
/**
 * Преобразование строку в Byte Array.
 *
 * @param {string} str строка для преобразования.
 */
export const str2ba = (str) => {
    let out = [], p = 0;
    for (let i = 0, n = str.length; i < n; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (((c & 0xFC00) == 0xD800) && (i + 1) < n &&
            ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
            c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Преобразование Byte Array в строку.
 *
 * @param {number[]} bytes - Byte Array для преобразования.
 */
export const ba2str = (bytes) => {
    let out = [], pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        }
        else if (c1 > 239 && c1 < 365) {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -
                0x10000;
            out[c++] = String.fromCharCode(0xD800 + (u >> 10));
            out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
/**
 * Кодирование строки в Base64.
 *
 * @param {string} str строка для кодирования.
 */
export const encode = (str) => ba2b64(str2ba(str));
/**
 * Декодирование Base64 в исходную строку.
 *
 * @param {string} str строка для декодирования.
 */
export const decode = (str) => ba2str(b642ba(str));
/**
 * Кодирует файл в формат base64.
 *
 * @param {Blob} document Blob файла.
 */
export function convertBlobToBase64(document) {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                // FileReader.readAsDataURL возвращает данные в формате data:text/plain;base64,DATA
                // поэтому необходимо оставить лишь то, что после запятой
                if (typeof result === 'string') {
                    const convertedParts = result.split(',');
                    const base64 = convertedParts[convertedParts.length - 1];
                    resolve(base64);
                }
                else {
                    throw new Error('Wrong type found. Expected `string`, but found `ArrayBuffer`');
                }
            };
            reader.onerror = (e) => {
                reject(e);
            };
            reader.readAsDataURL(document);
        }
        catch (e) {
            reject(e);
        }
    });
}
/**
 * Кодирует файл в формат ArrayBuffer.
 *
 * @param {Blob} document Blob файла.
 */
export function convertBlobToArrayBuffer(document) {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onloadend = (e) => {
                const arrayBuffer = e.target.result;
                resolve(arrayBuffer);
            };
            reader.onerror = (e) => {
                reject(e);
            };
            reader.readAsArrayBuffer(document);
        }
        catch (e) {
            reject(e);
        }
    });
}
/**
 * Конвертирует объект Blob в текстовое представление.
 *
 * @param {Blob} blob Объект для конвертирования.
 */
export function convertBlobToText(blob) {
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            /** Обработчик успешного завершения чтения. */
            reader.onload = () => resolve(reader.result);
            /** Обработчик завершения процесса с ошибкой. */
            reader.onerror = () => reject(reader.error);
            reader.readAsText(blob);
        }
        catch (e) {
            reject(e);
        }
    });
}
/**
 * Преобразует строку формата base64 в бинарные данные
 *
 * @param {string} b64Data Строка в формате base64.
 * @param {string} contentType Тип данных (пустая строка по умолчанию).
 * @param {number} sliceSize Кол-во символов, по которым нарезаем строку при преобразовании (512 по умолчанию).
 * @return {Blob} Бинарные данные, соответствующие входящей строке.
 */
export function convertBase64ToBlob(b64Data, contentType = '', sliceSize = 512) {
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
}
/**
 * Преобразует Uint8Array напрямую в base64 без преобразования в строку.
 * Оригинал взят отсюда: https://gist.github.com/jonleighton/958841
 *
 * @param {Uint8Array} bytes Беззнаковый типизированный 8-битный массив.
 */
export function convertUint8ArrayToBase64(bytes) {
    let base64 = '';
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
    let a, b, c, d;
    let chunk;
    // Основной цикл преобразует 3 байта исходных данных в 4 байта данных в base64.
    for (let i = 0; i < mainLength; i = i + 3) {
        // Объединяет 3 байта в 1 integer.
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        // Из 1 integer (24 бита) делаем 4 x 6 (получаем 4 символа).
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1
        // Преобразуем сырые бинарные данные в соответствующую кодировку ASCII.
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    // Обработаем оставшиеся данные и заполним их.
    if (byteRemainder === 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
        // Установим 4 последних знаковых бита в ноль.
        b = (chunk & 3) << 4; // 3   = 2^2 - 1
        base64 += encodings[a] + encodings[b] + '==';
    }
    else if (byteRemainder === 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
        // Установим 2 последних знаковых бита в ноль.
        c = (chunk & 15) << 2; // 15    = 2^4 - 1
        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }
    return base64;
}
/**
 * Утилита для быстрого преобразования из Uint8Array в строку base64.
 * @param bytes Двоичные данные в представлении Uint8.
 */
export function convertUint8ArrayToBase64Fast(bytes) {
    const sliceLength = bytes.byteLength;
    let strings = [];
    const chunkSize = 0xffff;
    for (let i = 0; i * chunkSize < sliceLength; i++) {
        //специальный каст, т.к. код успешно работает и протестирован, а проблема только в d.ts файлах тайпскрипта
        const chunk = bytes.subarray(i * chunkSize, (i + 1) * chunkSize);
        strings.push(String.fromCharCode.apply(null, chunk));
    }
    return btoa(strings.join(''));
}
/**
 * Утилита для быстрого преобразования из Blob в строку base64.
 * @param blob Blob-объект.
 */
export function convertBlobToBase64Fast(blob) {
    return convertBlobToArrayBuffer(blob).then((buffer) => convertUint8ArrayToBase64(new Uint8Array(buffer)));
}
