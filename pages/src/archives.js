// it'd be: mods[0].name

const mods = {
    "capsulemod": [
        {
            name: "test",
            description: "test",
            src: "../src/imgs/deada.png",
            href: "https://spiteful1277.neocities.org/Memorbox%20V1%20Recovered%20File"
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/deada.png",
            href: "https://spiteful1277.neocities.org/Memorbox%20V2%20Recovered%20File"
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        }
    ],
    "ozz----mod": [
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        },
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: ""
        }
    ],
    "y-box--mod": [
        {
            name: "test",
            description: "test",
            src: "../src/imgs/Blockage.png",
            href: "https://spiteful1277.neocities.org/Y-Box%20V1%20Recovered"
        }
    ]
};

const modContainer = document.getElementById("mods");
const descriptionContainer = document.getElementById("modscriptions");

async function descriptor(n, d) {
    await new Promise(resolve => setTimeout(resolve, 10));
    if (isHoveringButton) {
        sfx.playSFX('info');
        document.getElementById("myName").innerHTML = n;
        document.getElementById("myDesc").innerHTML = d;
        descriptionContainer.classList.add("visible");
    } else {
        descriptionContainer.classList.remove("visible");
    }
}

var isHoveringButton = false;

Object.entries(mods).forEach(([groupName, modArray]) => {
    const groupDiv = document.createElement("div");
    groupDiv.style.display = "flex";
    groupDiv.style.flexDirection = "row";

    groupDiv.style.gap = "12px"; // Space between buttons

    const title = document.createElement("h2");
    title.textContent = groupName.toUpperCase();
    title.style.alignSelf = "left";

    groupDiv.appendChild(title);

    const hr = document.createElement("hr");

    modArray.forEach((mod) => {
        const btn = document.createElement("button");
        const img = document.createElement("img");

        img.src = mod.src;
        img.style.width = "75%";
        img.style.height = "75%";
        btn.appendChild(img);

        btn.style.gap = "10px";
        btn.style.alignItems = "top";
        btn.style.justifyItems = "center";

        btn.onclick = () => {
            window.location.href = mod.href;
        };

        btn.disabled = mod.href === "";

        btn.addEventListener("mouseenter", function(e) { 
            document.getElementById("myName").innerHTML = n;
            document.getElementById("myDesc").innerHTML = d;
        });

        groupDiv.appendChild(btn);
    });

    // Add group to main container
    modContainer.appendChild(groupDiv);
    modContainer.appendChild(hr);
});