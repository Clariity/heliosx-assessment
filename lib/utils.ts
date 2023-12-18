export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function titleCase(word: string) {
  return word
    .split("-")
    .map((splitWord) => capitalizeFirstLetter(splitWord))
    .join(" ");
}
