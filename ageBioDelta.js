// ageBioDelta.js

function calculateAgeBioDelta(height, weight, MAC, TSF, SSF, THC, CAC, WC, age, gender) {
    let height_z = (height - 168.0296) / 10.10057;
    let weight_z = (weight - 74.55884) / 15.95705;
    let MAC_z = (MAC - 31.32318) / 4.088715;
    let TSF_z = (TSF - 17.71431) / 8.045224;
    let SSF_z = (SSF - 19.28909) / 7.58855;
    let THC_z = (THC - 51.43524) / 5.983653;
    let CAC_z = (CAC - 37.39853) / 3.721842;
    let WC_z = (WC - 92.49339) / 13.27777;

    let PC1 = -0.19803060 * height_z +  0.20425850 * MAC_z + 0.04284374 * TSF_z + -0.43948564 * SSF_z + 0.61312262 * THC_z + 0.54236740 * CAC_z + 0.05836034 * weight_z + -0.23385620 * WC_z;
    let PC2 = 0.32870777 * height_z + -0.20454178 * MAC_z + 0.76803125 * TSF_z + 0.71945245 * SSF_z + -0.05348850 * THC_z + -0.11950818 * CAC_z + -0.07587964 * weight_z + -0.25950829 * WC_z;
    let PC3 = -0.2535978 * height_z + 0.2834824 * MAC_z + -0.4075045 * TSF_z + 0.1916974 * SSF_z + -0.3413504 * THC_z + -0.2230009 * CAC_z + 0.2670468 * weight_z + 0.8531960 * WC_z;
    let PC4 = 1.11158366 * height_z + -0.18532514 * MAC_z + 0.09884133 * TSF_z + 0.36739688 * SSF_z + -0.14821777 * THC_z + -0.11394623 * CAC_z + 0.15023216 * weight_z + -0.26576748 * WC_z;

    let riskMod, riskNull, logRiskRatio, ageBioDelta;

    if (gender === "female") {
        riskMod = Math.exp(0.0896 * age - 0.1378 * PC1 - 0.2752 * PC2 + 0.256 * PC3 + 0.0345 * PC4);
        riskNull = Math.exp(0.1 * age);
        logRiskRatio = Math.log(riskMod / riskNull);
        ageBioDelta = logRiskRatio / Math.log(2) * (Math.log(2) / 0.1);
    } else if (gender === "male") {
        riskMod = Math.exp(0.08 * age - 0.3095 * PC1 - 0.101 * PC2 + 0.1693 * PC3 + 0.0119 * PC4);
        riskNull = Math.exp(0.0899 * age);
        logRiskRatio = Math.log(riskMod / riskNull);
        ageBioDelta = logRiskRatio / Math.log(2) * (Math.log(2) / 0.0889);
    }

    return ageBioDelta;
}

function judgeAgeAccelerate(ageBioDelta) {
    if (ageBioDelta > 0) {
        return "Yes";
    } else if (ageBioDelta < 0) {
        return "No";
    } else {
        return "No";  // or any other value if you want to handle the case when ageBioDelta is exactly 0
    }
}