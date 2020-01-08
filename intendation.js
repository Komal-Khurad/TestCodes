let string=`<?xml version="1.0" encoding="UTF-8"?>
<company>
<name>Raykor Technologies PVT. Ltd.</name>
<employees>
<employee id="1">
<name>ABC PQR</name>
<address>
<line1>M G Road</line1>
<line2>Baner</line2>
<state>Maharashtra</state>
<city>Pune</city>
</address>
<phones>
<mobile>9876543210</mobile>
<landline>0209876543</landline>
</phones>
<education>
<degree>
<college>
<name>College of engineering</name>
<address>
<line1>M G Road</line1>
<line2>Baner</line2>
<state>Maharashtra</state>
<city>Pune</city>
</address>
</college>
</degree>
</education>
</employee>
</employees>
</company>`;

let indent='  ';
let data=string.split('\n');
for(i=2;i<data.length;i++){
    let start=data[i].indexOf('<');
    let end=data[i].indexOf('>');
    let startTag=data[i].substring(start+1,end);
    if(data[i].search('</'+startTag+'>')>0){
        data[i]=indent+data[i];
        //keep previous indent
    } else if(data[i].search('</')==0){
        indent=indent.substr(0,indent.length-2);
        data[i]=indent+data[i];
        //remove indent by one
    } else if(data[i].search('</')<0){
        indent=indent+"  ";
        data[i]=indent+data[i];
        //add indent by one
    }
}
console.log(data);
