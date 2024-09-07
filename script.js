document.getElementById('getDoctor').addEventListener('click', function() {
    const date = new Date(document.getElementById('date').value);
    const area = document.getElementById('area').value;
    const doctorInfo = document.getElementById('doctorInfo');

    let schedule = {
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
    const formattedDate = date.toISOString().split('T')[0];

    if (schedule[formattedDate] && area) {
        doctorInfo.textContent = `Doctor in charge for ${area} on ${formattedDate}: ${schedule[formattedDate][area]}`;
    } else {
        doctorInfo.textContent = "No schedule available or invalid input.";
    }
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('date').value = '';
    document.getElementById('area').value = '';
    document.getElementById('doctorInfo').textContent = '';
});
