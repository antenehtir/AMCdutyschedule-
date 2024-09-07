document.addEventListener("DOMContentLoaded", function() {
    const schedule = {
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

    const dateInput = document.getElementById("date");
    const areaSelect = document.getElementById("area");
    const getDoctorButton = document.getElementById("getDoctor");
    const resetButton = document.getElementById("reset");
    const doctorInfo = document.getElementById("doctorInfo");

    // Helper function to format date as "September 02"
    function formatDate(date) {
        const options = { month: 'long', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    // Function to get the doctor based on the selected date and area
    function getDoctor() {
        const selectedDate = dateInput.value;
        const selectedArea = areaSelect.value;

        if (!selectedDate) {
            doctorInfo.textContent = "Please select a date.";
            return;
        }

        if (!selectedArea) {
            doctorInfo.textContent = "Please select an area.";
            return;
        }

        const formattedDate = formatDate(selectedDate);
        const duty = schedule[formattedDate];
        if (duty) {
            const doctor = duty[selectedArea];
            if (doctor) {
                doctorInfo.textContent = `Doctor on duty for ${selectedArea}: ${doctor}`;
            } else {
                doctorInfo.textContent = "No doctor available for the selected area.";
            }
        } else {
            doctorInfo.textContent = "No schedule available for this date.";
        }
    }

    // Reset function
    function resetForm() {
        dateInput.value = "";
        areaSelect.value = "";
        doctorInfo.textContent = "";
    }

    // Event listeners for the buttons
    getDoctorButton.addEventListener("click", function(event) {
        event.preventDefault();  
        getDoctor();
    });

    resetButton.addEventListener("click", function(event) {
        event.preventDefault();
        resetForm();
    });
});
