const { 군,서울특별시,부산특별시,대구광역시,인천광역시,광주광역시,대전광역시, 울산광역시 } = require('./LocationComponent')

let locationArr = [군, 서울특별시, 부산특별시, 대구광역시, 인천광역시, 광주광역시, 대전광역시, 울산광역시];
let search = {}

locationArr.forEach(v => {
    let locationName = v
    let obj = {[locationName]:v}
    search = { ...search, ...obj }
});

module.exports = search