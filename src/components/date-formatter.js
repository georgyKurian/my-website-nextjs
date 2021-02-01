export default function DateFormatter({ date, ...otherProps }) {
  return date ? <time dateTime={date?.timestamp} {...otherProps}>{date?.formatted}</time> : null;
}
