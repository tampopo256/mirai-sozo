function auth(name){
	const auth1 = document.getElementById("auth1");
    const auth2 = document.getElementById("auth2");
    const auth3 = document.getElementById("auth3");
    const redirect = document.getElementById("redirect");
    

    if (name == "all-close") {
        auth1.style.display = "none";
        auth2.style.display = "none";
        redirect.style.display = "display";
        document.cookie = 'auth=true;Max-Age=1800';
        window.location.href("./ai.html")
    }

    else if (name == "next") {
        now += 1;
        if (now == 1) {
            auth1.style.display = "display";
            auth2.style.display = "none";
            redirect.style.display = "none";
        }

        else if (now == 2) {
            auth1.style.display = "none";
            auth2.style.display = "display";
            redirect.style.display = "none";
        }
    }
}

let now = 0;