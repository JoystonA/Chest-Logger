/* -------------------------- VARIABLES ----------------------------------*/
const crypto = require('crypto');

/* -------------------------- FONCTIONS ----------------------------------*/
function hash(mdp) {
    const key = '@]@FKr758+4cA(KcsLd5';
    const hash = crypto.createHmac('sha256', key)
        .update(mdp)
        .digest('hex');
    return hash;
}

