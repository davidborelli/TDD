const fetchData = url => {
  fetch(url)
    .then(data => data.json())
    .then(data => load.next(data));
};

function* loadGit() {
  console.log("Carregando os repositórios....");
  const repos = yield fetchData(
    "https://api.github.com/users/davidborelli/repos"
  );
  console.log(repos);

  console.log("Carregando os seguidores...");
  const followers = yield fetchData(
    "https://api.github.com/users/davidborelli/followers"
  );
  console.log(followers);
}

const load = loadGit();
load.next();
