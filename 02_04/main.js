import { conHello,fnPlusNumbers } from "./library_named.js";

console.log(conHello);
console.log(fnPlusNumbers(1,2));

// myLibrary 객체로 가져오기(import)
import *as myLibrary from "./library_named.js";
// 모든 식별자를 가져와 myLivaray 객체로 저장
console.log(myLibrary.conHello);
console.log(myLibrary.fnPlusNumbers(4,5));

import fnMyfunction from './library_default.js'
console.log('안녕하세요! 기본으로 내보냅니다!.');
console.log('5 + 6 = ', fnMyfunction(5,6));