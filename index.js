// O(1) - Time | O(1) - Space 
function validIPAddresses(string) {
	let ipAdressesFound = [];

	for(let i = 0; i < Math.min(string.length, 4); i++){
		const currentIPAddressParts = ["","","",""];
		
		currentIPAddressParts[0] = string.slice(0, i);
		if(isValidPart(currentIPAddressParts[0]) === false) continue;
		
		for(let j = i + 1; j < i + Math.min(string.length - i, 4); j++){
			currentIPAddressParts[1] = string.slice(i, j);
			if(isValidPart(currentIPAddressParts[1]) === false) continue;
		
		for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++){
			currentIPAddressParts[2] = string.slice(j, k);
			currentIPAddressParts[3] = string.slice(k)
			
			if(isValidPart(currentIPAddressParts[2] )&& isValidPart(currentIPAddressParts[3])){
				ipAdressesFound.push(currentIPAddressParts.join('.'));
			} 
		 }
		}
	}
	return ipAdressesFound;
}
function isValidPart(string){
	let strAsNum = Number(string);
	if(strAsNum > 255) return false;
	return string.length === strAsNum.toString().length; // leading zero is not a valid IP address part
}
validIPAddresses("1921680")