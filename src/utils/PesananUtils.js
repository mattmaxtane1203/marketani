export function generateOrderNumber() {
  const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
  return randomNumber;
}

export function generateTrackingNumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let trackingNumber = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    trackingNumber += characters[randomIndex];
  }
  return trackingNumber;
}
