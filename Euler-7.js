var prime = [ 1 ,2 ];
for( var i = 3; prime.length < 10001; i++){
  var flag = 1;
  for( var j= 1; i >= prime[ j ] * prime[ j ]; j++ )
    if( i % prime[ j ] == 0 ){
      flag = 0;
      break;
    }
  if(flag)
    prime.push( i );
}
prime[10000];
