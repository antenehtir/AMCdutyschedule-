document.addEventListener("DOMContentLoaded", function() {
    const schedule = {
        "October 01": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 02": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 03": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 04": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 05": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 06": {"OPD/ER": {"doctor": "Dr. Dawit Day, Dr. Helina Night", "phone": ""}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 07": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 08": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 09": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "October 10": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 11": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "October 12": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Dawit Day, Dr. Helina Night", "phone": ""}},
        "October 13": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 14": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 15": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 16": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 17": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 18": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 19": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 20": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam Day, Dr. Rewina Night", "phone": ""}},
        "October 21": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "October 22": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 23": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "October 24": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 25": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "October 26": {"OPD/ER": {"doctor": "Dr. Lewam Day, Dr. Rewina Night", "phone": ""}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 27": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 28": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "October 29": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "October 30": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "October 31": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}}
    };

    const dateInput = document.getElementById("date");
    const areaSelect = document.getElementById("area");
    const getDoctorButton = document.getElementById("getDoctor");
    const resetButton = document.getElementById("reset");
    const doctorInfo = document.getElementById("doctorInfo");
    const todayButton = document.getElementById("todayDoctor");

    // Helper function to format date as "October 01"
    function formatDate(date) {
        const options = { month: 'long', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    // Function to get the doctor for a selected date and area
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
                doctorInfo.textContent = `Doctor on duty for ${selectedArea}: ${doctor.doctor}, Phone: ${doctor.phone}`;
            } else {
                doctorInfo.textContent = "No doctor on duty for the selected area.";
            }
        } else {
            doctorInfo.textContent = "No schedule found for the selected date.";
        }
    }

    // Function to get the doctor on duty today for both OPD/ER and Inpatient
    function getTodayDoctor() {
        const today = new Date();
        const formattedDate = formatDate(today);
        const duty = schedule[formattedDate];

        if (duty) {
            const opdDoctor = duty["OPD/ER"];
            const inpatientDoctor = duty["Inpatient"];
            doctorInfo.innerHTML = `
                <strong>Doctor on duty for OPD/ER:</strong> ${opdDoctor.doctor}, Phone: ${opdDoctor.phone}<br>
                <strong>Doctor on duty for Inpatient:</strong> ${inpatientDoctor.doctor}, Phone: ${inpatientDoctor.phone}
            `;
        } else {
            doctorInfo.textContent = "No schedule available for today.";
        }
    }

    // Reset function
    function resetForm() {
        dateInput.value = "";
        areaSelect.value = "";
        doctorInfo.textContent = "";
    }

    // Event listeners
    getDoctorButton.addEventListener("click", getDoctor);
    resetButton.addEventListener("click", resetForm);
    todayButton.addEventListener("click", getTodayDoctor); // Event listener for the new "Who's on Duty Today?" button
});
