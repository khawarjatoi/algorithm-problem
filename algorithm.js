exports.attempt = (available = [], allowed = [], preferred = []) => {
  let commons = allowed.includes('any')
    ? available
    : available.filter((x) => allowed.includes(x));
  return preferred.includes('any')
    ? commons
    : [
        ...new Set(
          preferred
            .map(
              (x) =>
                commons.find((y) => y >= x) ||
                commons.sort((y, z) => Math.abs(x - z) - Math.abs(x - y))[0],
            )
            .filter(Boolean),
        ),
      ];
};
