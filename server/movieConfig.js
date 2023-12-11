exports.pageSize = 12;

exports.sortMovies = (movies, sortBy) => {
  return [...movies].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "year") {
      return b.released - a.released;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
};
