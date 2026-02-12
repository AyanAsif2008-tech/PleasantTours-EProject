const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", (e) => {

    let pkg = document.getElementById("pkg");
    let name = document.getElementById("name");
    let cemail = document.getElementById("cemail");
    let contact = document.getElementById("contact");
    let company = document.getElementById("company");
    let msg = document.getElementById("msg");
    const val_msg = document.getElementsByClassName("val-msg");

    e.preventDefault();
    const regex = {
        pkgRegex: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
        nameRegex: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
        cemailRegex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        contactRegex: /^\+?[0-9]{1,3}?[-. (]?[0-9]{1,4}[-. )]?[0-9]{1,4}[-. ]?[0-9]{1,9}$/,
        companyRegex: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
        msgRegex: /^[A-Za-z0-9\s.,!?'"()\-@#$%&*:/\r\n]+$/
    }

    if (pkg.value == "") {
        pkg.style.border = "1px solid red"
        val_msg[0].innerHTML = "Package Name is required"
        val_msg[0].style.color = "red";
    }

    else if (regex.pkgRegex.test(pkg.value)) {
        pkg.style.border = "1px solid green"
        val_msg[0].innerHTML = ""
    }


    if (name.value == "") {
        name.style.border = "1px solid red"
        val_msg[1].innerHTML = "Name is required"
        val_msg[1].style.color = "red";
    }

    else if (regex.nameRegex.test(name.value)) {
        name.style.border = "1px solid green"
        val_msg[1].innerHTML = ""
    }


    if (cemail.value == "") {
        cemail.style.border = "1px solid red"
        val_msg[2].innerHTML = "Email must be required"
        val_msg[2].style.color = "red";
    }

    else if (regex.cemailRegex.test(cemail.value)) {
        cemail.style.border = "1px solid green"
        val_msg[2].innerHTML = ""
    }

    if (contact.value == "") {
        contact.style.border = "1px solid red"
        val_msg[3].innerHTML = "Number is required"
        val_msg[3].style.color = "red";
    }

    else if (regex.contactRegex.test(contact.value)) {
        contact.style.border = "1px solid green"
        val_msg[3].innerHTML = ""
    }

    if (company.value == "") {
        company.style.border = "1px solid red"
        val_msg[4].innerHTML = "Company Name is required"
        val_msg[4].style.color = "red";
    }

    else if (regex.companyRegex.test(company.value)) {
        company.style.border = "1px solid green"
        val_msg[4].innerHTML = ""
    }



    if (regex.msgRegex.test(msg.value)) {
        msg.style.border = "1px solid green"
        val_msg[5].innerHTML = ""
    }

    if (regex.pkgRegex.test(pkg.value) && regex.nameRegex.test(name.value) && regex.cemailRegex.test(cemail.value) && regex.contactRegex.test(contact.value) && regex.companyRegex.test(company.value)) {
        Swal.fire({
            title: "Thanks For Reaching Out!",
            text: "Your Message is submitted",
            icon: "success"
        });
        pkg.value = "";
        name.value = "";
        cemail.value = "";
        contact.value = "";
        company.value = "";
        msg.value = "";


        pkg.style.border = "1px solid lightgray";
        name.style.border = "1px solid lightgray";
        cemail.style.border = "1px solid lightgray";
        contact.style.border = "1px solid lightgray";
        company.style.border = "1px solid lightgray";
        msg.style.border = "1px solid lightgray";
    }




})
