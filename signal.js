// switch 
switch("green"){
    case 'red':
        console.log('dont cross the road, its danger');
        break;
    case 'yellow':
        console.log('stop walking');
        break;
    case 'green':
        console.log('cross the road');
        break;
    default:
        console.log('no signal');
}



const color = 'yellow';
if(color === 'red'){
    console.log('dont cross the road, its danger');
}
else if (color === 'yellow'){
    console.log('stop walking');
}
else if (color === 'green'){
    console.log('cross the road');
}

else {
    console.log('no signal');
}