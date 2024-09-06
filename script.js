document.getElementById("getDoctorBtn").addEventListener("click", function() {
    var selectedDate = new Date(document.getElementById("date").value);
    var selectedArea = document.getElementById("area").value;

    var phoneNumbers = {
        "Dr. Dawit": "+251920192199",
        "Dr. Lewam": "+251934343144",
        "Dr. Helina": "+251913110147",
        "Dr. Genet": "+251921931429",
        "Dr. Rewina": "+251913670699"
    };

    var schedule = {
        "September 02": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam"},
        "September 03": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "September 04": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "September 05": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "September 06": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Helina"},
        "September 07": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "September 08": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Helina"},
        "September 09": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "September 10": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "September 11": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "September 12": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam"},
        "September 13": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "September 14": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam D Dr. Rewina N"},
        "September 15": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "September 16": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "September 17": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "September 18": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Dawit"},
        "September 19": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "September 20": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Helina"},
        "September 21": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam"},
        "September 22": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "September 23": {"OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina"},
        "September 24": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam"},
        "September 25": {"OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina"},
        "September 26": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Dawit"},
        "September 27": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet"},
        "September 28": {"OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit"},
        "September 29": {"OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet"},
        "September 30": {"OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Rewina"}
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
    return "September " + (day < 10 ? '0' : '') + day;
}
