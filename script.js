function encrypt() {
    let text = document.getElementById('text').value;
    let key = document.getElementById('key').value;

    vinegere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let s = 0;

    keyTrim = key.trim();

    textEncrypt = text
                .toLowerCase()
                .split('')
                .map((v, i, t) => { 
                    if(v == [' ']){
                        s++;
                        return [' '];
                    } else if(v == ['\n']) {
                        s++;
                        return ['\n'];
                    } else if(v == [','] || v == ['.'] || v == [':'] || v == ['"'] || v == ['!'] || v == ['&'] ){
                        s++
                        return v;
                    } else {
                        i = (i - s) % keyTrim.length;
                        encryp = ((vinegere.indexOf(v) + vinegere.indexOf(keyTrim[i])) % 26);
                        return result = vinegere[encryp];
                    }
                })
                .join('')
                .toUpperCase();

    document.getElementById('result').innerHTML = textEncrypt;
}

function decrypt() {
    let text = document.getElementById('text').value;
    let key = document.getElementById('key').value;

    vinegere = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let s = 0;

    keyTrim = key.trim();

    textDecrypt = text
                .toLowerCase()
                .split('')
                .map((v, i, t) => { 
                    if(v == [' ']){
                        s++;
                        return [' '];
                    } else if(v == ['\n']) {
                        s++;
                        return ['\n'];
                    } else if(v == [','] || v == ['.'] || v == [':'] || v == ['"'] || v == ['!'] || v == ['&'] ){
                        s++
                        return v;
                    } else {
                        i = (i - s) % keyTrim.length;
                        decryp = ((vinegere.indexOf(v) - vinegere.indexOf(keyTrim[i]) + 26 % 26);
                        return result = vinegere[decryp];
                    }
                })
                .join('')
                .toUpperCase();

    document.getElementById('result').innerHTML = textDecrypt;
}
