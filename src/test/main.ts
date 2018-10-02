
import { phoneNumber } from "../lib";

const ph= phoneNumber.build("0636786385", "fr");

console.log({ ph });

console.assert(phoneNumber.areSame("+33636786385", "06 36 78 63 85"));

console.assert(phoneNumber.isDialable(ph));

console.log( phoneNumber.prettyPrint(ph, "fr"));

console.log( phoneNumber.build("06 36 78 63 85", "it") );

console.log( phoneNumber.build("302 44444444", "fr") );

console.log( phoneNumber.build("0033636786385", "it") );

console.log("DONE");
