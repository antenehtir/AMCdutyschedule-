document.getElementById("getDoctorBtn").addEventListener("click", function() {
    var selectedDate = new Date(document.getElementById("date").value);
    var selectedArea = document.getElementById("area").value;

    var phoneNumbers = {
        "Dr. Dawit": "+251920192199",
        "Dr. Lewam": "+251934343144",
        "Dr. Helina": "+251913110147",
        "Dr. Anteneh": "+251912412707",
        "Dr. Genet": "+251921931429",
        "Dr. Rediet": "+251021146518",
        "Dr. Rewina": "+251913670699"
    };

    var schedule = {
        "April 01": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "April 02": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "April 03": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "April 04": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "April 05": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "April 06": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "April 07": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "April 08": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "April 09": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "April 10": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "April 11": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "April 12": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "April 13": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "April 14": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "April 15": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "April 16": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "April 17": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "April 18": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "April 19": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "April 20": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "April 21": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Lewam"},
        "April 22": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "April 23": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Anteneh"},
        "April 24": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "April 25": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "April 26": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "April 27": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Anteneh"},
        "April 28": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "April 29": {"OPD/ER": "Dr. Anteneh", "Inpatient": "Dr. Helina"},
        "April 30": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"}
    };

    var formattedDate = formatDate(selectedDate);
    var doctorName = schedule[formattedDate] ? schedule[formattedDate][selectedArea] : null;
    var doctorPhoneNumber = doctorName ? phoneNumbers[doctorName] : null;
    var doctorElement = document.getElementById("doctor");

    if (doctorName) {
        doctorElement.innerHTML = "Doctor on duty for " + selectedArea + " on " + formattedDate + " is <strong>" + doctorName + "</strong>. <br> Phone number: " + doctorPhoneNumber;
    } else {
        doctorElement.innerText = "No schedule found for the selected date.";
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("doctor").innerText = "";
    document.getElementById("date").value = "";
});

function formatDate(date) {
    var month = date.getMonth() + 1; // Months are zero based
    var day = date.getDate();
    return "April " + (day < 10 ? '0' : '') + day;
}
