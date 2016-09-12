function echo(){
  for(var i in arguments) {
  	console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
