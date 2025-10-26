export function TimeAgo(timestamp: number): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffMs = timestamp - Date.now(); // positive = future
  const diffSec = Math.round(diffMs / 1000);
  const absSec = Math.abs(diffSec);

  if (absSec < 60) return rtf.format(Math.round(diffSec), "second");
  const diffMin = Math.round(diffSec / 60);
  if (Math.abs(diffMin) < 60) return rtf.format(diffMin, "minute");
  const diffH = Math.round(diffMin / 60);
  if (Math.abs(diffH) < 24) return rtf.format(diffH, "hour");
  const diffD = Math.round(diffH / 24);
  return rtf.format(diffD, "day");
}
export function getTimeProgress(
  timestampStart: number,
  timestampEnd: number
): number {
  const now = Date.now();
  const total = timestampEnd - timestampStart;
  const elapsed = now - timestampStart;

  // progress in %
  const progress = (elapsed / total) * 100;

  // clamp between 0–100
  return Math.min(100, Math.max(0, Math.round(progress)));
}
