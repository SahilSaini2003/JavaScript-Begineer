let a = document.body.firstElementChild
let array = [1, 0]
let cho = prompt("Have You Installed The .EXE FIle", "yes")
if (cho == "yes") {
    async function hack() {
        setInterval(() => {
            let index = Math.floor(Math.random() * 2)
            a.insertAdjacentText("afterbegin", array[index])
            a.insertAdjacentText("afterbegin", "    ")
        }, 5)
        setInterval(() => {
            a.insertAdjacentText("afterbegin", '\xa0\xa0\xa0')
        }, 25)
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                let o = document.getElementById("hidon")
                o.hidden = true
                let a = document.getElementById("hidoff")
                a.hidden = false
                resolve(1)
            }, 10000)
        });
        await p
    }
    hack().then(async () => {
        let p = new Promise(async (resolve, reject) => {
            let na = "Searching For Device........"
            let sz = na.length
            let i = 0
            let st = setInterval(() => {
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    let o = document.getElementById("name")
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 100);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Device Found : Realme 7 pro"
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("name")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        })
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Searching...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("email")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "E-Mail Found : "  // mail
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("email")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Searching...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("holder")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Account Holder Name : Akash Kumar Kumawat"
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("holder")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Searching...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("number")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Number Attached Found : " // Number
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("number")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Searching For ISP...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("isp")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "ISP : Reliance-JIO"
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("isp")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Searching For Social Account...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("insta")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 100);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Instagram UserName : " // Id
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("insta")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else if (i == 0) {
                    o.innerHTML = na[i]
                    i++
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 200);
        });
        await p
    }).then(async () => {
        let p = new Promise(async (resolve, reject) => {
            na = "Fetching Banking Details...."
            sz = na.length
            i = 0
            st = setInterval(() => {
                let o = document.getElementById("over")
                if (i == sz) {
                    clearInterval(st)
                    resolve(1)
                }
                else {
                    o.insertAdjacentText("beforeend", na[i])
                    i++
                }
            }, 500);
        });
        await p
    }).then (async()=>{
        let p = new Promise(async (resolve, reject) => {
            setTimeout(() => {
                let o = document.getElementById("main2")
                o.hidden = true
                o = document.getElementById("end")
                o.hidden = false
            }, 6000);
        })
    })
}