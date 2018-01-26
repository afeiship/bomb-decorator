var COMMA = ',';

module.exports = function (inTarget, inKey, inDescriptor) {
  var method = inDescriptor.value;
  if(inKey.indexOf(COMMA)>-1){
    var keys = inKey.split(COMMA);
    keys.forEach(function(key){
        inTarget[ key ] = method.call( inTarget, key );
    });
  }
};
