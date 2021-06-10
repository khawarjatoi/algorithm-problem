function hasAny( arr )
{
  return arr.includes( 'any' );
}

function getCommons( available, allowed )
{
  if( hasAny( allowed ) )
  {
    return available;
  }
  return available.filter( ( x ) => allowed.includes( x ) )
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
      values = commons.sort( ( y, z ) => Math.abs( preferred[ x ] - y ) - Math.abs( preferred[ x ] - z ) )[ 0 ]
    }
    list.push( values )
    x++;
  }
  return list.filter( getUnique );
}

function attempt( available, allowed, preferred )
{
  let commons = getCommons( available, allowed );

  if( hasAny( preferred ) )
  {
    return commons;
  }
  return getList( commons, preferred );
};

module.exports.attempt = attempt;
