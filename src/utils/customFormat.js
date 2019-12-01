class Format {
  formatFullDate = (timestamp) => {
    let dd = timestamp.getDate();
    // January is 0!
    let mm = timestamp.getMonth() + 1;

    const yyyy = timestamp.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    return `${dd}/${mm}/${yyyy}`;
  }
}
const CustomFormat = new Format();
export default CustomFormat;
