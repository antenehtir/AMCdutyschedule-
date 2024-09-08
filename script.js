document.addEventListener("DOMContentLoaded", function() {
    const schedule = {
        "September 02": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251911234567"}},
        "September 03": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 04": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 05": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 06": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251912345678"}},
        "September 07": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251944345678"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251933345678"}},
        "September 08": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251912345678"}},
        "September 09": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251922345678"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251911234567"}},
        "September 10": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 11": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251922345678"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251912345678"}},
        "September 12": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251911234567"}},
        "September 13": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251944345678"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251933345678"}},
        "September 14": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Lewam D Dr. Rewina N", "phone": "+251911234567"}},
        "September 15": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 16": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 17": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 18": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 19": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251944345678"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251933345678"}},
        "September 20": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251912345678"}},
        "September 21": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251922345678"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251911234567"}},
        "September 22": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 23": {"OPD/ER": {"doctor": "Dr. Genet", "phone": "+251922345678"}, "Inpatient": {"doctor": "Dr. Helina", "phone": "+251912345678"}},
        "September 24": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Lewam", "phone": "+251911234567"}},
        "September 25": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251944345678"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251933345678"}},
        "September 26": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 27": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 28": {"OPD/ER": {"doctor": "Dr. Rewina", "phone": "+251933345678"}, "Inpatient": {"doctor": "Dr. Dawit", "phone": "+251944345678"}},
        "September 29": {"OPD/ER": {"doctor": "Dr. Helina", "phone": "+251912345678"}, "Inpatient": {"doctor": "Dr. Genet", "phone": "+251922345678"}},
        "September 30": {"OPD/ER": {"doctor": "Dr. Lewam", "phone": "+251911234567"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251933345678"}}
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
                doctorInfo.textContent = `Doctor on duty for ${selectedArea}: ${doctor.doctor}, Phone: ${doctor.phone}`;
            } else {
                doctorInfo.textContent = "No doctor on duty for the selected area.";
            }
        } else {
            doctorInfo.textContent = "No schedule found for the selected date.";
        }
    }

    // Event listener for "Get Doctor" button
    getDoctorButton.addEventListener("click", getDoctor);

    // Event listener for "Reset" button
    resetButton.addEventListener("click", function() {
        dateInput.value = "";
        areaSelect.selectedIndex = 0;
        doctorInfo.textContent = "";
    });
});
