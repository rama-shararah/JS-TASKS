async function getData() {
  const responsive = await fetch(
    "https://www.breakingbadapi.com/api/characters"
  );
  const data = await responsive.json();
  for (let i = 0; i < data.length; i++) {
    document.getElementById(
      "select"
    ).innerHTML += `<option>${data[i].name}</option>`;
  }
}
getData();

async function myfun() {
  const responsive = await fetch(
    "https://www.breakingbadapi.com/api/characters"
  );
  const data = await responsive.json();
  let value = document.getElementById("select").value;
  for (let x = 0; x < data.length; x++) {
    if (value == data[x].name) {
      document.getElementById("img").src = data[x].img;
    }
  }
}

async function getOnlyWhite() {
  let p = document.getElementById("txt").value;
  const responsive = await fetch(
    `https://www.breakingbadapi.com/api/characters?name=${p}`
  );
  const data = await responsive.json();
  if (data.length < 1) {
    document.getElementById("img2").src =
      " https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
  } else {
    document.getElementById("img2").src = data[0].img;
  }
}
