document.addEventListener('DOMContentLoaded', function() {
    // October 2024 duty schedule
    const schedule = {
        "October 01": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" },
        "October 02": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Helina" },
        "October 03": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam" },
        "October 04": { "OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit" },
        "October 05": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina" },
        "October 06": { "OPD/ER": "Dr. Dawit Day, Dr. Helina Night", "Inpatient": "Dr. Lewam" },
        "October 07": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" },
        "October 08": { "OPD/ER": "Dr. Helina", "Inpatient": "Dr. Rewina" },
        "October 09": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet" },
        "October 10": { "OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit" },
        "October 11": { "OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet" },
        "October 12": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Dawit Day, Dr. Helina Night" },
        "October 13": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" },
        "October 14": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Helina" },
        "October 15": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam" },
        "October 16": { "OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit" },
        "October 17": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina" },
        "October 18": { "OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam" },
        "October 19": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" },
        "October 20": { "OPD/ER": "Dr. Helina", "Inpatient": "Dr. Lewam Day, Dr. Rewina Night" },
        "October 21": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Genet" },
        "October 22": { "OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit" },
        "October 23": { "OPD/ER": "Dr. Helina", "Inpatient": "Dr. Genet" },
        "October 24": { "OPD/ER": "Dr. Lewam", "Inpatient": "Dr. Dawit" },
        "October 25": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" },
        "October 26": { "OPD/ER": "Dr. Lewam Day, Dr. Rewina Night", "Inpatient": "Dr. Helina" },
        "October 27": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Lewam" },
        "October 28": { "OPD/ER": "Dr. Rewina", "Inpatient": "Dr. Dawit" },
        "October 29": { "OPD/ER": "Dr. Genet", "Inpatient": "Dr. Helina" },
        "October 30": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Lewam" },
        "October 31": { "OPD/ER": "Dr. Dawit", "Inpatient": "Dr. Rewina" }
    };

    const dateSelect = document.getElementById('date');
    const areaSelect = document.getElementById('area');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');

    // Display doctor based on selected date and area
    document.getElementById('getDoctor').addEventListener('click', function() {
        const selectedDate = dateSelect.value;
        const selectedArea = areaSelect.value;

        if (schedule[selectedDate] && schedule[selectedDate][selectedArea]) {
            result.textContent = `Doctor on duty for ${selectedArea} on ${selectedDate}: ${schedule[selectedDate][selectedArea]}`;
        } else {
            result.textContent = 'No schedule available for the selected date and area.';
        }
    });

    // Reset selection
    resetButton.addEventListener('click', function() {
        dateSelect.value = '';
        areaSelect.value = '';
        result.textContent = '';
    });
});
