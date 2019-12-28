let makeNumber = string => string.split('')
                                 .filter(char => char.charCodeAt() >= 48 && char.charCodeAt() <= 57)
                                 .join('');

makeNumber();