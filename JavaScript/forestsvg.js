function Tree(rx) {
	this.rx = rx;
    this.x = 1.2*rx;
    this.y = 1.3*rx;
	this.ry = 0.9*this.y;
	this.length = 0.6*rx;
}

function main() {
	var size = document.getElementById("size").value;
    var BestTree = new Tree(parseInt(size));
	
	document.getElementById("idd").innerHTML='<ellipse cx="'+ BestTree.x +'" cy="'+ BestTree.y +'" rx="'+ BestTree.rx +'" ry="'+ BestTree.ry +'"  style="fill:ForestGreen;stroke:DarkGreen ;stroke-width:2" />';
	document.getElementById("idd").innerHTML+='<rect x="'+( BestTree.x - BestTree.length / 2)+'" y="'+( BestTree.y + BestTree.rx)+'" width="'+ BestTree.length +'" height="'+ BestTree.length +'"  style="fill:Sienna;stroke:SaddleBrown;stroke-width:3;" />';

    
}