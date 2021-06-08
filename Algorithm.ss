function getCommons( available, allowed )
{
  if( allowed.includes( 'any' ) )
  {
    return available;
  }
  return available.filter( ( x ) => allowed.includes( x ))
}

function getUnique( value, index, self )
{
  return self.filter( Boolean ).indexOf( value ) === index;
}

function getList( commons, preferred )
{
  let list = [];
  let values = [];
  let x = 0;
  let len = preferred.length
  while ( x < len )
  {
    values = commons.find( ( y ) => y >= preferred[ x ] );
    if( !values )
    {
      values = commons.sort( ( y, z ) => Math.abs( preferred[ x ] - z ) - Math.abs( preferred[ x ] - y ) )[ 0 ]
    }
    list.push( values )
    x++;
  }
  return list.filter( getUnique );
}

function attempt( available, allowed, preferred )
{
  let commons = getCommons( available, allowed );

  if( preferred.includes( 'any' ) )
  {
    return commons;
  }
  return getList( commons, preferred );
};

module.exports.attempt = attempt;
