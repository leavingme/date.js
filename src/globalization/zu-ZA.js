/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 13-Feb-2008
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo = {
	/* Culture Name */
    name: "zu-ZA",
    englishName: "Zulu (South Africa)",
    nativeName: "isiZulu (iNingizimu Afrika)",
    
    /* Day Name Strings */
    dayNames: ["iSonto", "uMsombuluko", "uLwesibili", "uLwesithathu", "uLwesine", "uLwesihlanu", "uMgqibelo"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    
    /* Month Name Strings */
    monthNames: ["uJanuwari", "uFebuwari", "uMashi", "uAprhili", "uMeyi", "uJuni", "uJulayi", "uAgaste", "uSepthemba", "uOkthoba", "uNovemba", "uDisemba"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

	/* AM/PM Designators */
    amDesignator: "AM",
    pmDesignator: "PM",

    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    
    /**
     * The dateElementOrder is based on the order of the 
     * format specifiers in the formatPatterns.DatePattern. 
     *
     * Example:
     <pre>
     shortDatePattern    dateElementOrder
     ------------------  ---------------- 
     "M/d/yyyy"          "mdy"
     "dd/MM/yyyy"        "dmy"
     "yyyy-MM-dd"        "ymd"
     </pre>
     *
     * The correct dateElementOrder is required by the parser to
     * determine the expected order of the date elements in the
     * string being parsed.
     */
    dateElementOrder: "ymd",
    
    /* Standard date and time format patterns */
    formatPatterns: {
        shortDate: "yyyy/MM/dd",
        longDate: "dd MMMM yyyy",
        shortTime: "hh:mm:ss tt",
        longTime: "hh:mm:ss tt",
        fullDateTime: "dd MMMM yyyy hh:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM yyyy"
    },

    /**
     * NOTE: If a string format is not parsing correctly, but
     * you would expect it parse, the problem likely lies below. 
     * 
     * The following regex patterns control most of the string matching
     * within the parser.
     * 
     * The Month name and Day name patterns were automatically generated
     * and in general should be (mostly) correct. 
     *
     * Beyond the month and day name patterns are natural language strings.
     * Example: "next", "today", "months"
     *
     * These natural language string may NOT be correct for this culture. 
     * If they are not correct, please translate and edit this file
     * providing the correct regular expression pattern. 
     *
     * If you modify this file, please post your revised CultureInfo file
     * to the Datejs Forum located at http://www.datejs.com/forums/.
     *
     * Please mark the subject of the post with [CultureInfo]. Example:
     *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
     * 
     * We will add the modified patterns to the master source files.
     *
     * As well, please review the list of "Future Strings" section below. 
     */	
    regexPatterns: {
        jan: /^ujanuwari/i,
        feb: /^ufebuwari/i,
        mar: /^umashi/i,
        apr: /^uaprhili/i,
        may: /^umeyi/i,
        jun: /^ujuni/i,
        jul: /^ujulayi/i,
        aug: /^uagaste/i,
        sep: /^usepthemba/i,
        oct: /^uokthoba/i,
        nov: /^unovemba/i,
        dec: /^udisemba/i,

        sun: /^isonto/i,
        mon: /^umsombuluko/i,
        tue: /^ulwesibili/i,
        wed: /^ulwesithathu/i,
        thu: /^ulwesine/i,
        fri: /^ulwesihlanu/i,
        sat: /^umgqibelo/i,

        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
		hour: /^h(our)?s?/i,
		week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
		
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },

    timezones: { UTC: "-000", GMT: "-000", EST: "-0500", EDT: "-0400", CST: "-0600", CDT: "-0500", MST: "-0700", MDT: "-0600", PST: "-0800", PDT: "-0700" }
};

/********************
 ** Future Strings **
 ********************
 * 
 * The following list of strings may not be currently being used, but 
 * may be incorporated into the Datejs library later. 
 *
 * We would appreciate any help translating the strings below.
 * 
 * If you modify this file, please post your revised CultureInfo file
 * to the Datejs Forum located at http://www.datejs.com/forums/.
 *
 * Please mark the subject of the post with [CultureInfo]. Example:
 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
 *
 * English Name        Translated
 * ------------------  -----------------
 * date                date
 * time                time
 * calendar            calendar
 * show                show
 * hourly              hourly
 * daily               daily
 * weekly              weekly
 * bi-weekly           bi-weekly
 * fortnight           fortnight
 * monthly             monthly
 * bi-monthly          bi-monthly
 * quarter             quarter
 * quarterly           quarterly
 * yearly              yearly
 * annual              annual
 * annually            annually
 * annum               annum
 * again               again
 * between             between
 * after               after
 * from now            from now
 * repeat              repeat
 * times               times
 * per                 per
 * min (abbrev minute) min
 * morning             morning
 * noon                noon
 * night               night
 * midnight            midnight
 * mid-night           mid-night
 * evening             evening
 * final               final
 * future              future
 * spring              spring
 * summer              summer
 * fall                fall
 * winter              winter
 */
