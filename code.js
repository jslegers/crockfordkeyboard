
(function(doc, undef){

    var
    element = function(id){
        return doc.getElementById(id);
    }, 
                
    CrockfordKeyboard = function(textfield, prefix, lock_char, default_char_type) {
        if(typeof default_char_type == undef){
            default_char_type = 'alpha';
        }

        if(typeof lock_char == undef){
            lock_char = false;
        }

        Crockford = new Keyboard(textfield, prefix);
        Crockford.setSpecialMapping({
            'tab' : '\t'
        });
        Crockford.setNoncappedMapping({
            '0' : '0',
            '1' : '1',
            '2' : '2',
            '3' : '3',
            '4' : '4',
            '5' : '5',
            '6' : '6',
            '7' : '7',
            '8' : '8',
            '9' : '9',
            'comma' : ',',
            'dot' : '.',
            'space' : ' ',
            'return' : '\n'
        });
        Crockford.setCappedMapping({
            'alpha' : {
                'low' : {
                    'a' : 'a',
                    'b' : 'b',
                    'c' : 'c',
                    'd' : 'd',
                    'blank-1' : '',
                    'blank-2' : '',
                    'e' : 'e',
                    'f' : 'f',
                    'g' : 'g',
                    'h' : 'h',
                    'blank-3' : '',
                    'blank-4' : '',
                    'i' : 'i',
                    'j' : 'j',
                    'k' : 'k',
                    'l' : 'l',
                    'm' : 'm',
                    'n' : 'n',
                    'o' : 'o',
                    'p' : 'p',
                    'q' : 'q',
                    'r' : 'r',
                    's' : 's',
                    't' : 't',
                    'u' : 'u',
                    'v' : 'v',
                    'w' : 'w',
                    'x' : 'x',
                    'y' : 'y',
                    'z' : 'z'
                },
                'cap' : {
                    'a' : 'A',
                    'b' : 'B',
                    'c' : 'C',
                    'd' : 'D',
                    'blank-1' : '',
                    'blank-2' : '',
                    'e' : 'E',
                    'f' : 'F',
                    'g' : 'G',
                    'h' : 'H',
                    'blank-3' : '',
                    'blank-4' : '',
                    'i' : 'I',
                    'j' : 'J',
                    'k' : 'K',
                    'l' : 'L',
                    'm' : 'M',
                    'n' : 'N',
                    'o' : 'O',
                    'p' : 'P',
                    'q' : 'Q',
                    'r' : 'R',
                    's' : 'S',
                    't' : 'T',
                    'u' : 'U',
                    'v' : 'V',
                    'w' : 'W',
                    'x' : 'X',
                    'y' : 'Y',
                    'z' : 'Z'
                }
            },
            'euro' : {
                'low' : {
                    'a' : '\u00E0',
                    'b' : '\u00E1',
                    'c' : '\u00E2',
                    'd' : '\u00E4',
                    'blank-1' : '\u00E5',
                    'blank-2' : '\u00E3',
                    'e' : '\u00E8',
                    'f' : '\u00E9',
                    'g' : '\u00EA',
                    'h' : '\u00EB',
                    'blank-3' : '\u00E7',
                    'blank-4' : '\u00E6',
                    'i' : '\u00EC',
                    'j' : '\u00ED',
                    'k' : '\u00EE',
                    'l' : '\u00EF',
                    'm' : '\u00DF',
                    'n' : '\u00F1',
                    'o' : '\u00F2',
                    'p' : '\u00F3',
                    'q' : '\u00F4',
                    'r' : '\u00F6',
                    's' : '\u00F8',
                    't' : '\u00F5',
                    'u' : '\u00F9',
                    'v' : '\u00FA',
                    'w' : '\u00FB',
                    'x' : '\u00FC',
                    'y' : '\u00FF',
                    'z' : '\u00FD'
                },
                'cap' : {
                    'a' : '\u00C0',
                    'b' : '\u00C1',
                    'c' : '\u00C2',
                    'd' : '\u00C4',
                    'blank-1' : '\u00C5',
                    'blank-2' : '\u00C3',
                    'e' : '\u00C8',
                    'f' : '\u00C9',
                    'g' : '\u00CA',
                    'h' : '\u00CB',
                    'blank-3' : '\u00C7',
                    'blank-4' : '\u00C6',
                    'i' : '\u00CC',
                    'j' : '\u00CD',
                    'k' : '\u00CE',
                    'l' : '\u00CF',
                    'm' : '\u00DF',
                    'n' : '\u00D1',
                    'o' : '\u00D2',
                    'p' : '\u00D3',
                    'q' : '\u00D4',
                    'r' : '\u00D6',
                    's' : '\u00D8',
                    't' : '\u00D5',
                    'u' : '\u00D9',
                    'v' : '\u00DA',
                    'w' : '\u00DB',
                    'x' : '\u00DC',
                    'y' : '\u0178',
                    'z' : '\u00DD'	
                }
            },
            'symb' : {
                'low' : {
                    'a' : '(',
                    'b' : ')',
                    'c' : '\\',
                    'd' : '/',
                    'blank-1' : '%',
                    'blank-2' : '*',
                    'e' : '[',
                    'f' : ']',
                    'g' : '!',
                    'h' : '?',
                    'blank-3' : ';',
                    'blank-4' : ':',
                    'i' : '{',
                    'j' : '}',
                    'k' : '\u0026',
                    'l' : '\u0023',
                    'm' : '-',
                    'n' : '\u007E',
                    'o' : '<',
                    'p' : '>',
                    'q' : '|',
                    'r' : '_',
                    's' : '$',
                    't' : '+',
                    'u' : '`',
                    'v' : '\'',
                    'w' : '^',
                    'x' : '"',
                    'y' : '@',
                    'z' : '='
                },
                'cap' : {
                    'a' : '(',
                    'b' : ')',
                    'c' : '\\',
                    'd' : '/',
                    'blank-1' : '%',
                    'blank-2' : '*',
                    'e' : '[',
                    'f' : ']',
                    'g' : '!',
                    'h' : '?',
                    'blank-3' : ';',
                    'blank-4' : ':',
                    'i' : '{',
                    'j' : '}',
                    'k' : '\u0026',
                    'l' : '\u0023',
                    'm' : '-',
                    'n' : '\u007E',
                    'o' : '<',
                    'p' : '>',
                    'q' : '|',
                    'r' : '_',
                    's' : '$',
                    't' : '+',
                    'u' : '`',
                    'v' : '\'',
                    'w' : '^',
                    'x' : '"',
                    'y' : '@',
                    'z' : '='	
                }
            },
            'add' : {
                'low' : {
                    'a' : '\u00B0',
                    'b' : '',
                    'c' : '\u00A9',
                    'd' : '\u00F7',
                    'blank-1' : '',
                    'blank-2' : '',
                    'e' : '\u20AC',
                    'f' : '\u20A3',
                    'g' : '\u00A1',
                    'h' : '\u00BF',
                    'blank-3' : '',
                    'blank-4' : '',
                    'i' : '',
                    'j' : '',
                    'k' : '\u00B9',
                    'l' : '\u00A3',
                    'm' : '\u00B5',
                    'n' : '\u2022',
                    'o' : '\u00AB',
                    'p' : '\u00BB',
                    'q' : '\u00B2',
                    'r' : '\u00AE',
                    's' : '\u00A7',
                    't' : '\u2122',
                    'u' : '',
                    'v' : '',
                    'w' : '\u00B3',
                    'x' : '\u00A2',
                    'y' : '\u00A5',
                    'z' : '\u2260'
                },
                'cap' : {
                    'a' : 'A',
                    'b' : 'B',
                    'c' : 'C',
                    'd' : 'D',
                    'blank-1' : '',
                    'blank-2' : '',
                    'e' : 'E',
                    'f' : 'F',
                    'g' : 'G',
                    'h' : 'H',
                    'blank-3' : '',
                    'blank-4' : '',
                    'i' : 'I',
                    'j' : 'J',
                    'k' : 'K',
                    'l' : 'L',
                    'm' : 'M',
                    'n' : 'N',
                    'o' : 'O',
                    'p' : 'P',
                    'q' : 'Q',
                    'r' : 'R',
                    's' : 'S',
                    't' : 'T',
                    'u' : 'U',
                    'v' : 'V',
                    'w' : 'W',
                    'x' : 'X',
                    'y' : 'Y',
                    'z' : 'Z'
                }
            }
        });
        Crockford.setDefaultChartype(default_char_type);
        Crockford.init({
            'lock-char' : lock_char
        });
        return Crockford;
    },
                
    Keyboard = function(textfield, prefix) {
        var
        textbox = textfield,
        flags = {},
        special_keys = {},
        noncappedmapping = {},
        specialmapping = {},
        char_types = [],
        default_char_type = '',
        charmapping = [],
        cappedmapping = [],
        pf = prefix,

        copy_array_and_add_prefix = function(values) {
            var return_array = [];
            for(var key in values){
                if(typeof values[key] == 'string' || typeof values[key] == 'number'){
                    return_array[pf+'-'+key] = values[key];
                } else {
                    return_array[pf+'-'+key] = copy_array_and_add_prefix(values[key]);
                }
            }
            return return_array;		
        }

        return {
            init : function(set_flags) {
                special_keys = {
                    'cap' : pf+'-cap', 
                    'low' : pf+'-low', 
                    'lock-cap' : pf+'-lock-cap', 
                    'lock-char' : pf+'-lock-char', 
                    'lock' : pf+'-lock', 
                    'back' : pf+'-back', 
                    'char' : pf+'-char'
                };
                flags[special_keys['cap']] = false;
                flags[special_keys['lock-cap']] = false;
                flags[special_keys['lock-char']] = false;
                flags[special_keys['lock']] = false;
                flags[special_keys['char']] = {};
                for(key in char_types){
                    flags[special_keys['char']][char_types[key]] = false;
                }
                for(key in set_flags){
                    flags[special_keys[key]] = set_flags[key];
                }

                charmapping = cappedmapping[default_char_type][special_keys['low']];
                this.setFlag(default_char_type, true);
            },
            setDefaultChartype : function(value) {
                default_char_type = pf+'-'+value;
            },
            setSpecialMapping : function(values) {
                specialmapping = copy_array_and_add_prefix(values);
            },
            setNoncappedMapping : function(values) {
                noncappedmapping = copy_array_and_add_prefix(values);
            },
            setCappedMapping : function(values) {
                cappedmapping = copy_array_and_add_prefix(values);
                for (var key in cappedmapping) {
                    char_types.push(key);
                }
            },
            hasClass: function(ele,cls) {
                return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
            },
            addClass: function(ele,cls) {
                if (!this.hasClass(ele,cls)) ele.className += " "+cls;
            },
            removeClass: function(ele,cls) {
                if (this.hasClass(ele,cls)) {
                    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
                    ele.className=ele.className.replace(reg,' ');
                }
            },
            unsetFlag: function(flag, c){
                if(c){
                    flags[special_keys['char']][flag] = false;
                } else {
                    flags[flag] = false;
                }
                this.removeClass(element(flag), "pressed");
            },
            setFlag: function(flag, c){
                if(c){
                    flags[special_keys['char']][flag] = true;
                } else {
                    flags[flag] = true;
                }
                this.addClass(element(flag), "pressed");
            },
            toggleFlag: function(flag) {
                if(flags[flag]) {
                    this.unsetFlag(flag, false);
                } else {
                    this.setFlag(flag, false);
                }
            },
            processSpecial: function(button) {
                if(button.id in specialmapping) {
                    textbox.value += specialmapping[button.id]
                } else if(button.id == special_keys['back']) {
                    var tbvalue = textbox.value;
                    textbox.value = tbvalue.slice(0, -1);
                } else {
                    var change = false;
                    if(typeof flags[special_keys['char']][button.id] !== undef){
                        if(! flags[button.id]){
                            for(var flag in flags[special_keys['char']]){
                                if(flag == button.id){
                                    this.setFlag(flag, true);
                                } else {
                                    this.unsetFlag(flag, true);
                                }
                            }
                            change = true;
                        }
                    } else {
                        this.toggleFlag(button.id);
                        change = true;
                    }
                    if(change){
                        for(flag in flags[special_keys['char']]){
                            if(flags[special_keys['char']][flag]){
                                if(flags[special_keys['cap']]){
                                    charmapping = cappedmapping[flag][special_keys['cap']];	
                                } else {
                                    charmapping = cappedmapping[flag][special_keys['low']];	
                                }
                                break;
                            }
                        }
                        for(var key in charmapping){
                            element(key).value = charmapping[key];
                        }
                    }
                }
            },
            processAlpha: function(button) {
                if(button.id in charmapping) {
                    textbox.value += charmapping[button.id];
                    if(!flags[special_keys['lock']]){
                        if(flags[special_keys['cap']] && !flags[special_keys['lock-cap']]){
                            this.processSpecial(element(special_keys['cap']));
                        }
                        if(!flags[special_keys['char']][default_char_type] && !flags[special_keys['lock-char']]){
                            this.processSpecial(element(default_char_type));
                        }
                    }
                }
            },
            processNoncapped: function(button) {
                if(button.id in noncappedmapping) {
                    textbox.value += noncappedmapping[button.id];
                }
            }
        }   
    };
                
    $(doc).ready(function() {
        var cfkb = new CrockfordKeyboard(element("cfkb-textbox"), 'cfkb');
        $(".cfkb.v1 .special input").click( function(){
            cfkb.processSpecial(this);
        });

        $(".cfkb.v1 .numeric input").click( function(){
            cfkb.processNoncapped(this);
        });

        $(".cfkb.v1 .alpha input").click( function(){
            cfkb.processAlpha(this);
        });
    });
})(document, 'undefined');