function timeWord(input){
    dictionary_hour = { 
        12:"twelve",
        11:"eleven",
        10:"ten",
        9:"nine",
        8:"eight",
        7:"seven",
        6:"six",
        5:"five",
        4:"four",
        3:"three",
        2:"two",
        1:"one",
        0:"twelve"
    }

    dictionary_minute = {
        0:"o'clock",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
        20:"twenty",
        30:"thirty",
        40:"fourty",
        50:"fifty",
    }

    
    // "06:18" map time into an array and forget the ":"
    input = input.split("");
    input.splice(2,1);
    
    
    hour = `${input[0]}${input[1]}`; // 06
    minute = `${input[2]}${input[3]}`; // 18
    combined = `${hour}${minute}`;
    
    /** special cases */
    if(combined === "1200"){
        return "noon";
    }
    if(combined === "0000"){
        return "midnight";
    }
    
    // empty strings to combine into the final string that we'll return
    string_hour = "";
    string_minute = "";
    am_or_pm = "";
    is_o_or_oh_or_no = "";
    
    int_unconverted_hour = Number(hour); // hour represented as integer for locating in dict
    int_hour = Number(hour); // hour represented as integer for locating in dict
    int_minute = Number(minute); // minute represented as integer for locating in dict
    if(int_hour > 12){ // converts 24-hour to 12-hour time
        int_hour = Number(hour)-12;
    }
    
    /** getting hour string **/
    string_hour = dictionary_hour[int_hour];

    /** getting minute string **/
    string_minute = dictionary_minute[int_minute] || "-1"; // finds time or doesn't exist which means we'll have to combine times together
    if(string_minute === "-1"){
        tens = dictionary_minute[Number(minute[0]*10)]; // in minute 21 would be represented as '2'
        if(tens === 0){
            is_o_or_oh_or_no = "oh";
        }
        ones = dictionary_minute[Number(minute[1])]; // in minute 21 would be represented as '1'

        string_minute = `${tens} ${ones}`;
    }
    else if(minute[0] === "0" && minute[1] !== "0"){
        is_o_or_oh_or_no = " oh";
    }

    /** is am or pm **/
    if(combined > 1200){
        am_or_pm = "pm";
    }
    else{
        am_or_pm = "am";
    }
    
    time_string = `${string_hour}${is_o_or_oh_or_no} ${string_minute} ${am_or_pm}`;
    return time_string;
}

module.exports = timeWord;
