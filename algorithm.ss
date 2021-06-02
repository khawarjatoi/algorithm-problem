module.exports.attempt = function( available, allowed, preferred )
{
  let commons = [];

  if( allowed.includes( 'any' ) )
  {
    commons = available;
  }
  else
  {
    commons = available.filter( ( x ) => allowed.includes( x )) ;
  }

  if( preferred.includes( 'any' ) )
  {
    return commons;
  }
  else
  {
    return [ ...new Set( preferred.map( ( x ) =>
      commons.find( ( y ) => y >= x ) || commons.sort( ( y, z ) => Math.abs( x - z ) - Math.abs( x - y ) )[ 0 ] ).filter( Boolean )
     ),
    ];
  }


};
