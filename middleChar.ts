export function getMiddle(s:string) {
    if (s.length % 2 === 0) {
        return s.substring(s.length / 2, (s.length / 2) + 1)
    } else {
        s.substring(s.length / 2);
    };
  };
