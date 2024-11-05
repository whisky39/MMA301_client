// minhduc : http://192.168.1.16:8080/api
// tuankiet: http://192.168.1.12:8080/api
// hoangphuc: http://192.168.1.24:8080/api

import accounting from 'accounting';

export const port = () => {
    return 'http://192.168.1.24:8080/api'
}


export const converMoney = (price) => {
    return accounting.formatMoney(price, "", 0, ".", ",") + " VNĐ";
}