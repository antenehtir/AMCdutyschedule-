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
        "September 14": {
            "OPD/ER": {"doctor": "Dr. Helina", "phone": "+251913110147"}, 
            "Inpatient": {"doctor": "Dr. Lewam (Day) / Dr. Rewina (Night)", "phone": "+251934343144 / +251913670699"}
        },
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
        "September 25": {"OPD/ER": {"doctor": "Dr. Dawit", "phone": "+251920192199"}, "Inpatient": {"doctor": "Dr. Rewina", "phone": "+251913670
