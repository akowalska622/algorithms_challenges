function addBorder(picture) {
	let wallLength = picture[0].length + 2
  let padded = picture.map(x => `*${x}*`)
  let solidWall = "*".repeat(wallLength)
  let framed = [solidWall, ...padded, solidWall]
  return framed
}

console.log(addBorder(["abc", "ded"]));
