document.addEventListener("DOMContentLoaded", function() {
    const schedule = {
        "September 02": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "September 03": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 04": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 05": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 06": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "September 07": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "September 08": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "September 09": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "September 10": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 11": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "September 12": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "September 13": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "September 14": {"doctor": {"Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam (Day), Dr. Rewina (Night)", "phone": ""}},
        "September 15": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 16": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 17": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 18": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 19": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "September 20": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "September 21": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "September 22": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 23": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251921931429"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251913110147"}},
        "September 24": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251934343144"}},
        "September 25": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}},
        "September 26": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 27": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 28": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251913670699"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251920192199"}},
        "September 29": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251921931429"}},
        "September 30": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251934343144"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670699"}}
    };

    const dateInput = document.getElementById("date");
    const areaSelect = document.getElementById("area");
    const getDoctorButton = document.getElementById("getDoctor");
    const resetButton = document.getElementById("reset");
    const doctorInfo = document.getElementById("doctorInfo");
    const todayButton = document.getElementById("todayDoctor");

    // Helper function to format date as "September 02"
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
