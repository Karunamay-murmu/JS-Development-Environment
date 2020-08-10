import numeral from 'numeral';
import './index.css'

const value = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${value} for this thing`)
