const vdo = document.querySelector("video");
const button = document.querySelector("button");
const a = document.querySelector("a");
const start = async ()=>{
    const stream = await window.navigator.mediaDevices.getDisplayMedia({
        video:{
            mediaSource : "screen",
        }
    })

    const data = [];
    const recordScreen = new MediaRecorder(stream);

    recordScreen.start()

    recordScreen.ondataavailable = e=>{
       data.push(e.data)
       console.log(e.data)
    }
    recordScreen.onstop = e =>{
        vdo.src = URL.createObjectURL(
            new Blob(data,{
                type : data[0].type
            })
        )
    }
}

button.onclick = start;

const  rows = [
    ["a","b","c"],
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const csv = (rows.map((r)=>{
   return r.join(",")
})).join("\n")
console.log(csv)

const blob = new Blob([csv]);
a.href = URL.createObjectURL(blob)

console.log("Index.js")
