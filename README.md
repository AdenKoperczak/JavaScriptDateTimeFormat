#JavaScript DateTimeFormat
##Another way to format dates in JavaScript
JavaScripts methodes for formating datetimes are quite versatile, but do come with some issues. While they do make localization a breaze, they also make writing your own format difficult. This code is useful for projects where localization is not important. It makes writing your own format easy, but localization hard.
##General Concept
DateTimeFormat uses a string format to create an output string from a date. This format consists of "%" followed by one or more charicture, which represent diffrent parts of a date-time. To see a list of these see below.
##List of Format Strings
- %Y  = Full year (usually four digit)
- %y  = two digit year
- %Mn = The month as a two digit number
- %mn = The month as a number
- %Mt = The month's name
- %mt = The month's abbreviated name
- %D  = The day of the month as a two digit number
- %d  = The day of the month as a number
- %H  = The hour of the day as a two digit number
- %h  = The hour of the day as a number
- %M  = The minute of the hour as a two digit number
- %m  = The minute of the hour as a number
- %S  = The second of the minute as a two digit number
- %s  = The second of the minute as a number
- %Z  = The name of the timezone
- %z  = The abbreviated name of the timezone
- %zn = The timezone as a number (i.e. -0500 for Eastern Standared Time)
- %E  = The name of the era
- %e  = The abbreviated name of the era
- %W  = The name of the day of the week
- %w  = The abbreviated name of the day of the week
- %%  = just "%"
- %-  = just "%"
- %.  = Nothing. Useful if you want the minute of the hour followed by an "n" formated as "%M%.n". without "%." it would simply give the month.
