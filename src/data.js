const faves = [];
const data = {
  fetchData() {
    return fetch("https://www.reddit.com/r/analog/top/.json").then(response =>
      response.json()
    );
  },

  getFaves() {
    return faves;
  },

  addFave(post) {
    faves.push(post);
  },

  deleteFave(id) {
    faves.splice(id, 1);
  }
};

export default data;
