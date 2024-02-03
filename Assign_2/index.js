$(document).ready(function() {
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const selectElement = $('#inputState');

    // Clear existing options
    selectElement.empty();

    // Add options dynamically
    for (let i = 0; i < indianStates.length; i++) {
        const option = $('<option>');
        option.val(indianStates[i]);
        option.text(indianStates[i]);
        selectElement.append(option);
    }
});
