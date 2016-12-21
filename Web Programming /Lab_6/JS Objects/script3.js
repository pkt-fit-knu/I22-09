bear = {
	name: 'Bear Greals',
	weight: 200,
	height: 2.30,
	type: 'Bear',
	head: {
		nose: {
			working: true,
			breath: 'clear',
			breathe: function(air){
				console.log('bear breaths');
			}
		},
		eyes: {
			leftEye: {
				working: true
			},
			rightEye: {
				working: true
			},
			sleepy: false,
			color: 'White',
			lookAt: function(thing){
				console.log('bear looking at:');
				console.log(thing);
			}
		},
		ears: {
			move: function(side){
				console.log('bear move ears to ' + side);
			},
			leftEar: {
				working: true
			},
			rightEar: {
				working: true
			}
		},
		moveTo: function(side){
			console.log('bear move hear to ' + side);
		}
	}
}

console.log(bear);
bear.head.moveTo('right');
