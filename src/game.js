export function playRound(userChoice) {
  const choices = ["камінь", "ножиці", "папір"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    return `Нічья! перемогла дружба ${userChoice}`;
  }

  const win =
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь");

  return win
    ? `Ти переміг! ${userChoice} б'є ${computerChoice}`
    : `Ти програв! ${computerChoice} б'є ${userChoice}`;
}
