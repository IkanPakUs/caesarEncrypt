function encrypt(convert_type) {
    let text = document.getElementById('text').value;
    let key = document.getElementById('key').value;

    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let s = 0;

    key_trim = key.trim();

    text_convert = text
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
                        i = (i - s) % key_trim.length;
                        if( convert_type == 'encrypt'){
                            convert_result = ((alphabet.indexOf(v) + alphabet.indexOf(key_trim[i])) % 26);
                        } else {
                            convert_result = ((alphabet.indexOf(v) - alphabet.indexOf(key_trim[i]) + 26) % 26);
                        }
                        return result = alphabet[convert_result];
                    }
                })
                .join('')
                .toUpperCase();

    document.getElementById('result').innerHTML = text_convert;
}