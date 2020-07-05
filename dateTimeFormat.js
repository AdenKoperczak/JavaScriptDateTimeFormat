let dateTimeUtils = {
    getFormatObject: function(local, format, date) {
        let out = {};
        new Intl.DateTimeFormat(local,format).formatToParts(date).forEach(item => {
            if (format.hasOwnProperty(item.type)) {
                out[item.type] = item.value;
            }
        });
        return out;
    },
    formatReplace: function(str, data) {
        str = str.replace("%%", "%-")
        data.forEach(item => {
            str = str.replace(new RegExp(`%${item[0]}`,"g"), item[1]);
        });
        str = str.replace("%.","");
        str = str.replace("%-", "%");
        return str;
    },
    getTimeZoneOffset: function(date) {
        function formatAsTwo(num) {
            let out = num.toString();
            return ((out.length == 1) ? "0" + out : out);
        }
        let raw = date.getTimezoneOffset();
        let sign = ((raw > 0) ? "-" : "+");
        raw = Math.abs(raw);
        let m = raw % 60;
        let h = (raw - m) / 60;
        return sign + formatAsTwo(h) + formatAsTwo(m);
    },
}
class DateTimeFormater {
    constructor (format, local = undefined) {
        this._format = format;
        this.local = local;
    }
    format(date) {
        return dateTimeFormat(date, this._format, this.local);
    }
}

function dateTimeFormat(date, format, local = undefined) {
    let smallN = dateTimeUtils.getFormatObject(local, {weekday: "short", year: "2-digit", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"}, date);
    let largeN = dateTimeUtils.getFormatObject(local, {weekday: "long", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}, date);
    let smallT = dateTimeUtils.getFormatObject(local, {era: "short", month: "short", timeZoneName: "short"}, date);
    let largeT = dateTimeUtils.getFormatObject(local, {era: "long", month: "long", timeZoneName: "long"}, date);
    let timeZoneOffset = dateTimeUtils.getTimeZoneOffset(date)
    return dateTimeUtils.formatReplace(format, 
        [['Mt', largeT.month],
        ['mt', smallT.month],
        ['Mn', largeN.month],
        ['mn', smallN.month],
        ['zn', timeZoneOffset],
        ['Y', largeN.year],
        ['y', smallN.year],
        ['D', largeN.day],
        ['d', smallN.day],
        ['H', largeN.hour],
        ['h', smallN.hour],
        ['M', largeN.minute],
        ['m', smallN.minute],
        ['S', largeN.second],
        ['s', smallN.second],
        ['W', largeN.weekday],
        ['w', smallN.weekday],
        ['E', largeT.era],
        ['e', smallT.era],
        ['Z', largeT.timeZoneName],
        ['z', smallT.timeZoneName]])
}
