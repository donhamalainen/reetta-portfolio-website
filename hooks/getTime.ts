// Haetaan suomen aika
export default function getFinnishTime(): string {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString("fi-FI", {
    timeZone: "Europe/Helsinki",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return formattedTime;
}
