export default function stripTag (string) {
  return string.replace(/<\/?[^>]+>/gi, ' ')
}
