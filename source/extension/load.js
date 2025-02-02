
(function () {
    let version = '{{timestamp}}'

    try {
        eval(document.currentScript.getAttribute("cachedvt"));
    } catch (e) { console.error(e) }

    try {
        if (window.videoTogetherExtension == undefined) {
            let inlineScript = document.createElement("script");
            inlineScript.textContent = document.currentScript.getAttribute("cachedvt");
            document.head.appendChild(inlineScript);
        }
    } catch (e) { console.error(e) }


    let language = "{$locale$}";

    if (window.videoTogetherExtension == undefined) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://2gether.video/release/vt.${language}.user.js?timestamp=` + version;
        try {
            document.body.appendChild(script);
        } catch { };
    }

    // fallback to china service
    setTimeout(() => {
        try {
            document.querySelector("#videoTogetherLoading").remove()
        } catch { }

        if (window.videoTogetherExtension == undefined) {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://videotogether.oss-cn-hangzhou.aliyuncs.com/release/vt.${language}.user.js`;
            try {
                document.body.appendChild(script);
            } catch { };
        }
    }, 5000);
})()